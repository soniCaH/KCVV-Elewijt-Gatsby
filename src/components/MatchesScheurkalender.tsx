import React, { FunctionComponent, useEffect, useState, Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

import "./MatchTeaser.scss"

import axios from "axios"
import LazyLoad from "react-lazyload"
import classNames from "classnames"
import Moment from "moment-timezone"
import "moment/locale/nl-be"

import { mapPsdStatus } from "../scripts/helper"

import "./MatchesPreseason.scss"
import "./MatchesScheurkalender.scss"
import Spinner from "./Spinner"
import { StaticImage } from "gatsby-plugin-image"

const MatchesScheurkalenderOverview: FunctionComponent = () => {
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

  Moment.locale(`nl-BE`)

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

  const data = dataA.concat(dataB)

  return (
    <div className={`scheurkalender__wrapper`}>
      {data.length > 0 || <Spinner />}
      {data
        .filter((match: Match) => match.competitionType === `Competitie`)
        .sort((a: Match, b: Match) => a.timestamp - b.timestamp)
        .map((match: Match) => (
          <MatchTeaserDetail match={match} key={match.id} />
        ))}
    </div>
  )
}

const MatchTeaserDetail: FunctionComponent<MatchTeaserDetailProps> = ({ match }: MatchTeaserDetailProps) => {
  Moment.locale(`nl-BE`)
  const d = Moment.tz(match.date, `Europe/Brussels`)
  const matchPlayed =
    ((match.status === 0 || match.status === null) && match.goalsHomeTeam !== null && match.goalsAwayTeam !== null) ||
    false

  return (
    <article className="match__teaser">
      <header>
        <div className="match__teaser__series">
          {(match.homeTeamId === 1 || match.awayTeamId === 1) && `2e Prov. A`}
          {(match.homeTeamId === 2 || match.awayTeamId === 2) && `4e Prov. E`}
        </div>
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
          {match.homeTeamId === null && (
            <LazyLoad debounce={false}>
              <img
                src={match.homeClub?.logo}
                alt={match.homeClub?.name}
                className="match__teaser__logo match__teaser__logo--home"
              />
            </LazyLoad>
          )}
          {(match.homeTeamId === 1 || match.homeTeamId === 2) && (
            <StaticImage src="../images/logo-flat.png" alt="KCVV ELEWIJT" width={350} />
          )}
          <div>
            {match.homeClub?.name.replace(`Kcvv`, `KCVV`)}
            {` `}
            {match.homeTeamId === null || (match.homeTeamId === 1 ? `A` : `B`)}
          </div>
        </div>

        {matchPlayed || <span className="match__teaser__vs">-</span>}
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
          <div>
            {match.awayClub?.name.replace(`Kcvv`, `KCVV`)}
            {` `}
            {match.awayTeamId === null || (match.awayTeamId === 1 ? `A` : `B`)}
          </div>

          {match.awayTeamId === null && (
            <LazyLoad debounce={false}>
              <img
                src={match.awayClub?.logo}
                alt={match.awayClub?.name}
                className="match__teaser__logo match__teaser__logo--away"
              />
            </LazyLoad>
          )}
          {(match.awayTeamId === 1 || match.awayTeamId === 2) && (
            <StaticImage src="../images/logo-flat.png" alt="KCVV ELEWIJT" width={350} />
          )}
        </div>
      </main>
    </article>
  )
}

export default MatchesScheurkalenderOverview
