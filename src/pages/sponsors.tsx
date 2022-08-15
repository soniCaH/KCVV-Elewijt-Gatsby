import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { CardImageOnly } from "../components/Card"
import { Seo } from "../components/Seo"
import Layout from "../layouts"
import { SponsorsPageResponsePropsApi } from "../Types/Gatsby"
import "./sponsors.scss"

const SponsorsPage = () => {
  const { goldSponsors, silverSponsors, bronzeSponsors }: SponsorsPageResponsePropsApi = useStaticQuery(graphql`
    query {
      goldSponsors: allNodeSponsor(
        filter: { promote: { eq: true }, status: { eq: true }, field_type: { in: ["crossing"] } }
        sort: { fields: title, order: ASC }
      ) {
        edges {
          node {
            title
            field_type
            field_website {
              uri
            }
            relationships {
              field_media_image {
                field_media_image {
                  alt
                }
                relationships {
                  field_media_image {
                    localFile {
                      ...KCVVFluid480
                    }
                  }
                }
              }
            }
          }
        }
      }
      silverSponsors: allNodeSponsor(
        filter: { promote: { eq: true }, status: { eq: true }, field_type: { in: ["green", "white"] } }
        sort: { fields: title, order: ASC }
      ) {
        edges {
          node {
            title
            field_type
            field_website {
              uri
            }
            relationships {
              field_media_image {
                field_media_image {
                  alt
                }
                relationships {
                  field_media_image {
                    localFile {
                      ...KCVVFluid480
                    }
                  }
                }
              }
            }
          }
        }
      }
      bronzeSponsors: allNodeSponsor(
        filter: { promote: { eq: true }, status: { eq: true }, field_type: { in: ["training", "panel", "other"] } }
        sort: { fields: title, order: ASC }
      ) {
        edges {
          node {
            title
            field_type
            field_website {
              uri
            }
            relationships {
              field_media_image {
                field_media_image {
                  alt
                }
                relationships {
                  field_media_image {
                    localFile {
                      ...KCVVFluid480
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
          <h1>Sponsors KCVV Elewijt</h1>
        </div>
      </header>

      <div className="sponsors__wrapper page__wrapper page__wrapper--limited">
        <section className={`sponsors-overview__section sponsors-overview__section--top`}>
          {goldSponsors.edges.map(({ node }, i) => {
            const website = (node.field_website && node.field_website.uri) || ``
            return (
              <CardImageOnly
                key={i}
                picture={
                  node.relationships.field_media_image.relationships.field_media_image.localFile.childImageSharp
                    .gatsbyImageData
                }
                link={website}
              />
            )
          })}
        </section>
        <section className={`sponsors-overview__section sponsors-overview__section--middle`}>
          {silverSponsors.edges.map(({ node }, i) => {
            const website = (node.field_website && node.field_website.uri) || ``
            return (
              <CardImageOnly
                key={i}
                picture={
                  node.relationships.field_media_image.relationships.field_media_image.localFile.childImageSharp
                    .gatsbyImageData
                }
                link={website}
              />
            )
          })}
        </section>
        <section className={`sponsors-overview__section sponsors-overview__section--bottom`}>
          {bronzeSponsors.edges.map(({ node }, i) => {
            const website = (node.field_website && node.field_website.uri) || ``
            return (
              <CardImageOnly
                key={i}
                picture={
                  node.relationships.field_media_image.relationships.field_media_image.localFile.childImageSharp
                    .gatsbyImageData
                }
                link={website}
              />
            )
          })}
        </section>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo title="Sponsors" description="Overzicht van de sponsors die KCVV Elewijt steunen." path={`/sponsors/`} />
)

export default SponsorsPage
