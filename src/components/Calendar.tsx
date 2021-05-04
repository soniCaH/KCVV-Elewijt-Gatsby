import React, { FunctionComponent, useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import axios from "axios"
import LazyLoad from "react-lazyload"
import classNames from "classnames"
import Moment from "moment-timezone"
import "moment/locale/nl-be"

import { mapPsdStatus, mapPsdStatusIcon, capitalizeFirstLetter } from "../scripts/helper"

import "./Calendar.scss"
import Icon from "./Icon"
import Spinner from "./Spinner"

const CalendarEvent: FunctionComponent<CalendarEventProps> = ({ event }: CalendarEventProps) => {
  const startDate = Moment.tz(event.start, `Europe/Brussels`)
  const endDate = Moment.tz(event.end, `Europe/Brussels`)

  return (
    <article className="calendar__event">
      <span className="calendar__date">
        <Icon icon="fa-clock-o" /> {capitalizeFirstLetter(startDate.format(`dddd D MMM YYYY HH:mm`))} -{` `}
        {endDate.format(`HH:mm`)}
      </span>
      <br />
      <span className={`calendar__type calendar__type--${event.type}`}>{capitalizeFirstLetter(event.type)}</span>
      {` `}
      {event.cancelled && (
        <span className="calendar__status calendar__status--cancelled">
          <Icon icon={`fa-times`} alt={`Afgelast`} />
        </span>
      )}
      {` `}
      <span className="calendar__title">{event.title}</span>
      {event.description && <p dangerouslySetInnerHTML={{ __html: event.description }} />}
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

      {data.map((event, i) => (
        <CalendarEvent event={event} key={i} />
      ))}
    </div>
  )
}

export default Calendar
