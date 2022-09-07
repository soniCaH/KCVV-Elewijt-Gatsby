import moment from "moment"
import "moment-timezone"
import "moment/locale/nl-be"
import React from "react"
import { useEffect, useState } from "react"
import { useSiteMetaData } from "../hooks/use-site-metadata"
import { Match, MatchesProps, MatchesRowProps } from "../Types/Match"
import { Spinner } from "./Spinner"
import "./Matches.scss"
import classnames from "classnames"
import LazyLoad from "react-lazy-load"
import { mapPsdStatus, mapPsdStatusShort, request } from "../scripts/helper"
import { Link } from "gatsby"
import Icon from "./Icon"

const Matches = ({ teamId }: MatchesProps) => {
  const { kcvvPsdApi } = useSiteMetaData()
  const [data, setData] = useState<Match[]>([])

  useEffect(() => {
    async function getData() {
      const response = await request.get(`${kcvvPsdApi}/matches/${teamId}`)
      setData(response.data)
    }
    getData()
  }, [kcvvPsdApi, teamId])

  return (
    <div className="matches__wrapper">
      {data.length > 0 || <Spinner />}
      {data
        .sort((a, b) => a.timestamp - b.timestamp)
        .map((match, i) => (
          <MatchesRow match={match} key={i} />
        ))}
    </div>
  )
}

const MatchesRow = ({ match }: MatchesRowProps) => {
  moment.tz.setDefault(`Europe/Brussels`)
  moment.locale(`nl-be`)
  moment.localeData(`nl-be`)

  const d = moment(match.date)
  const date = d.format(`ddd D MMM`)
  const time = d.format(`HH:mm`)
  const matchPlayed =
    ((match.status === 0 || match.status === null) && match.goalsHomeTeam !== null && match.goalsAwayTeam !== null) ||
    false

  return (
    <div className="matches__row">
      <article className="matches__match">
        <div className="matches__competition__wrapper">
          <span className="matches__competition__type">{match.competitionType}</span>
        </div>
        <div className="matches__date__wrapper">
          <span className="matches__date__date">{date}</span>
          <span className="matches__date__time">{time}</span>
        </div>
        <div
          className={classnames(`matches__team__wrapper`, `matches__team__wrapper--home`, {
            "matches__team__wrapper--elewijt": match.homeTeamId,
          })}
        >
          <div className="matches__team__name">
            {match.homeClub?.abbreviation || match.homeClub?.name}
            {` `}
            <span className="matches__team__home_indicator" title="Uitwedstrijd">
              (U)
            </span>
          </div>
          <div className="matches__team__logo">
            <LazyLoad width={44} height={44}>
              <img
                src={match.homeClub?.logo}
                alt={match.homeClub?.abbreviation}
                className="match__teaser__logo match__teaser__logo--home"
              />
            </LazyLoad>
          </div>
        </div>
        <div className="matches__score__wrapper">
          {match.status !== 0 && (
            <span className="matches__score matches__score--status" title={mapPsdStatus(match.status) || ``}>
              {mapPsdStatusShort(match.status)}
            </span>
          )}
          {(match.status === 0 || match.status === null) && !matchPlayed && (
            <span className="matches__score matches__score--vs">VS</span>
          )}
          {matchPlayed && (
            <span className="matches__score matches__score--score">
              <span>{match.goalsHomeTeam}</span> <span>-</span> <span>{match.goalsAwayTeam}</span>
            </span>
          )}
        </div>
        <div
          className={classnames(`matches__team__wrapper`, `matches__team__wrapper--away`, {
            "matches__team__wrapper--elewijt": match.awayTeamId,
          })}
        >
          <div className="matches__team__name">
            {match.awayClub?.abbreviation || match.awayClub?.name}
            {` `}
            <span className="matches__team__home_indicator" title="Thuiswedstrijd">
              (T)
            </span>
          </div>
          <div className="matches__team__logo">
            <LazyLoad width={44} height={44}>
              <img
                src={match.awayClub?.logo}
                alt={match.awayClub?.abbreviation}
                className="match__teaser__logo match__teaser__logo--away"
              />
            </LazyLoad>
          </div>
        </div>
        <div className="matches__info__wrapper">
          <Link to={`/game/${match.id}`} className="matches__calendar__link">
            <Icon icon="fa-info-circle" /> Verslag
          </Link>
        </div>
      </article>
    </div>
  )
}

export default Matches
