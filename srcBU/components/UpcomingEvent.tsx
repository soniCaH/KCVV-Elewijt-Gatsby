import EventCard from "./EventCard"
import { UpcomingEventProps } from "./UpcomingEvent.types"
import { graphql, useStaticQuery } from "gatsby"
import React, { Fragment, FunctionComponent } from "react"

const UpcomingEvent: FunctionComponent = () => {
  const { events }: UpcomingEventProps = useStaticQuery(graphql`
    query {
      events: allNodeEvent(
        filter: { promote: { eq: true }, status: { eq: true } }
        sort: { order: ASC, fields: field_daterange___value }
        limit: 1
      ) {
        edges {
          node {
            field_daterange {
              value(formatString: "YYYY-MM-DDTHH:mm:ssZ")
              end_value(formatString: "YYYY-MM-DDTHH:mm:ssZ")
            }
            field_event_link {
              uri
            }
            title
            relationships {
              field_media_image {
                field_media_image {
                  alt
                }
                relationships {
                  field_media_image {
                    localFile {
                      ...KCVVFluid960
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      {events.edges.map(({ node }, i) => {
        return (
          <EventCard
            key={i}
            title={node.title}
            picture={
              node.relationships.field_media_image.relationships.field_media_image.localFile.childImageSharp
                .gatsbyImageData
            }
            link={node.field_event_link.uri}
            datetimeStart={node.field_daterange.value}
            datetimeEnd={node.field_daterange.end_value}
          />
        )
      })}
    </Fragment>
  )
}

export default UpcomingEvent
