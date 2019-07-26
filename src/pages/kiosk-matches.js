


import React, { Component } from 'react'

import Layout from '../layouts/index'

import SEO from '../components/seo'
import MatchesOverview from '../components/matches-overview'

class GamesPage extends Component {
  render() {
    return (
        <MatchesOverview
        season="1920"
        regnumber="00055"
      />
    )
  }
}

export default GamesPage
