import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import PlayerDetail from "../components/player"

// import './article.scss'

const PlayerTemplate = ({ data }) => {
  const node = data.nodePlayer
  const pathUrl = node.path.alias
  const ogImage = node.relationships.field_image && {
    src: node.relationships.field_image.localFile.childImageSharp.gatsbyImageData.src,
    width: node.relationships.field_image.localFile.childImageSharp.gatsbyImageData.width,
    height:
      node.relationships.field_image.localFile.childImageSharp.gatsbyImageData.height,
  }

  return (
    <Layout>
      <SEO
        lang="nl-BE"
        title={node.title}
        description={node.title + " - (ex-)speler van KCVV Elewijt"}
        path={pathUrl}
        image={ogImage}
      />
      <PlayerDetail player={node} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    nodePlayer(path: { alias: { eq: $slug } }) {
      path {
        alias
      }
      body {
        processed
      }
      title
      field_join_date
      field_date_leave
      field_lastname
      field_position
      field_firstname
      field_birth_date
      field_shirtnumber
      field_vv_id
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

export default PlayerTemplate;
