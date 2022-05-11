import axios from "axios"
import classNames from "classnames"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import moment from "moment-timezone"
import "moment-timezone/node_modules/moment/locale/nl-be"
import React, { Fragment, FunctionComponent, useEffect, useState } from "react"
import LazyLoad from "react-lazyload"

import { mapPsdStatus } from "../scripts/helper"
import "./MatchTeaser.scss"
import "./MatchesPreseason.scss"
import "./MatchesScheurkalender.scss"
import Spinner from "./Spinner"

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
