import { IGatsbyImageData } from "gatsby-plugin-image"

export interface KcvvTvNode {
  node: KcvvTv
}

export interface KcvvTv {
  created: string
  title: string
  timestamp: string
  relationships: {
    field_media_article_image: {
      relationships: {
        field_media_image: {
          localFile: {
            childImageSharp: { gatsbyImageData: IGatsbyImageData }
          }
        }
      }
    }
  }
  field_website: {
    uri: string
  }
}
