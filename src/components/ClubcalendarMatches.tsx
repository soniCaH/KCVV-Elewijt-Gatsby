import { useEffect, useState } from "react"
import { Match } from "../Types/Match"
import { useSiteMetaData } from "../hooks/use-site-metadata"
import { request } from "../scripts/helper"
import React from "react"
import { Spinner } from "./Spinner"
import { DateTime, Settings } from "luxon"
import "./ClubcalendarMatches.scss"

export const ClubcalendarMatches = () => {
  Settings.defaultZone = `Europe/Brussels`
  Settings.defaultLocale = `nl-be`

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

  const filteredAndSortedData = data
    .filter((match: Match) => match.competitionType === "Competitie")
    .sort((a: Match, b: Match) => {
      const dateA = DateTime.fromFormat(a.date, "yyyy-MM-dd HH:mm")
      const dateB = DateTime.fromFormat(b.date, "yyyy-MM-dd HH:mm")
      return dateA.toMillis() - dateB.toMillis()
    })

  return (
    <div className="clubcalendar__wrapper">
      {data.length === 0 && <Spinner />}
      <div className="clubcalendar__grid-header">
        <div>Datum</div>
        <div>Uur</div>
        <div>Thuisploeg</div>
        <div>Uitploeg</div>
      </div>
      <div className="clubcalendar__grid-body">
        {filteredAndSortedData.map((match, index) => {
          let addClass = false
          if (index > 0) {
            const prevMatch = filteredAndSortedData[index - 1]
            const currentDate = DateTime.fromFormat(match.date, `yyyy-MM-dd HH:mm`)
            const prevDate = DateTime.fromFormat(prevMatch.date, `yyyy-MM-dd HH:mm`)
            const diffHours = currentDate.diff(prevDate, "hours").hours
            addClass = diffHours >= 48
          }

          return (
            <ClubcalendarCard
              match={match}
              key={match.id}
              highlight={addClass}
            />
          )
        })}
      </div>
    </div>
  )
}

export const ClubcalendarCard = ({
  match,
  highlight,
}: {
  match: Match
  highlight?: boolean
}) => {
  const dateTime = DateTime.fromFormat(match.date, `yyyy-MM-dd HH:mm`)

  return (
    <div className={`clubcalendar__grid-row ${highlight ? "highlight-row" : ""}`}>
      <div className="clubcalendar__cell">
        <time dateTime={dateTime.toFormat(`yyyy-MM-dd`)}>
          {dateTime.toFormat(`EEE dd/MM/yy`)}
        </time>
      </div>
      <div className="clubcalendar__cell">
        <time dateTime={dateTime.toFormat(`H:mm`)}>
          {dateTime.toFormat(`H:mm`)}
        </time>
      </div>
      <div className={`clubcalendar__cell ${match.homeClub?.name.includes("Kcvv Elewijt") ? "highlight-club" : ""}`}>
        {match.homeClub?.name.replace(`Kcvv`, `KCVV`).replace(`K c v v`, `KCVV`)}
        {` `}
        {match.homeTeamId === null || (match.homeTeamId === 1 ? `A` : `B`)}
      </div>
      <div className={`clubcalendar__cell ${match.awayClub?.name.includes("Kcvv Elewijt") ? "highlight-club" : ""}`}>
        {match.awayClub?.name.replace(`Kcvv`, `KCVV`).replace(`K c v v`, `KCVV`)}
        {` `}
        {match.awayTeamId === null || (match.awayTeamId === 1 ? `A` : `B`)}
      </div>
    </div>
  )
}
