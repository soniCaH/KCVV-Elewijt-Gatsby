import { graphql } from "gatsby"

export const query = graphql`
  fragment ArticleImage on media__image {
    relationships {
      field_media_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 800, quality: 75, cropFocus: ATTENTION) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  fragment ArticleImageLarge on media__image {
    relationships {
      field_media_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 960, quality: 75, cropFocus: ATTENTION) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
