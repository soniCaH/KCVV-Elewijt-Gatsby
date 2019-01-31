import React, { Component, Fragment } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import './matches-overview.scss'
import moment from 'moment'
import { mapMatchStatus, formatDivision } from '../script/helper'
import 'moment/locale/nl-be'

class MatchesOverview extends Component {
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
      this.state.data.sort((a, b) => a.dateTime - b.dateTime)

      moment.locale('nl-be')
      let matchTime = moment()

      const ignore = this.props.exclude

      return (
        <div className="matchesOverview--wrapper">
          {this.state.data.map((match, i) => {
            if (ignore.indexOf(match.division) !== -1) {
              return <Fragment key={i} />
            }

            matchTime = moment(match.dateTime)
            return (
              <div key={i}>
                <span className={'label'}>
                  {formatDivision(match.division, match.region)}
                </span>
                <span className={'matchesOverview__date'}>
                  {matchTime.format('ddd D MMMM - H:mm')}
                </span>

                {match.status ? (
                  <span className={'label alert matchesOverview__status'}>
                    {mapMatchStatus(match.status)}
                  </span>
                ) : (
                  ''
                )}
                <h6>
                  {match.home} - {match.away}
                </h6>
              </div>
            )
          })}
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

export default ({ season, regnumber, exclude }) => (
  <StaticQuery
    query={query}
    render={data => (
      <MatchesOverview
        config={data}
        season={season}
        regnumber={regnumber}
        exclude={exclude}
      />
    )}
  />
)
