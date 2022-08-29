import { ArticleNode } from "./Article"
import { EventNode } from "./Event"
import { SponsorNode } from "./Sponsor"
import { KcvvTvNode } from "./Video"

export interface HomepageResponsePropsApi {
  articles: { edges: ArticleNode[] }
  stickyArticles: { edges: ArticleNode[] }
  videos: { edges: KcvvTvNode[] }
  events: { edges: EventNode[] }
}
export interface SponsorsResponsePropsApi {
  sponsors: { edges: SponsorNode[] }
}

export interface SponsorsPageResponsePropsApi {
  goldSponsors: { edges: SponsorNode[] }
  silverSponsors: { edges: SponsorNode[] }
  bronzeSponsors: { edges: SponsorNode[] }
}
