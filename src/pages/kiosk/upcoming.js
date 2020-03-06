import React, { Component } from "react"

import MatchesOverviewDetails from "../../components/matches-overview-details"

class GamesPage extends Component {
  render() {
    return (
      <div className={"kiosk__matches"}>
        <MatchesOverviewDetails season="1920" regnumber="00055" />
      </div>
    )
  }
}

export default GamesPage
