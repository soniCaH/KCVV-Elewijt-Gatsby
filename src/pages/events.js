import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"
import SEO from "../components/seo"
import Event from "../components/event"

class EventsPage extends Component {
  render() {
    const { events } = this.props.data
    return (
      <Layout>
        <SEO lang="nl-BE" title="Evenementen" />

        <div className={"limited-width_wrapper"}>
          <h1>Evenementen</h1>

          {events.edges.map(({ node }, i) => (
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
          ))}

          {events.edges.length === 0 && (
            <div>
              Geen evenementen ingepland voorlopig. Check{" "}
              <a
                href="https://www.facebook.com/kcvvelewijt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>{" "}
              om op de hoogte te blijven.
            </div>
          )}
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    events: allNodeEvent(
      filter: { promote: { eq: true }, status: { eq: true } }
      sort: { order: ASC, fields: field_daterange___value }
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

export default EventsPage
