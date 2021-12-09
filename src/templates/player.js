import { graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import React from "react"

import PlayerDetail from "../components/player"
import SEO from "../components/seo"
import Layout from "../layouts/index"

// import './ArticleStyle.scss'

const PlayerTemplate = ({ data }) => {
  const node = data.nodePlayer
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
        description={node.title + ` - (ex-)speler van KCVV Elewijt`}
        path={pathUrl}
        image={ogImage}
      />
      <PlayerDetail player={node} />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
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
        node__article {
          title
          timestamp: created(formatString: "x")
          path {
            alias
          }
          relationships {
            field_media_article_image {
              ...ArticleImage
            }
          }
        }
        node__team {
          title
          relationships {
            field_media_article_image {
              ...ArticleImage
            }
          }
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

export default PlayerTemplate
