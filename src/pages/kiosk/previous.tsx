import React from "react"
import { MatchesOverview } from "../../components/MatchesOverview"

import "./kiosk.scss"
const PreviousPage = () => (
  <div className={`kiosk__matches`}>
    <MatchesOverview action="prev" />
  </div>
)

export default PreviousPage
