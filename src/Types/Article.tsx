import { IGatsbyImageData } from "gatsby-plugin-image"

import { Pathalias, Tags } from "./Drupal"

export interface Article {
  path: Pathalias
  created: string
  body: { processed: string; summary: string }
  title: string
  relationships: {
    uid: { display_name: string }
    field_related_content: RelatedArticle[]
    field_media_article_image: {
      relationships: {
        field_media_image: {
          localFile: {
            childImageSharp: { gatsbyImageData: IGatsbyImageData }
          }
        }
      }
    }
    field_tags: Tags[]
  }
}

interface RelatedArticle {
  title: string
  path: Pathalias
  internal: { type: string }
}
