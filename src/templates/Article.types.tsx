import { IGatsbyImageData } from "gatsby-plugin-image"

export interface ArticleQuery {
  data: {
    site: { siteMetadata: { siteUrl: string; twitterHandle: string } }
    nodeArticle: DrupalArticle
  }
}

export interface RelatedArticle {
  title: string
  path: { alias: string }
  internal: { type: string }
}

export interface DrupalArticle {
  path: { alias: string }
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
    field_tags: DrupalTags[]
  }
}

interface DrupalTags {
  name: string
  path: { alias: string }
}
