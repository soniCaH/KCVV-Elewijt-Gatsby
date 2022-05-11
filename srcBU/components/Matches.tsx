import axios from "axios"
import classNames from "classnames"
import { Link, graphql, useStaticQuery } from "gatsby"
import moment from "moment-timezone"
import "moment-timezone/node_modules/moment/locale/nl-be"
import React, { FunctionComponent, useEffect, useState } from "react"
import LazyLoad from "react-lazyload"

import { mapPsdStatus, mapPsdStatusShort } from "../scripts/helper"
import Icon from "./Icon"
import "./Matches.scss"
import Spinner from "./Spinner"

const MatchesRow: FunctionComponent<MatchesRowProps> = ({ match }: MatchesRowProps) => {
  moment.tz.setDefault(`Europe/Brussels`)
  moment.locale(`nl-be`)
  moment.localeData(`nl-be`)

  const d = moment(match.date)
  const date = d.format(`dddd D MMMM YYYY`)
  const time = d.format(`HH:mm`)
  const matchPlayed =
    ((match.status === 0 || match.status === null) && match.goalsHomeTeam !== null && match.goalsAwayTeam !== null) ||
    false

  return (
    <article>
      <header className="matches__calendar__title">
        <h3>
          <span className="matches__calendar__date">{date}</span>
          <span className="matches__calendar__separator">|</span>
          <span className="matches__calendar__type">{match.competitionType}</span>
        </h3>
      </header>
      <main className="matches__calendar__main">
        <div
          className={classNames(`matches__calendar__team`, `matches__calendar__team--home`, {
            "matches__calendar__team--winner": matchPlayed && match.goalsHomeTeam > match.goalsAwayTeam,
          })}
        >
          {match.homeClub?.abbreviation || match.homeClub?.name}
          <LazyLoad debounce={false}>
            <img
              src={match.homeClub?.logo}
              alt={match.homeClub?.name}
              className="matches__calendar__logo matches__calendar__logo--home"
            />
          </LazyLoad>
        </div>

        <div className="matches__calendar__score">
          {match.status !== 0 && (
            <span title={mapPsdStatus(match.status) || ``}>{mapPsdStatusShort(match.status)}</span>
          )}
          {(match.status === 0 || match.status === null) && !matchPlayed && <span>{time}</span>}
          {matchPlayed && (
            <span>
              {match.goalsHomeTeam} - {match.goalsAwayTeam}
            </span>
          )}
        </div>

        <div
          className={classNames(`matches__calendar__team`, `matches__calendar__team--away`, {
            "matches__calendar__team--winner": matchPlayed && match.goalsHomeTeam < match.goalsAwayTeam,
          })}
        >
          <LazyLoad debounce={false}>
            <img
              src={match.awayClub?.logo}
              alt={match.awayClub?.name}
              className="matches__calendar__logo matches__calendar__logo--away"
            />
          </LazyLoad>

          {match.awayClub?.abbreviation || match.awayClub?.name}
        </div>

        <Link to={`/game/${match.id}`} className="matches__calendar__link">
          <Icon icon="fa-info-circle" />
        </Link>
      </main>
    </article>
  )
}

const Matches: FunctionComponent<MatchesProps> = ({ teamId }: MatchesProps) => {
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
      const response = await axios.get(`${kcvvPsdApi}/matches/${teamId}`)
      setData(response.data)
    }
    getData()
  }, [kcvvPsdApi, teamId])

  return (
    <div className={`matches__wrapper`}>
      {data.length > 0 || <Spinner />}
      {data
        .sort((a, b) => a.timestamp - b.timestamp)
        .map((match, i) => (
          <MatchesRow match={match} key={i} />
        ))}
    </div>
  )
}

export default Matches
