import { Match } from "../Types/Match"
import { MatchTeaserDetailProps, MatchTeaserProps, MatchTeasersProps } from "../Types/MatchTeaser"
import { useSiteMetaData } from "../hooks/use-site-metadata"
import { mapPsdStatus, request } from "../scripts/helper"
import "./MatchTeaser.scss"
import classNames from "classnames"
import moment from "moment"
import "moment-timezone"
import "moment/locale/nl-be"
import React, { useEffect, useState } from "react"
import LazyLoad from "react-lazyload"
import MiniRanking from "./MiniRanking"

export const MatchTeaserDetail = ({ match, includeRankings }: MatchTeaserDetailProps) => {
  moment.tz.setDefault(`Europe/Brussels`)
  moment.locale(`nl-be`)
  moment.localeData(`nl-be`)

  const d = moment(match.date)
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
              dateTime={d.format(`YYYY-MM-DD - H:mm`)}
            >
              {d.format(`dddd DD MMMM - H:mm`)}
            </time>
            <span className="match__teaser__datetime match__teaser__datetime--status">
              {mapPsdStatus(match.status)}
            </span>
          </div>
        )}
        {(match.status === 0 || match.status === null) && (
          <div className="match__teaser__datetime__wrapper">
            <time className="match__teaser__datetime match__teaser__datetime--date" dateTime={d.format(`YYYY-MM-DD`)}>
              {d.format(`dddd DD MMMM`)}
            </time>
            {` `}-{` `}
            <time className="match__teaser__datetime match__teaser__datetime--time" dateTime={d.format(`H:mm`)}>
              {d.format(`H:mm`)}
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
