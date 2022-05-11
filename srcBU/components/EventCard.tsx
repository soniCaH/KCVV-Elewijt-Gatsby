import moment from "moment-timezone"
import "moment-timezone/node_modules/moment/locale/nl-be"
import React, { FunctionComponent } from "react"

import { CardImage } from "./Card"
import { EventCardProps } from "./EventCard.types"

const EventCard: FunctionComponent<EventCardProps> = ({ title, picture, link, datetimeStart, datetimeEnd }) => {
  moment.tz.setDefault(`Europe/Brussels`)
  moment.locale(`nl-be`)
  moment.localeData(`nl-be`)
  const momentStart = moment(datetimeStart)
  const momentEnd = moment(datetimeEnd)
  const body = `Van ${momentStart.format(`dddd DD MMMM YYYY - H:mm`)} tot ${momentEnd.format(`dddd DD MMMM - H:mm`)}`

  return <CardImage title={title} picture={picture} link={link} body={body} />
}

export default EventCard
