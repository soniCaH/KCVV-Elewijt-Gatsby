import axios from "axios"
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
import LazyLoad from "react-lazyload"
import { mapPsdStatus, mapPsdStatusShort } from "../scripts/helper"
import { Link } from "gatsby"
import Icon from "./Icon"

const Matches = ({ teamId }: MatchesProps) => {
  const { kcvvPsdApi } = useSiteMetaData()
  const [data, setData] = useState<Match[]>([])

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${kcvvPsdApi}/matches/${teamId}`)
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
          <MatchesRow match={match} />
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
  const sideTeam = match.homeTeamId ? `home` : `away`

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
            <LazyLoad debounce={false}>
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
            <>
              <span className="matches__score matches__score--score">
                <span>{match.goalsHomeTeam}</span> <span>-</span> <span>{match.goalsAwayTeam}</span>
                {/* {match.goalsHomeTeam} - {match.goalsAwayTeam} */}
              </span>
              {/* className={classnames(`matches__score_result`, {
                  "matches__score_result--draw": match.goalsHomeTeam === match.goalsAwayTeam,
                  "matches__score_result--loss":
                    sideTeam === `home`
                      ? match.goalsAwayTeam > match.goalsHomeTeam
                      : match.goalsHomeTeam > match.goalsAwayTeam,
                  "matches__score_result--win":
                    sideTeam === `home`
                      ? match.goalsHomeTeam > match.goalsAwayTeam
                      : match.goalsAwayTeam > match.goalsHomeTeam,
                })}
              > */}
              {/* {(sideTeam === `home`
                ? match.goalsAwayTeam > match.goalsHomeTeam
                : match.goalsHomeTeam > match.goalsAwayTeam) && (
                <span className="matches__score_result matches__score_result--loss">Verlies</span>
              )}
              {(sideTeam === `home`
                ? match.goalsHomeTeam > match.goalsAwayTeam
                : match.goalsAwayTeam > match.goalsHomeTeam) && (
                <span className="matches__score_result matches__score_result--win">Winst</span>
              )}
              {match.goalsAwayTeam === match.goalsHomeTeam && (
                <span className="matches__score_result matches__score_result--draw">Gelijk</span>
              )} */}
              {/* </span> */}
            </>
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
            <LazyLoad debounce={false}>
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
      {/* <header className="matches__calendar__title">
        <h3>
          <span className="matches__calendar__date">{date}</span>
          <span className="matches__calendar__separator">|</span>
          <span className="matches__calendar__type">{match.competitionType}</span>
        </h3>
      </header> */}
      {/* <main className="matches__calendar__main">
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
      </main> */}
    </div>
  )
}

export default Matches
