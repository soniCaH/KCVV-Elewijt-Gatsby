import { IGatsbyImageData } from "gatsby-plugin-image"
import { DaterangeField } from "./Drupal"

export interface Event {
  field_daterange: DaterangeField
  field_event_link: { uri: string }
  title: string
  relationships: {
    field_media_image: {
      field_media_image: {
        alt: string
      }
      relationships: {
        field_media_image: {
          localFile: {
            childImageSharp: { gatsbyImageData: IGatsbyImageData }
          }
        }
      }
    }
  }
}

export interface EventNode {
  node: Event
}

export interface EventsResponsePropsApi {
  events: { edges: EventNode[] }
}
