import moment from "moment"
import "moment-timezone"
import "moment/locale/nl-be"
import React from "react"
import { EventCardProps } from "../Types/EventCard"
import { CardImage } from "./Card"

const EventCard = ({ title, picture, link, datetimeStart, datetimeEnd }: EventCardProps) => {
  moment.tz.setDefault(`Europe/Brussels`)
  moment.locale(`nl-be`)
  moment.localeData(`nl-be`)
  const momentStart = moment(datetimeStart)
  const momentEnd = moment(datetimeEnd)
  const body = `Van ${momentStart.format(`dddd DD MMMM YYYY - H:mm`)} tot ${momentEnd.format(`dddd DD MMMM - H:mm`)}`

  return <CardImage title={title} picture={picture} link={link} body={body} />
}

export default EventCard
