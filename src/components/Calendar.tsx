import React, { FunctionComponent, useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import axios from "axios"
import Moment from "moment-timezone"
import "moment/locale/nl-be"

import { capitalizeFirstLetter, groupByDate } from "../scripts/helper"

import "./Calendar.scss"
import Icon from "./Icon"
import Spinner from "./Spinner"

const TIMEZONE = `Europe/Brussels`

const CalendarEvent: FunctionComponent<CalendarEventProps> = ({ event }: CalendarEventProps) => {
  const startDate = Moment.tz(event.start, TIMEZONE)
  const endDate = Moment.tz(event.end, TIMEZONE)

  return (
    <article className={`calendar__event calendar__event--${event.type}`}>
      <div className="calendar__event__date">
        <Icon icon="fa-clock-o" /> {startDate.format(`HH:mm`)} - {endDate.format(`HH:mm`)}
      </div>
      <div className={`calendar__event__type calendar__event__type--${event.type}`}>
        {capitalizeFirstLetter(event.type)}
      </div>
      <div>
        {event.cancelled && (
          <span className="calendar__event__status calendar__event__status--cancelled">
            <Icon icon={`fa-times`} alt={`Afgelast`} />
          </span>
        )}
        {` `}
        <span className="calendar__event__title">{event.title}</span>
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
    <div className={`calendar`}>
      {data.length > 0 || loading === false || <Spinner />}
      {data.length <= 0 && loading === false && <div>Er zijn voorlopig geen evenementen gepland</div>}

      {groupedEvents.map((group, i) => {
        const date = Moment.tz(group.date, TIMEZONE)
        return (
          <div key={i} className="calendar__events__group">
            <h2>{capitalizeFirstLetter(date.format(`dddd D MMM YYYY`))}</h2>
            <div className={`calendar__events`}>
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
