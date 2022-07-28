import React from "react"

import { MatchesTabsProps } from "../Types/MatchesTabs"
import { MatchTeaser } from "./MatchTeaser"
import "./MatchesTabs.scss"
import { Ranking } from "./Ranking"

export const MatchesTabs = ({ teamId }: MatchesTabsProps) => (
  <>
    <div className="team_matches__tabs">
      <div data-tabs-content={`matches-${teamId}`}>
        <div className="tabs-panel" id={`matches-${teamId}-prev`}>
          <MatchTeaser teamId={teamId} action="prev" />
        </div>
        <div className="tabs-panel is-active" id={`matches-${teamId}-next`}>
          <MatchTeaser teamId={teamId} action="next" />
        </div>
        <div className="tabs-panel" id={`matches-${teamId}-rank`}>
          <Ranking teamId={teamId} />
        </div>
      </div>
    </div>
    <ul className="widget__filter team_matches__tabs--filter" data-tabs id={`matches-${teamId}`}>
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
  </>
)
