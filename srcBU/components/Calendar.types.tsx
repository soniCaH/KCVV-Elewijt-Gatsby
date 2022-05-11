interface CalendarEvent {
  type: string
  repetition: boolean
  allDay: boolean
  teamIds: Array<number>
  cancelled: boolean
  meetingLocation?: string
  status?: number
  color: string
  icon: string
  description?: string
  fullDescription: string
  title?: string
  fullTitle: string
  start: string
  end: string
  teamNames: string
  meetingHour: string
}

interface CalendarEventProps {
  event: CalendarEvent
}

interface CalendarQueryData {
  site: {
    siteMetadata: {
      kcvvPsdApi: string
    }
  }
}
