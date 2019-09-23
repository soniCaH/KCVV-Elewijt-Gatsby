import React, { Component } from 'react'

import Layout from '../layouts/index'

import SEO from '../components/seo'
import Ranking from '../components/ranking'
import TeamCalendarMatches from '../components/team-calendar-matches'

class StatsPage extends Component {
  render() {
    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />
        <div className={'games__template'}>
          <Ranking
            season="1819"
            region="bra"
            division="3C"
            highlight="KCVV.Elewijt A"
          />
          <TeamCalendarMatches season="1819" region="bra" division="3C" />
        </div>
      </Layout>
    )
  }
}

export default StatsPage
