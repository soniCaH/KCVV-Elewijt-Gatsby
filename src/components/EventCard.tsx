import { EventCardProps } from "../Types/EventCard"
import { CardImage } from "./Card"
import moment from "moment"
import "moment-timezone"
import "moment/locale/nl-be"
import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "./EventCard.scss"

const EventCard = ({ title, picture, link, datetimeStart, datetimeEnd }: EventCardProps) => {
  moment.tz.setDefault(`Europe/Brussels`)
  moment.locale(`nl-be`)
  moment.localeData(`nl-be`)
  const momentStart = moment(datetimeStart)
  const momentEnd = moment(datetimeEnd)
  const body = `Van ${momentStart.format(`dddd DD MMMM YYYY - H:mm`)} tot ${momentEnd.format(`dddd DD MMMM - H:mm`)}`

  // return <CardImage title={title} picture={picture} link={link} body={body} />

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
