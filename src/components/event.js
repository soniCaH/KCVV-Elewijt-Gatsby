import React, { Component } from 'react'

import moment from 'moment-timezone'
import 'moment/locale/nl-be'

import { CardImage } from '../components/cards'

class Event extends Component {
  render() {
    const { title, localFile, uri, datetime_start, datetime_end } = this.props

    moment.locale('nl-BE')
    const momentStart = moment(datetime_start).tz('Europe/Brussels')
    const momentEnd = moment(datetime_end).tz('Europe/Brussels')
    const body = `Van ${momentStart.format(
      'dddd DD MMMM YYYY - H:mm'
    )} tot ${momentEnd.format('dddd DD MMMM - H:mm')}`
    return (
      <CardImage title={title} localFile={localFile} link={uri} body={body} />
    )
  }
}

export default Event
