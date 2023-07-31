import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import EventCard from "../components/EventCard"
import { Seo } from "../components/Seo"
import Layout from "../layouts"
import { EventsResponsePropsApi } from "../Types/Event"
import "./events.scss"
export const Head = () => {
  return <Seo title="Evenementen" description="Alle toekomstige evenementen van KCVV Elewijt" path="/events/" />
}

const EventsPage = () => {
  const { events }: EventsResponsePropsApi = useStaticQuery(graphql`
    query {
      events: allNodeEvent(
        filter: { promote: { eq: true }, status: { eq: true } }
        sort: { field_daterange: { value: ASC } }
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
    <Layout>
      <header className="page_header__wrapper">
        <div className="page_header">
          <h1>Evenementen</h1>
        </div>
      </header>
      <div className="events__wrapper page__wrapper page__wrapper--limited">
        {events.edges.map(({ node }, i) => (
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
        ))}

        {events.edges.length === 0 && (
          <div>
            Geen evenementen ingepland voorlopig. Check{` `}
            <a href="https://www.facebook.com/kcvvelewijt" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            {` `}
            om op de hoogte te blijven.
          </div>
        )}
      </div>
    </Layout>
  )
}

export default EventsPage
