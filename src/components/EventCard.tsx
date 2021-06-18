import React, { FunctionComponent } from "react"
import { CardImage } from "./Card"

import { EventCardProps } from "./EventCard.types"

import moment from "moment-timezone"
import "moment/locale/nl-be"

const EventCard: FunctionComponent<EventCardProps> = ({ title, picture, link, datetimeStart, datetimeEnd }) => {
  moment.locale(`nl-BE`)
  const momentStart = moment(datetimeStart).tz(`Europe/Brussels`)
  const momentEnd = moment(datetimeEnd).tz(`Europe/Brussels`)
  const body = `Van ${momentStart.format(`dddd DD MMMM YYYY - H:mm`)} tot ${momentEnd.format(`dddd DD MMMM - H:mm`)}`

  return <CardImage title={title} picture={picture} link={link} body={body} />
}

export default EventCard
