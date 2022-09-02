import React from "react"
import { MatchTeasers } from "../../components/MatchTeaser"
import "./kiosk.scss"

const BPloegPage = () => (
  <div className={`kiosk__matches`}>
    <MatchTeasers teamId={2} />
  </div>
)

export default BPloegPage
