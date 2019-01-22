import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Slider from 'react-slick'
import moment from 'moment'
import 'moment/locale/nl-be'
import './matches-slider.scss'

class MatchesSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: true,
    }

    this.apiServerUrl = props.config.site.siteMetadata.serverUrl
    this.apiRefreshRate = props.config.site.siteMetadata.refreshRate
    this.timeout = {}
  }

  updateData() {
    const { season, regnumber } = this.props

    console.log('Fetching matches overview')

    fetch(
      `${this.apiServerUrl}/seasons/${season}/matches/upcoming/${regnumber}`
    )
      .then(response => response.json())
      .then(json => this.setState({ data: json, loading: false }))

    this.timeout = setTimeout(() => {
      this.updateData(() => {
        console.log('Updating the rankings.')
      })
    }, this.apiRefreshRate)
  }

  componentDidMount() {
    this.updateData()
  }

  componentWillUnmount() {
    clearInterval(this.timeout)
  }

  render() {
    if (this.state.loading === false && this.state.data) {
      const settings_slickslider = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
      }

      this.state.data.sort((a, b) => a.dateTime - b.dateTime)

      return (
        <div className="matchesSlider--wrapper">
          <Slider className={'matchesSlider'} {...settings_slickslider}>
            {this.state.data.map((match, i) => {
              moment.locale('nl-be')
              const matchTime = moment(match.dateTime)
              return (
                <div className="matchesSlider__item">
                  <div className="matchesSlider__item--inner">
                    <h5>{match.division}</h5>
                    <p>{match.home}</p> <span>vs</span> <p>{match.away}</p>
                    <p>{matchTime.format('dddd DD MMMM YYYY')}</p>
                    <p>{matchTime.format('HH:mm')}</p>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const query = graphql`
  query {
    site {
      siteMetadata {
        serverUrl
        refreshRate
      }
    }
  }
`

export default ({ season, regnumber }) => (
  <StaticQuery
    query={query}
    render={data => (
      <MatchesSlider config={data} season={season} regnumber={regnumber} />
    )}
  />
)
