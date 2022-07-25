import React from "react"

import { MatchesTabsProps } from "../Types/MatchesTabs"
import "./MatchesTabs.scss"

export const MatchesTabs = ({ teamId }: MatchesTabsProps) => (
  <>
    <div className="team_matches__tabs">
      <div data-tabs-content={`matches-${teamId}`}>
        <div className="tabs-panel" id={`matches-${teamId}-prev`}>
          PREV
        </div>
        <div className="tabs-panel is-active" id={`matches-${teamId}-next`}>
          NEXT
        </div>
        <div className="tabs-panel" id={`matches-${teamId}-rank`}>
          RANK
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
