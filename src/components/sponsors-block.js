import React, { Component } from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import Sponsor from "./sponsor"

class SponsorsBlock extends Component {
  render() {
    const { sponsors } = this.props.data
    return (
      <>
        {sponsors.edges.map(({ node }, i) => {
          const website = (node.field_website && node.field_website.uri) || ""
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
        <Link to="/sponsors" className={"read-more"}>
          Alle sponsors &raquo;
        </Link>
      </>
    )
  }
}

const query = graphql`
  query {
    sponsors: allNodeSponsor(
      filter: {
        promote: { eq: true }
        status: { eq: true }
        field_type: { in: ["crossing", "green", "white"] }
      }
      sort: { fields: [field_type, title], order: ASC }
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
                    ...KCVVFluid240
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
  <StaticQuery query={query} render={(data) => <SponsorsBlock data={data} />} />
)
