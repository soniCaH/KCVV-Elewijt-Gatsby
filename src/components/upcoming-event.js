import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Event from './event'

class UpcomingEvent extends Component {
  render() {
    const { events } = this.props.data
    return (
      <>
        {events.edges.map(({ node }, i) => {
          return (
            <Event
              key={i}
              title={node.title}
              localFile={
                node.relationships.field_media_image.relationships
                  .field_media_image.localFile
              }
              uri={node.field_event_link.uri}
              datetime_start={node.field_daterange.value}
              datetime_end={node.field_daterange.end_value}
            />
          )
        })}
      </>
    )
  }
}

const query = graphql`
  query {
    events: allNodeEvent(
      filter: { promote: {eq: true}, status: { eq: true } }
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
                    childImageSharp {
                      fluid(maxWidth: 1500) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default () => (
  <StaticQuery query={query} render={data => <UpcomingEvent data={data} />} />
)
