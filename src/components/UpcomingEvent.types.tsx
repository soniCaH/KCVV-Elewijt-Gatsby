import { Event } from "../types/Drupal"

export interface UpcomingEventProps {
  events: { edges: EventEdges[] }
}

interface EventEdges {
  node: Event
}
