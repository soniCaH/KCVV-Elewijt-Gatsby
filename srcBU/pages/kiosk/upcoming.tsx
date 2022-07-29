import React, { FunctionComponent } from "react"

import MatchesOverview from "../../components/MatchesOverview"

const UpcomingPage = () => (
  <div className={`kiosk__matches`}>
    <MatchesOverview action="next" details={true} />
  </div>
)

export default UpcomingPage
