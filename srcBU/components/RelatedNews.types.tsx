import { IGatsbyImageData } from "gatsby-plugin-image"

import { Pathalias } from "../types/Drupal"

export interface RelatedNewsProps {
  items: RelatedNewsItem[]
  limit?: number
}

export interface RelatedNewsItem {
  timestamp?: number
  title: string
  path: Pathalias
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
}

export default RelatedNewsProps
