import { Match } from "../Types/Match"
import { MatchTeaserDetailProps, MatchTeaserProps, MatchTeasersProps } from "../Types/MatchTeaser"
import { useSiteMetaData } from "../hooks/use-site-metadata"
import { mapPsdStatus, request } from "../scripts/helper"
import "./MatchTeaser.scss"
import classNames from "classnames"
import { DateTime, Settings } from "luxon"
import React, { useEffect, useState } from "react"
import LazyLoad from "react-lazy-load"
import MiniRanking from "./MiniRanking"

const officialCompetitionTypes = [
  'OFFICIAL',
  'COMPETITION',
  'Competitie'
]

export const MatchTeaserDetail = ({ match, includeRankings }: MatchTeaserDetailProps) => {
  Settings.defaultZone = `Europe/Brussels`
  Settings.defaultLocale = `nl-be`

  const matchDateTime = DateTime.fromFormat(match.date, `yyyy-MM-dd HH:mm`)
  const matchPlayed =
    ((match.status === 0 || match.status === null) && match.goalsHomeTeam !== null && match.goalsAwayTeam !== null) ||
    false

  return (
    <article className="match__teaser">
      <header>
        <h3>{match.teamName.replace(`Voetbal : `, ``)}</h3>
        {match.status !== 0 && (
          <div className="match__teaser__datetime__wrapper match__teaser__datetime__wrapper--status">
            <time
              className="match__teaser__datetime match__teaser__datetime--date"
              dateTime={matchDateTime.toFormat(`yyyy-MM-dd - H:mm`)}
            >
              {matchDateTime.toFormat(`EEEE dd LLLL - H:mm`)}
            </time>
            <span className="match__teaser__datetime match__teaser__datetime--status">
              {mapPsdStatus(match.status)}
            </span>
          </div>
        )}
        {(match.status === 0 || match.status === null) && (
          <div className="match__teaser__datetime__wrapper">
            <time
              className="match__teaser__datetime match__teaser__datetime--date"
              dateTime={matchDateTime.toFormat(`yyyy-MM-dd`)}
            >
              {matchDateTime.toFormat(`EEEE dd LLLL`)}
            </time>
            {` `}-{` `}
            <time
              className="match__teaser__datetime match__teaser__datetime--time"
              dateTime={matchDateTime.toFormat(`H:mm`)}
            >
              {matchDateTime.toFormat(`H:mm`)}
            </time>
          </div>
        )}
      </header>
      <main>
        <div
          className={classNames(`match__teaser__team`, `match__teaser__team--home`, {
            "match__teaser__team--winner": matchPlayed && match.goalsHomeTeam > match.goalsAwayTeam,
          })}
        >
          <LazyLoad>
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
          <div className="match__teaser__vs match__teaser__vs--score">
            <div className="match__teaser__vs--score--home">{match.goalsHomeTeam}</div>-
            <div className="match__teaser__vs--score--away">{match.goalsAwayTeam}</div>
          </div>
        )}

        <div
          className={classNames(`match__teaser__team`, `match__teaser__team--away`, {
            "match__teaser__team--winner": matchPlayed && match.goalsHomeTeam < match.goalsAwayTeam,
          })}
        >
          <LazyLoad>
            <img
              src={match.awayClub?.logo}
              alt={match.awayClub?.abbreviation}
              className="match__teaser__logo match__teaser__logo--away"
            />
          </LazyLoad>
          {match.awayClub?.abbreviation || match.awayClub?.name}
        </div>
      </main>
      {includeRankings && officialCompetitionTypes.includes(match.competitionType) && (
        <MiniRanking
          teamId={match.homeTeamId || match.awayTeamId}
          homeTeam={match.homeClub?.name}
          awayTeam={match.awayClub?.name}
        />
      )}
    </article>
  )
}

export const MatchTeaser = ({ teamId, action, includeRankings }: MatchTeaserProps) => {
  if (action !== `prev` && action !== `next`) {
    throw new Error(`Invalid action provided`)
  }

  const [data, setData] = useState<Match[]>([])

  const { kcvvPsdApi } = useSiteMetaData()

  useEffect(() => {
    async function getData() {
      const response = await request.get(`${kcvvPsdApi}/matches/${action}`, {
        params: { include: teamId },
      })
      setData(response.data)
    }
    getData()
  }, [action, kcvvPsdApi, teamId])

  if (data.length > 0) {
    return <MatchTeaserDetail match={data[0]} includeRankings={includeRankings} />
  } else {
    return <div className="match__teaser__no_match">Geen wedstrijd gevonden</div>
  }
}

export const MatchTeasers = ({ teamId, includeRankings = false }: MatchTeasersProps) => (
  <div className="match__teasers__wrapper full-width">
    <div className="match__teasers__inner">
      <div className="match__teasers match__teasers--prev">
        <header className="match__teasers__header">Vorige</header>
        <MatchTeaser teamId={teamId} action="prev" includeRankings={includeRankings} />
      </div>
      <div className="match__teasers match__teasers--next">
        <header className="match__teasers__header">Volgende</header>
        <MatchTeaser teamId={teamId} action="next" includeRankings={includeRankings} />
      </div>
    </div>
  </div>
)

MatchTeaser.defaultProps = { includeRankings: false }
MatchTeasers.defaultProps = { includeRankings: false }
MatchTeaserDetail.defaultProps = { includeRankings: false }
