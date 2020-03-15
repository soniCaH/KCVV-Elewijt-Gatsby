import { graphql } from "gatsby"

export const query = graphql`
  fragment ArticleImage on media__image {
    relationships {
      field_media_image {
        localFile {
          ...KCVVFluid960
        }
      }
    }
  }
`
