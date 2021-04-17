import React, { Component } from "react"

import MatchesOverview from "../../components/MatchesOverview"

class GamesPage extends Component {
  render() {
    return (
      <div className={`kiosk__matches`}>
        <MatchesOverview action="next" details={true} />
      </div>
    )
  }
}

export default GamesPage
