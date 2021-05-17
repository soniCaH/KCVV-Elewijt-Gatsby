import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import PlayerDetail from "../components/player-staff"
import { getSrc } from "gatsby-plugin-image"

const PlayerStaffTemplate = ({ data }) => {
  const node = data.nodeStaff
  const pathUrl = node.path.alias
  const ogImage = node.relationships.field_image && {
    src: getSrc(node.relationships.field_image.localFile.childImageSharp.gatsbyImageData),
    width: node.relationships.field_image.localFile.childImageSharp.gatsbyImageData.width,
    height: node.relationships.field_image.localFile.childImageSharp.gatsbyImageData.height,
  }

  return (
    <Layout>
      <SEO
        lang="nl-BE"
        title={node.title}
        description={node.title + ` - Staflid KCVV Elewijt`}
        path={pathUrl}
        image={ogImage}
      />
      <PlayerDetail player={node} />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    nodeStaff(path: { alias: { eq: $slug } }) {
      path {
        alias
      }
      body {
        processed
      }
      title
      field_join_date
      field_lastname
      field_position_staff
      field_firstname
      field_birth_date
      field_position_short
      relationships {
        node__team {
          title
          path {
            alias
          }
        }
        field_image {
          localFile {
            ...KCVVFixedPlayerTeaser
          }
        }
      }
    }
  }
`

export default PlayerStaffTemplate
