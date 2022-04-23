import axios from "axios"
import classNames from "classnames"
import { graphql, useStaticQuery } from "gatsby"
import moment from "moment-timezone"
import "moment-timezone/node_modules/moment/locale/nl-be"
import React, { FunctionComponent, useEffect, useState } from "react"
import LazyLoad from "react-lazyload"

import { capitalizeFirstLetter, groupByMonth, mapPsdStatus, mapPsdStatusShort } from "../scripts/helper"
import "./MatchesPreseason.scss"
import Spinner from "./Spinner"

const MatchOverviewMatch: FunctionComponent<MatchesRowProps> = ({ match }: MatchesRowProps) => {
  moment.tz.setDefault(`Europe/Brussels`)
  moment.locale(`nl-be`)
  moment.localeData(`nl-be`)

  const d = moment(match.date)
  const matchPlayed =
    ((match.status === 0 || match.status === null) && match.goalsHomeTeam !== null && match.goalsAwayTeam !== null) ||
    false

  return (
    <article>
      <main className="matches__calendar__main matches__calendar__preseason">
        <div className="matches__calendar__date matches__preseason__date">
          <span className="matches__calendar__date matches__preseason__date--date">{d.format(`DD`)}</span>
          <span className="matches__calendar__date matches__preseason__date--day">
            {capitalizeFirstLetter(d.format(`dddd`))}
          </span>
          <span className="matches__preseason__divider"> // </span>
          <span className="matches__calendar__date matches__preseason__date--day">{d.format(`HH:mm`)}</span>
        </div>

        <div className="matches__preseason__match">
          <div
            className={classNames(`matches__calendar__team`, `matches__calendar__team--home`, {
              "matches__calendar__team--winner": matchPlayed && match.goalsHomeTeam > match.goalsAwayTeam,
            })}
          >
            {match.homeClub?.name} {match.homeTeamId === null || (match.homeTeamId === 1 ? `A` : `B`)}
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
            {(match.status === 0 || match.status === null) && !matchPlayed && <span>-</span>}
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
            {match.awayClub?.name} {match.awayTeamId === null || (match.awayTeamId === 1 ? `A` : `B`)}
          </div>
        </div>
        <div className="matches__calendar__type matches__preseason__type">{match.competitionType}</div>
      </main>
    </article>
  )
}

const MatchesOverview: FunctionComponent<MatchesProps> = () => {
  const [dataA, setDataA] = useState<Match[]>([])
  const [dataB, setDataB] = useState<Match[]>([])

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
    async function getDataA() {
      const response = await axios.get(`${kcvvPsdApi}/matches/1`)
      setDataA(response.data)
    }
    async function getDataB() {
      const response = await axios.get(`${kcvvPsdApi}/matches/2`)
      setDataB(response.data)
    }
    getDataA()
    getDataB()
  }, [])

  const data = groupByMonth(dataA.concat(dataB))

  return (
    <div className={`preseason__wrapper`}>
      {data.length > 0 || <Spinner />}
      {data.map(({ date, objects }, j: number) => (
        <>
          <h3>{date}</h3>
          {objects
            .sort((a: Match, b: Match) => a.timestamp - b.timestamp)
            .map((match: Match, i: number) => (
              <MatchOverviewMatch match={match} key={match.id} />
            ))}
        </>
      ))}
    </div>
  )
}

export default MatchesOverview
