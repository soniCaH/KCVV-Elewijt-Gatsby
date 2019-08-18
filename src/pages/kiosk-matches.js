import React, { Component } from 'react'

import MatchesOverview from '../components/matches-overview'

class GamesPage extends Component {
  render() {
    return (
      <div className={'kiosk__matches'}>
        <MatchesOverview season="1920" regnumber="00055" />
      </div>
    )
  }
}

export default GamesPage
