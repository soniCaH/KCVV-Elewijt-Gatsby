import React, { Component } from 'react'

import moment from 'moment-timezone'
import 'moment/locale/nl-be'

import Layout from '../layouts/index'

import SEO from '../components/seo'
import { CardImage } from '../components/cards'

class EventsPage extends Component {
  render() {
    const { events } = this.props.data
    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

        <div className={'limited-width_wrapper'}>
          <h1>Evenementen</h1>

          {events.edges.map(({ node }, i) => {
            moment.locale('nl-BE');
            const momentStart = moment(node.field_daterange.value).tz(
              'Europe/Brussels'
            )
            const momentEnd = moment(node.field_daterange.end_value).tz(
              'Europe/Brussels'
            )
            return (
              <CardImage
                key={i}
                title={node.title}
                localFile={
                  node.relationships.field_media_image.relationships
                    .field_media_image.localFile
                }
                link={node.field_event_link.uri}
                body={`Van ${momentStart.format(
                  'dddd DD MMMM YYYY - H:mm'
                )} tot ${momentEnd.format('dddd DD MMMM - H:mm')}`}
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    events: allNodeEvent(
      filter: { status: { eq: true } }
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
                      fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        aspectRatio
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
