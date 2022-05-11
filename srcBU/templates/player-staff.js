import { graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import React from "react"

import RelatedNews from "../components/RelatedNews"
import PlayerDetail from "../components/player-staff"
import SEO from "../components/seo"
import Layout from "../layouts/index"

const PlayerStaffTemplate = ({ data }) => {
  const node = data.nodeStaff
  const pathUrl = node.path.alias
  const ogImage = node.relationships.field_image && {
    src: getSrc(node.relationships.field_image.localFile.childImageSharp.gatsbyImageData),
    width: node.relationships.field_image.localFile.childImageSharp.gatsbyImageData.width,
    height: node.relationships.field_image.localFile.childImageSharp.gatsbyImageData.height,
  }
  const team = node.relationships.node__team || []
  const articles = node.relationships.node__article || []

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
      {(team || articles) && <RelatedNews items={team.concat(articles)} />}
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
        node__article {
          title
          path {
            alias
          }
          timestamp: created(formatString: "x")
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

export default PlayerStaffTemplate
