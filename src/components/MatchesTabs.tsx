import "./MatchesTabs.scss"

import React, { FunctionComponent } from "react"

import { MatchTeaser } from "./MatchTeaser"
import Ranking from "./Ranking"

const MatchesTabs: FunctionComponent<MatchesTabsProps> = ({ teamId }: MatchesTabsProps) => (
  <div className="team_matches__tabs">
    <ul className="widget__filter tabs" data-tabs id={`matches-${teamId}`}>
      <li className="tabs-title">
        <a href={`#matches-${teamId}-prev`}>Vorige</a>
      </li>
      <li className="tabs-title is-active">
        <a href={`#matches-${teamId}-next`}>Volgende</a>
      </li>
      <li className="tabs-title">
        <a href={`#matches-${teamId}-rank`}>Ranking</a>
      </li>
    </ul>

    <div data-tabs-content={`matches-${teamId}`}>
      <div className="tabs-panel" id={`matches-${teamId}-prev`}>
        <MatchTeaser teamId={teamId} action="prev" includeRankings={true} />
      </div>
      <div className="tabs-panel is-active" id={`matches-${teamId}-next`}>
        <MatchTeaser teamId={teamId} action="next" includeRankings={true} />
      </div>
      <div className="tabs-panel" id={`matches-${teamId}-rank`}>
        <Ranking teamId={teamId} />
      </div>
    </div>
  </div>
)

export default MatchesTabs
