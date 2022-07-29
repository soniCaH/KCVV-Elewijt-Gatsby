import { ArticleNode } from "./Article"
import { KcvvTvNode } from "./Video"

export interface HomepageResponsePropsApi {
  articles: { edges: ArticleNode[] }
  videos: { edges: KcvvTvNode[] }
}
