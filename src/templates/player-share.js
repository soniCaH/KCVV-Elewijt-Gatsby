import React from "react"
import { graphql } from "gatsby"

import PlayerShare from "../components/PlayerShare"

const PlayerShareTemplate = ({ data }) => {
  const node = data.nodePlayer
  return <PlayerShare player={node} />
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

export default PlayerShareTemplate
