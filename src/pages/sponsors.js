import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"

import SEO from "../components/seo"
import Sponsor from "../components/sponsor"

class SponsorsPage extends Component {
  render() {
    const { goldSponsors, silverSponsors, bronzeSponsors } = this.props.data
    return (
      <Layout>
        <SEO lang="nl-BE" title="Sponsors" />
        <div className={"sponsors-overview__wrapper limited-width_wrapper"}>
          <section
            className={
              "sponsors-overview__section sponsors-overview__section--top"
            }
          >
            {goldSponsors.edges.map(({ node }, i) => {
              const website =
                (node.field_website && node.field_website.uri) || ``
              return (
                <Sponsor
                  key={i}
                  localFile={
                    node.relationships.field_media_image.relationships
                      .field_media_image.localFile
                  }
                  uri={website}
                />
              )
            })}
          </section>
          <section
            className={
              "sponsors-overview__section sponsors-overview__section--middle"
            }
          >
            {silverSponsors.edges.map(({ node }, i) => {
              const website =
                (node.field_website && node.field_website.uri) || ""
              return (
                <Sponsor
                  key={i}
                  localFile={
                    node.relationships.field_media_image.relationships
                      .field_media_image.localFile
                  }
                  uri={website}
                />
              )
            })}
          </section>
          <section
            className={
              "sponsors-overview__section sponsors-overview__section--bottom"
            }
          >
            {bronzeSponsors.edges.map(({ node }, i) => {
              const website =
                (node.field_website && node.field_website.uri) || ""
              return (
                <Sponsor
                  key={i}
                  localFile={
                    node.relationships.field_media_image.relationships
                      .field_media_image.localFile
                  }
                  uri={website}
                />
              )
            })}
          </section>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    goldSponsors: allNodeSponsor(
      filter: {
        promote: { eq: true }
        status: { eq: true }
        field_type: { in: ["crossing"] }
      }
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
      filter: {
        promote: { eq: true }
        status: { eq: true }
        field_type: { in: ["green", "white"] }
      }
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
      filter: {
        promote: { eq: true }
        status: { eq: true }
        field_type: { in: ["training", "panel", "other"] }
      }
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
`

export default SponsorsPage
