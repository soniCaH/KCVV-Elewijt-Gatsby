import React, { FunctionComponent } from "react"

import MatchesOverview from "../../components/MatchesOverview"

const PreviousPage = () => (
  <div className={`kiosk__matches`}>
    <MatchesOverview action="prev" details={true} />
  </div>
)

export default PreviousPage
