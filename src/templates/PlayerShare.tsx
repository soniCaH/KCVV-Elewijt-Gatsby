import { graphql } from "gatsby"
import React from "react"
import PlayerShare from "../components/PlayerShare"
import { PlayerQuery } from "../Types/Player"

const PlayerShareTemplate = ({ data: { nodePlayer } }: PlayerQuery) => {
  return <PlayerShare player={nodePlayer} />
}

export const query = graphql`
  query PlayerShareQuery($slug: String!) {
    nodePlayer(path: { alias: { eq: $slug } }) {
      path {
        alias
      }
      title
      field_lastname
      field_firstname
      field_shirtnumber
      field_vv_id
      relationships {
        field_image {
          localFile {
            ...KCVVFixedPlayerTeaserShare
          }
        }
        field_image_celebrate {
          localFile {
            ...KCVVFixedPlayerTeaserShare
          }
        }
      }
    }
  }
`

export default PlayerShareTemplate
