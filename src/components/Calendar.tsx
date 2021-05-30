import React, { Fragment, FunctionComponent, useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import axios from "axios"
import LazyLoad from "react-lazyload"
import classNames from "classnames"
import Moment from "moment-timezone"
import "moment/locale/nl-be"

import { mapPsdStatus, mapPsdStatusIcon, capitalizeFirstLetter, groupByDate } from "../scripts/helper"

import "./Calendar.scss"
import Icon from "./Icon"
import Spinner from "./Spinner"

const CalendarEvent: FunctionComponent<CalendarEventProps> = ({ event }: CalendarEventProps) => {
  const startDate = Moment.tz(event.start, `Europe/Brussels`)
  const endDate = Moment.tz(event.end, `Europe/Brussels`)

  return (
    <article className="calendar__event">
      <div className="calendar__date">
        <Icon icon="fa-clock-o" /> {startDate.format(`HH:mm`)} - {endDate.format(`HH:mm`)}
      </div>
      <div className={`calendar__type calendar__type--${event.type}`}>{capitalizeFirstLetter(event.type)}</div>
      <div>
        {event.cancelled && (
          <span className="calendar__status calendar__status--cancelled">
            <Icon icon={`fa-times`} alt={`Afgelast`} />
          </span>
        )}
        {` `}
        <span className="calendar__title">{event.title}</span>
      </div>
      {event.description && <p dangerouslySetInnerHTML={{ __html: event.description }} />}
    </article>
  )
}

const Calendar: FunctionComponent = () => {
  const [data, setData] = useState<CalendarEvent[]>([])
  const [loading, setLoading] = useState<boolean>(true)

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
      setLoading(false)
    }
    getData()
  }, [])

  const groupedEvents = groupByDate(data)

  return (
    <div className={`events__wrapper`}>
      {data.length > 0 || loading === false || <Spinner />}
      {data.length <= 0 && loading === false && <div>Er zijn voorlopig geen evenementen gepland</div>}

      {groupedEvents.map((group, i) => {
        const date = Moment.tz(group.date, `Europe/Brussels`)
        return (
          <div key={i} className="events__date_group">
            <h2>{capitalizeFirstLetter(date.format(`dddd D MMM YYYY`))}</h2>
            <div className={`events__date`}>
              {group.objects.map((event: CalendarEvent, j: number) => (
                <CalendarEvent event={event} key={j} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Calendar
