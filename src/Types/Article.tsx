import { IGatsbyImageData } from "gatsby-plugin-image"

import { Pathalias, Tag } from "./Drupal"

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
    image_og: {
      relationships: {
        field_media_image: {
          localFile: {
            childImageSharp: { gatsbyImageData: IGatsbyImageData }
          }
        }
      }
    }
    field_tags: Tag[]
  }
}

export interface ArticleNode {
  node: Article
}

interface TagNode {
  node: Tag
}

interface RelatedArticle {
  title: string
  path: Pathalias
  internal: { type: string }
}
export interface ArticleQuery {
  data: {
    nodeArticle: Article
  }
}

export interface NewsOverviewQuery {
  pageContext: {
    group: ArticleNode[]
    index: number
    first: boolean
    last: boolean
    pageCount: number
    pathPrefix: string
    extraContext: object
  }
}

export interface NewsOverviewCategoryResponsePropsApi {
  categoryTags: {
    edges: TagNode[]
  }
}

export interface NewsTagPageQuery {
  data: {
    categoryTags: {
      edges: TagNode[]
    }
    term: Tag
    articles: { edges: ArticleNode[] }
  }
}
