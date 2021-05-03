import React, { FunctionComponent, useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import axios from "axios"
import LazyLoad from "react-lazyload"
import classNames from "classnames"
import Moment from "moment-timezone"
import "moment/locale/nl-be"

import { mapPsdStatus, mapPsdStatusIcon } from "../scripts/helper"

import "./Matches.scss"
import Icon from "./Icon"
import Spinner from "./Spinner"

const CalendarEvent: FunctionComponent<CalendarEventProps> = ({ event }: CalendarEventProps) => {
  const startDate = Moment.tz(event.start, `Europe/Brussels`)
  const endDate = Moment.tz(event.end, `Europe/Brussels`)
  const statusIcon = mapPsdStatusIcon(event.status)

  return (
    <article style={{ backgroundColor: event.color }}>
      <header className="calendar__title">
        <h3>
          <span className="calendar__date">
            {startDate.format(`dddd D MMM YYYY HH:mm`)} - {endDate.format(`HH:mm`)}
          </span>
          {/* <span className="matches__calendar__type">{match.competitionType}</span> */}
        </h3>
      </header>
      Type: {event.type}
      <br />
      Title: {event.title}
      <br />
      {statusIcon && <Icon icon={statusIcon} alt={mapPsdStatus(event.status) || ``} />}
      <br />
      Icon: {event.icon}
      <br />
      {event.repetition && <Icon icon={`fa-repeat`} alt={`Wederkerend evenement`} />}
      <br />
      All Day: {event.allDay && `YEP`}
      <br />
      Team IDs: {event.teamIds}
      <br />
      Team Names: {event.teamNames}
      <br />
      Cancelled: {event.cancelled && <Icon icon={`fa-times`} alt={`Afgelast`} />}
      <br />
      Meeting Location: {event.meetingLocation} - {event.meetingHour}
      <br />
      Description: <p dangerouslySetInnerHTML={{ __html: event.description || `` }} />
      Description 2: <p dangerouslySetInnerHTML={{ __html: event.fullDescription || `` }} />
    </article>
  )
}

const Calendar: FunctionComponent = () => {
  const [data, setData] = useState<CalendarEvent[]>([])

  const {
    site: {
      siteMetadata: { kcvvPsdApi },
    },
  }: CalendarQueryData = useStaticQuery(graphql`
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
    async function getData() {
      const response = await axios.get(`${kcvvPsdApi}/events/next`)
      setData(response.data)
    }
    getData()
  }, [])

  return (
    <div className={`events__wrapper`}>
      {data.length > 0 || <Spinner />}
      <table>
        <thead>
          <tr>
            <th className={`table__column__number`}>#</th>
            <th className={`table__column__string`}>Team</th>
            <th className={`table__column__number show-for-medium`}>P</th>
            <th className={`table__column__number`}>W</th>
            <th className={`table__column__number`}>D</th>
            <th className={`table__column__number`}>L</th>
            <th className={`table__column__number show-for-medium`}>G+</th>
            <th className={`table__column__number show-for-medium`}>G-</th>
            <th className={`table__column__number`}>+/-</th>
            <th className={`table__column__number`}>Pts</th>
          </tr>
        </thead>
        <tbody>
          {data.map((event, i) => (
            <CalendarEvent event={event} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar
