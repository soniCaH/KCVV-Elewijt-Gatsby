import axios from "axios"
import classNames from "classnames"
import { graphql, useStaticQuery } from "gatsby"
import Moment from "moment-timezone"
import "moment/locale/nl-be"
import React, { Fragment, FunctionComponent, useEffect, useState } from "react"
import LazyLoad from "react-lazyload"

import { mapPsdStatus } from "../scripts/helper"
import "./MatchTeaser.scss"
import MiniRanking from "./MiniRanking"

export const MatchTeaserDetail: FunctionComponent<MatchTeaserDetailProps> = ({
  match,
  includeRankings = false,
}: MatchTeaserDetailProps) => {
  Moment.locale(`nl-BE`)
  const d = Moment.tz(match.date, `Europe/Brussels`)
  const matchPlayed =
    ((match.status === 0 || match.status === null) && match.goalsHomeTeam !== null && match.goalsAwayTeam !== null) ||
    false

  return (
    <article className="match__teaser">
      <header>
        <h3>{match.teamName.replace(`Voetbal : `, ``)}</h3>
        <div>
          {match.status !== 0 && (
            <Fragment>
              <time
                className="match__teaser__datetime match__teaser__datetime--date"
                dateTime={d.format(`YYYY-MM-DD - H:mm`)}
              >
                {d.format(`dddd DD MMMM - H:mm`)}
              </time>
              <span className="match__teaser__datetime match__teaser__datetime--status">
                {mapPsdStatus(match.status)}
              </span>
            </Fragment>
          )}
          {(match.status === 0 || match.status === null) && (
            <Fragment>
              <time className="match__teaser__datetime match__teaser__datetime--date" dateTime={d.format(`YYYY-MM-DD`)}>
                {d.format(`dddd DD MMMM`)}
              </time>
              <time className="match__teaser__datetime match__teaser__datetime--time" dateTime={d.format(`H:mm`)}>
                {d.format(`H:mm`)}
              </time>
            </Fragment>
          )}
        </div>
      </header>
      <main>
        <div
          className={classNames(`match__teaser__team`, `match__teaser__team--home`, {
            "match__teaser__team--winner": matchPlayed && match.goalsHomeTeam > match.goalsAwayTeam,
          })}
        >
          <LazyLoad debounce={false}>
            <img
              src={match.homeClub?.logo}
              alt={match.homeClub?.abbreviation}
              className="match__teaser__logo match__teaser__logo--home"
            />
          </LazyLoad>
          {match.homeClub?.abbreviation || match.homeClub?.name}
        </div>

        {matchPlayed || <span className="match__teaser__vs">vs</span>}
        {matchPlayed && (
          <span className="match__teaser__vs match__teaser__vs--score">
            {match.goalsHomeTeam} - {match.goalsAwayTeam}
          </span>
        )}

        <div
          className={classNames(`match__teaser__team`, `match__teaser__team--away`, {
            "match__teaser__team--winner": matchPlayed && match.goalsHomeTeam < match.goalsAwayTeam,
          })}
        >
          <LazyLoad debounce={false}>
            <img
              src={match.awayClub?.logo}
              alt={match.awayClub?.abbreviation}
              className="match__teaser__logo match__teaser__logo--away"
            />
          </LazyLoad>
          {match.awayClub?.abbreviation || match.awayClub?.name}
        </div>
      </main>
      {includeRankings && match.competitionType === `Competitie` && (
        <MiniRanking
          teamId={match.homeTeamId || match.awayTeamId}
          homeTeam={match.homeClub?.name}
          awayTeam={match.awayClub?.name}
        />
      )}
    </article>
  )
}

export const MatchTeaser: FunctionComponent<MatchTeaserProps> = ({
  teamId,
  action,
  includeRankings = false,
}: MatchTeaserProps) => {
  if (action !== `prev` && action !== `next`) {
    throw new Error(`Invalid action provided`)
  }

  const [data, setData] = useState<Match[]>([])

  const {
    site: {
      siteMetadata: { kcvvPsdApi },
    },
  }: MatchesQueryData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          kcvvPsdApi
        }
      }
    }
  `)

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${kcvvPsdApi}/matches/${action}`, {
        params: { include: teamId },
      })
      setData(response.data)
    }
    getData()
  }, [])

  if (data.length > 0) {
    return <MatchTeaserDetail match={data[0]} includeRankings={includeRankings} />
  } else {
    return <div className="match__teaser__no_match">Geen wedstrijd gevonden</div>
  }
}

export const MatchTeasers: FunctionComponent<MatchTeasersProps> = ({
  teamId,
  includeRankings = false,
}: MatchTeasersProps) => (
  <div className="match__teasers">
    <MatchTeaser teamId={teamId} action="prev" includeRankings={includeRankings} />
    <MatchTeaser teamId={teamId} action="next" includeRankings={includeRankings} />
  </div>
)
