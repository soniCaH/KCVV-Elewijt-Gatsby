import { graphql } from 'gatsby'

export const query = graphql`
  fragment ArticleImage on media__image {
    relationships {
      field_media_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 800, quality: 75, cropFocus: ATTENTION) {
              ...GatsbyImageSharpFluid_withWebp
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
            fluid(maxWidth: 1680, quality: 75, cropFocus: ATTENTION) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
