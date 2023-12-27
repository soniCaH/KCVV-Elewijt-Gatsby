import { EventCardProps } from "../Types/EventCard"
import { DateTime, Settings } from "luxon"
import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "./EventCard.scss"

const EventCard = ({ title, picture, link, datetimeStart, datetimeEnd }: EventCardProps) => {
  Settings.defaultZone = `Europe/Brussels`
  Settings.defaultLocale = `nl-be`

  const eventStartDateTime = DateTime.fromFormat(datetimeStart, `yyyy-MM-dd HH:mm`)
  const eventEndDateTime = DateTime.fromFormat(datetimeEnd, `yyyy-MM-dd HH:mm`)
  const body = `Van ${eventStartDateTime.toFormat(`dddd DD MMMM YYYY - H:mm`)} tot ${eventEndDateTime.toFormat(
    `dddd DD MMMM - H:mm`
  )}`

  return (
    <Link to={link} className="event__card">
      <GatsbyImage image={picture} alt={title} />
      <div className="event__card__title__wrapper">
        <h3 className="event__card__title">{title}</h3>
        <div className="event__card__title__description" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </Link>
  )
}

export default EventCard
