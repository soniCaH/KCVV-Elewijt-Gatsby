import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Slider from 'react-slick'
import moment from 'moment'
import 'moment/locale/nl-be'
import { mapMatchStatus, formatDivision } from '../script/helper'
import defaultLogo from '../images/default.png'
import './matches-slider.scss'

class MatchesSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: true,
      imageLoadError: true,
    }

    this.apiServerUrl = props.config.site.siteMetadata.serverUrl
    this.apiLogoUrl = props.config.site.siteMetadata.logoUrl
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
        <div
          className="matchesSlider--wrapper"
          data-equalizer="true"
          data-equalize-on="medium"
        >
          <Slider className={'matchesSlider'} {...settings_slickslider}>
            {this.state.data.map((match, i) => {
              moment.locale('nl-be')
              const matchTime = moment(match.dateTime)

              const homeLogo = `${this.apiLogoUrl}/${match.regNumberHome}`
              const awayLogo = `${this.apiLogoUrl}/${match.regNumberAway}`

              return (
                <div
                  className="matchesSlider__item"
                  key={i}
                  data-equalizer-watch="true"
                >
                  <div className="matchesSlider__item--inner">
                    <h5>{formatDivision(match.division, match.region)}</h5>
                    {match.status ? (
                      <>
                        <time
                          dateTime={matchTime.format()}
                          className={
                            'matches__meta__datetime matches__meta__datetime--date'
                          }
                        >
                          {matchTime.format('dddd DD MMMM - H:mm')}
                        </time>
                        <div
                          className={
                            'matches__meta__datetime matches__meta__datetime--time matches__meta__status'
                          }
                        >
                          {mapMatchStatus(match.status)}
                        </div>
                      </>
                    ) : (
                      <>
                        <time
                          dateTime={matchTime.format()}
                          className={
                            'matches__meta__datetime matches__meta__datetime--date'
                          }
                        >
                          {matchTime.format('dddd DD MMMM YYYY')}
                        </time>
                        <time
                          dateTime={matchTime.format()}
                          className={
                            'matches__meta__datetime matches__meta__datetime--time'
                          }
                        >
                          {matchTime.format('H:mm')}
                        </time>
                      </>
                    )}

                    <div className={'matches__meta__logos'}>
                      <div className={'matches__meta__logos__inner'}>
                        <img
                          src={homeLogo}
                          onError={e => {
                            e.target.onerror = null
                            e.target.src = defaultLogo
                          }}
                          alt={match.home}
                          className={
                            'matchesSlider__item__logo matchesSlider__item__logo--home'
                          }
                        />
                      </div>
                      <div className={'matches__meta__logos__inner'}>
                        <img
                          src={awayLogo}
                          onError={e => {
                            e.target.onerror = null
                            e.target.src = defaultLogo
                          }}
                          alt={match.away}
                          className={
                            'matchesSlider__item__logo matchesSlider__item__logo--away'
                          }
                        />
                      </div>
                    </div>

                    <div className={'matches__meta__logos'}>
                      <div
                        className={
                          'matches__meta__logos__inner matches__meta__teamname'
                        }
                      >
                        {match.home}
                      </div>
                      <div
                        className={
                          'matches__meta__logos__inner matches__meta__teamname'
                        }
                      >
                        {match.away}
                      </div>
                    </div>
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
        logoUrl
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
