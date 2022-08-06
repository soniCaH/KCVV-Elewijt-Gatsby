import { IGatsbyImageData } from "gatsby-plugin-image"

import { Pathalias, Tags } from "./Drupal"

export interface Article {
  id: string
  created: string
  changed: string
  path: Pathalias
  title: string
  timestamp: number
  body: { processed: string; summary: string }
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

export interface ArticleNode {
  node: Article
}

interface RelatedArticle {
  title: string
  path: Pathalias
  internal: { type: string }
}
export interface ArticleQuery {
  data: {
    site: { siteMetadata: { siteUrl: string; twitterHandle: string } }
    nodeArticle: Article
  }
}
