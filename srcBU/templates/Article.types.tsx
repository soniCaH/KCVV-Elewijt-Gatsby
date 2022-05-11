import { Article } from "../types/Drupal"

export interface ArticleQuery {
  data: {
    site: { siteMetadata: { siteUrl: string; twitterHandle: string } }
    nodeArticle: Article
  }
}
