import axios from "axios"
import { graphql, useStaticQuery } from "gatsby"
import moment from "moment-timezone"
import "moment-timezone/node_modules/moment/locale/nl-be"
import React, { FunctionComponent, useEffect, useState } from "react"

import { capitalizeFirstLetter, groupByDate } from "../scripts/helper"
import "./Calendar.scss"
import Icon from "./Icon"
import Spinner from "./Spinner"

const CalendarEvent: FunctionComponent<CalendarEventProps> = ({ event }: CalendarEventProps) => {
  moment.tz.setDefault(`Europe/Brussels`)
  moment.locale(`nl-be`)
  moment.localeData(`nl-be`)

  const startDate = moment(event.start)
  const endDate = moment(event.end)

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

  moment.tz.setDefault(`Europe/Brussels`)
  moment.locale(`nl-be`)
  moment.localeData(`nl-be`)

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
        const date = moment(group.date)
        return (
          <div key={i} className="calendar__events__group">
            <h2>{capitalizeFirstLetter(date.format(`dddd D MMMM YYYY`))}</h2>
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
