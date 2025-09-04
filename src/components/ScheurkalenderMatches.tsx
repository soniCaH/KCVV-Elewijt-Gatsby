import { Match } from "../Types/Match"
import { MatchTeaserDetailProps } from "../Types/MatchTeaser"
import { useSiteMetaData } from "../hooks/use-site-metadata"
import { mapPsdStatus, request } from "../scripts/helper"
import "./ScheurkalenderMatches.scss"
import { Spinner } from "./Spinner"
import classNames from "classnames"
import { StaticImage } from "gatsby-plugin-image"
import { DateTime, Settings } from "luxon"
import React from "react"
import { useEffect, useState } from "react"

const officialCompetitionTypes = [
  'OFFICIAL',
  'COMPETITION',
  'Competitie'
]

export const ScheurkalenderMatches = () => {
  const [dataA, setDataA] = useState<Match[]>([])
  const [dataB, setDataB] = useState<Match[]>([])

  const { kcvvPsdApi } = useSiteMetaData()

  useEffect(() => {
    async function getDataA() {
      const response = await request.get(`${kcvvPsdApi}/matches/1`)
      setDataA(response.data)
    }
    async function getDataB() {
      const response = await request.get(`${kcvvPsdApi}/matches/2`)
      setDataB(response.data)
    }
    getDataA()
    getDataB()
  }, [kcvvPsdApi])

  const data = dataA.concat(dataB)

  return (
    <div className={`scheurkalender__wrapper`}>
      {data.length > 0 || <Spinner />}
      {data
        .filter((match: Match) => officialCompetitionTypes.includes(match.competitionType))
        .sort((a: Match, b: Match) => a.timestamp - b.timestamp)
        .map((match: Match) => (
          <MatchTeaserDetail match={match} key={match.id} />
        ))}
    </div>
  )
}

export const MatchTeaserDetail = ({ match }: MatchTeaserDetailProps) => {
  Settings.defaultZone = `Europe/Brussels`
  Settings.defaultLocale = `nl-be`

  const dateTime = DateTime.fromFormat(match.date, `yyyy-MM-dd HH:mm`)
  const matchPlayed =
    ((match.status === 0 || match.status === null) && match.goalsHomeTeam !== null && match.goalsAwayTeam !== null) ||
    false

  return (
    <article className="match__teaser">
      <header>
        <div className="match__teaser__series">
          {(match.homeTeamId === 1 || match.awayTeamId === 1) && `1e Provinciale Vl. Brabant`}
          {(match.homeTeamId === 2 || match.awayTeamId === 2) && `4e Provinciale C`}
        </div>
        {match.status !== 0 && (
          <div className="match__teaser__datetime__wrapper match__teaser__datetime__wrapper--status">
            <time
              className="match__teaser__datetime match__teaser__datetime--date"
              dateTime={dateTime.toFormat(`yyyy-MM-dd - H:mm`)}
            >
              {dateTime.toFormat(`EEEE dd LLLL - H:mm`)}
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
              dateTime={dateTime.toFormat(`yyyy-MM-dd`)}
            >
              {dateTime.toFormat(`EEEE dd LLLL`)}
            </time>
            <time
              className="match__teaser__datetime match__teaser__datetime--time"
              dateTime={dateTime.toFormat(`H:mm`)}
            >
              {dateTime.toFormat(`H:mm`)}
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
          {match.homeTeamId === null && (
            <img
              src={match.homeClub?.logo}
              alt={match.homeClub?.name}
              width={300}
              className="match__teaser__logo match__teaser__logo--home"
            />
          )}
          {(match.homeTeamId === 1 || match.homeTeamId === 2) && (
            <StaticImage src="../images/logo-flat.png" alt="KCVV ELEWIJT" width={300} />
          )}
          {match.homeClub?.name.replace(`Kcvv`, `KCVV`).replace(`K c v v`, `KCVV`)}
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
          <div>
            {match.awayClub?.name.replace(`Kcvv`, `KCVV`).replace(`K c v v`, `KCVV`)}
            {` `}
            {match.awayTeamId === null || (match.awayTeamId === 1 ? `A` : `B`)}
          </div>
          {match.awayTeamId === null && (
            <img
              src={match.awayClub?.logo}
              alt={match.awayClub?.name}
              className="match__teaser__logo match__teaser__logo--away"
            />
          )}
          {(match.awayTeamId === 1 || match.awayTeamId === 2) && (
            <StaticImage src="../images/logo-flat.png" alt="KCVV ELEWIJT" width={300} />
          )}
        </div>
      </main>
      {/* {includeRankings && match.competitionType === `Competitie` && (
        <MiniRanking
          teamId={match.homeTeamId || match.awayTeamId}
          homeTeam={match.homeClub?.name}
          awayTeam={match.awayClub?.name}
        />
      )} */}
    </article>
  )
}
