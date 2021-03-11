import React, { Component } from "react"

import { graphql } from "gatsby"

import Layout from "../layouts/index"
import SEO from "../components/seo"

class GamePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: true,
    }

    const {
      data: {
        site: {
          siteMetadata: { kcvvPsdApi, refreshRate },
        },
      },
    } = this.props

    this.kcvvPsdApi = kcvvPsdApi
    this.apiRefreshRate = refreshRate
    this.timeout = {}
    this.matchId = this.props.id || null
  }

  updateData() {
    const apiUrl = `${this.kcvvPsdApi}/match/${this.matchId}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => this.setState({ data: json, loading: false }))
  }

  componentDidMount() {
    this.updateData()
  }

  render() {
    if (this.state.loading === false && this.state.data) {
      const { general, substitutes, lineup, events } = this.state.data
      const ogImage = {
        src: general?.homeClub.logo,
        width: 180,
        height: 180,
      }

      console.log(lineup.home)
      console.log(lineup.away)
      return (
        <Layout>
          <SEO
            lang="nl-BE"
            title={`Matchverslag ${general?.homeClub?.name} - ${general?.awayClub?.name}`}
            description={`Matchverslag ${general?.homeClub?.name} - ${general?.awayClub?.name}`}
            path={`/game/${general?.id}`}
            image={ogImage}
          />
          <section className="grid-container site-content">
            {general.date}
            <br />
            {general.status}
            <br />
            {general.homeClub.name}
            <img src={general.homeClub.logo} alt={general.homeClub.name} />
            {general.goalsHomeTeam} - {general.goalsAwayTeam}
            {general.awayClub.name}
            <img src={general.awayClub.logo} alt={general.awayClub.name} />
            <br />
            {general.competitionType}
            <br />
            <strong>Home lineup</strong>
            <table>
              <tr>
                <th>A</th>
                <th>Name</th>
                <th>Minutes</th>
              </tr>
              {lineup.home.map((element, i) => (
                <tr key={i}>
                  <td>A</td>
                  <td>{element.playerName}</td>
                  <td>{element.minutesPlayed}</td>
                </tr>
              ))}
            </table>
            <strong>Away lineup</strong>
            <table>
              <tr>
                <th>A</th>
                <th>Name</th>
                <th>Minutes</th>
              </tr>
              {lineup.away.map((element, i) => (
                <tr key={i}>
                  <td>A</td>
                  <td>{element.playerName}</td>
                  <td>{element.minutesPlayed}</td>
                </tr>
              ))}
            </table>
            <strong>Home subs</strong>
            <table>
              <tr>
                <th>A</th>
                <th>Name</th>
                <th>Minutes</th>
              </tr>
              {substitutes.home.map((element, i) => (
                <tr key={i}>
                  <td>A</td>
                  <td>{element.playerName}</td>
                  <td>{element.minutesPlayed}</td>
                </tr>
              ))}
            </table>
            <strong>Away lineup</strong>
            <table>
              <tr>
                <th>A</th>
                <th>Name</th>
                <th>Minutes</th>
              </tr>
              {substitutes.away.map((element, i) => (
                <tr key={i}>
                  <td>A</td>
                  <td>{element.playerName}</td>
                  <td>{element.minutesPlayed}</td>
                </tr>
              ))}
            </table>
            <strong>Events</strong>
            <table>
              <tr>
                <th>Event</th>
                <th>Name</th>
                <th>Minute</th>
              </tr>
              {events.map((element, i) => (
                <tr key={i}>
                  <td>{element.action}</td>
                  <td>{element.playerName}</td>
                  <td>{element.minute}</td>
                </tr>
              ))}
            </table>
          </section>
        </Layout>
      )
    } else {
      return (
        <Layout>
          <section className="grid-container site-content">
            Matchverslag inladen...
          </section>
        </Layout>
      )
    }
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        kcvvPsdApi
        refreshRate
      }
    }
  }
`

export default GamePage
