import React, { Component } from 'react'

import Layout from '../layouts/index'

import SEO from '../components/seo'
import Sponsor from '../components/sponsor'

class SponsorsPage extends Component {
  render() {
    const {
      goldSponsors,
      silverSponsors,
      bronzeSponsors,
      sympaSponsors,
    } = this.props.data
    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />
        <div className={'sponsors-overview__wrapper limited-width_wrapper'}>
          <section
            className={
              'sponsors-overview__section sponsors-overview__section--gold'
            }
          >
            {goldSponsors.edges.map(({ node }, i) => {
              const website =
                (node.field_website && node.field_website.uri) ||
                window.location.href + '#'
              return (
                <Sponsor
                  key={i}
                  title={node.title}
                  localFile={
                    node.relationships.field_media_image.relationships
                      .field_media_image.localFile
                  }
                  uri={website}
                />
              )
            })}
          </section>
          {silverSponsors.edges.map(({ node }, i) => (
            <div>{node.title}</div>
          ))}
          {bronzeSponsors.edges.map(({ node }, i) => (
            <div>{node.title}</div>
          ))}
          {sympaSponsors.edges.map(({ node }, i) => (
            <div>{node.title}</div>
          ))}
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
        field_type: { eq: "gold" }
      }
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
    silverSponsors: allNodeSponsor(
      filter: {
        promote: { eq: true }
        status: { eq: true }
        field_type: { eq: "silver" }
      }
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
    bronzeSponsors: allNodeSponsor(
      filter: {
        promote: { eq: true }
        status: { eq: true }
        field_type: { eq: "bronze" }
      }
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
    sympaSponsors: allNodeSponsor(
      filter: {
        promote: { eq: true }
        status: { eq: true }
        field_type: { eq: "sympa" }
      }
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

export default SponsorsPage
