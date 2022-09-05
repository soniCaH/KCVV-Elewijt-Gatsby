import React from "react"
import { MatchTeasers } from "../../components/MatchTeaser"
import "./kiosk.scss"

const APloegPage = () => (
  <div className={`kiosk__matches`}>
    <MatchTeasers teamId={1} />
  </div>
)

export default APloegPage
