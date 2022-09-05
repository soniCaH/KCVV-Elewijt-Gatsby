import { IGatsbyImageData } from "gatsby-plugin-image"
import { Pathalias } from "./Drupal"

export interface Page {
  path: Pathalias
  body: {
    processed: string
  }
  title: string
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
    image_og: {
      relationships: {
        field_media_image: {
          localFile: {
            childImageSharp: { gatsbyImageData: IGatsbyImageData }
          }
        }
      }
    }
  }
}

export interface PageQuery {
  data: {
    nodePage: Page
  }
}

// interface PageNode {}
