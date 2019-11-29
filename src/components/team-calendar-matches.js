import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { mapMatchStatus } from '../scripts/helper'

import ClubLogo from './clublogo'

import './team-calendar-matches.scss'

class CalendarRow extends Component {
  render() {
    const moment = require('moment')
    const timezone = require('moment-timezone')
    moment.locale('nl-BE')

    const { result } = this.props
    const {
      matchDay,
      dateTime,
      resultHome,
      resultAway,
      regNumberHome,
      regNumberAway,
      home,
      away,
      status,
    } = result

    const d = new moment(dateTime)
    const date = d.format('dddd D MMMM YYYY')
    const time = d.format('HH:mm')
    return (
      <article className={'team-calendar-match'}>
        <header className={'team-calendar-match__title'}>
          <h2>
            {date}{' '}
            <span className={'team-calendar-match__title__separator'}>|</span>
            <span className={'team-calendar-match__title__tagline'}>
              speeldag {matchDay}
            </span>
          </h2>
        </header>
        <div className={'team-calendar-match__main'}>
          <div
            className={
              'team-calendar-match__team team-calendar-match__team--home'
            }
          >
            {home}

            <ClubLogo
              regNumber={regNumberHome}
              title={home}
              className={
                'team-calendar-match__logo team-calendar-match__logo--home'
              }
            />
          </div>
          <div className={'team-calendar-match__score'}>
            {(typeof status !== 'undefined' || status !== '') ? (
              <span title={mapMatchStatus(status)}>{status}</span>
            ) : typeof resultHome !== 'undefined' &&
              typeof resultAway !== 'undefined' ? (
              `${resultHome} - ${resultAway}`
            ) : (
              time
            )}
          </div>
          <div
            className={
              'team-calendar-match__team team-calendar-match__team--away'
            }
          >
            <ClubLogo
              regNumber={regNumberAway}
              title={away}
              className={
                'team-calendar-match__logo team-calendar-match__logo--away'
              }
            />
            {away}
          </div>
        </div>
      </article>

      // <tr>
      //   <td className={'display-desktop'}>{date}</td>
      //   <td className={'display-mobile'}>{dateShort}</td>
      //   <td>{time}</td>
      //   <td>{home}</td>
      //   <td>
      //     {typeof resultHome !== 'undefined' &&
      //     typeof resultAway !== 'undefined'
      //       ? `${resultHome} - ${resultAway}`
      //       : 'vs'}
      //   </td>
      //   <td>{away}</td>
      //   <td>{status}</td>
      // </tr>
    )
  }
}

class TeamCalendarMatches extends React.Component {
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
    let { season, region, division } = this.props

    fetch(
      `${this.apiServerUrl}/seasons/${season}/regions/${region}/matches/${division}`
    )
      .then(response => response.json())
      .then(json => this.setState({ data: json, loading: false }))

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
      const elewijtMatches = this.state.data
        .filter(
          ({ regNumberHome, regNumberAway }) =>
            regNumberHome === '00055' || regNumberAway === '00055'
        )
        .sort((a, b) =>
          a.dateTime > b.dateTime ? 1 : b.dateTime > a.dateTime ? -1 : 0
        )

      return (
        <section className={'team-calendar-matches'}>
          {elewijtMatches.map((result, i) => (
            <CalendarRow result={result} key={i} />
          ))}
        </section>
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

export default ({ season, region, division }) => (
  <StaticQuery
    query={query}
    render={data => (
      <TeamCalendarMatches
        config={data}
        season={season}
        region={region}
        division={division}
      />
    )}
  />
)
