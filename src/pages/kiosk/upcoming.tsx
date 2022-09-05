import React from "react"
import { MatchesOverview } from "../../components/MatchesOverview"
import "./kiosk.scss"

const UpcomingPage = () => (
  <div className={`kiosk__matches`}>
    <MatchesOverview action="next" />
  </div>
)

export default UpcomingPage
