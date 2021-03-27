import React, { Component, Fragment } from "react"
import { graphql, StaticQuery } from "gatsby"
import Slider from "react-slick"
import "./matches-slider.scss"
import MatchWithLogo from "./match-with-logo"
import Spinner from "./Spinner"

class MatchesSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: true,
    }

    this.apiServerUrl = props.config.site.siteMetadata.serverUrl
    this.apiLogoUrl = props.config.site.siteMetadata.logoUrl
    this.apiRefreshRate = props.config.site.siteMetadata.refreshRate
    this.timeout = {}
  }

  updateData() {
    const { season, regnumber } = this.props

    fetch(`${this.apiServerUrl}/seasons/${season}/matches/upcoming/${regnumber}`)
      .then((response) => response.json())
      .then((json) => this.setState({ data: json, loading: false }))

    this.timeout = setTimeout(() => {
      this.updateData(() => {})
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
      if (this.state.data.length <= 0) {
        return <Fragment></Fragment>
      }
      const settings_slickslider = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        lazyLoad: true,

        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      }

      this.state.data.sort((a, b) => a.dateTime - b.dateTime)

      return (
        <div className="matchesSlider--wrapper">
          <Slider className={`matchesSlider`} {...settings_slickslider}>
            {this.state.data.map((match, i) => {
              return (
                <div className="matchesSlider__item" key={i} data-equalizer-watch="true">
                  <MatchWithLogo match={match} lazyload={false} />
                </div>
              )
            })}
          </Slider>
        </div>
      )
    } else {
      return <Spinner />
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
  <StaticQuery query={query} render={(data) => <MatchesSlider config={data} season={season} regnumber={regnumber} />} />
)
