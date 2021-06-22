import { IGatsbyImageData } from "gatsby-plugin-image"

export interface UpcomingEventProps {
  events: { edges: EventEdges[] }
}

interface EventEdges {
  node: EventDrupalNode
}

export interface DaterangeFieldDrupal {
  value: string
  end_value: string
}

export interface EventDrupalNode {
  field_daterange: DaterangeFieldDrupal
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
