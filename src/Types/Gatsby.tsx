import { ArticleNode } from "./Article"
import { SponsorNode } from "./Sponsor"
import { KcvvTvNode } from "./Video"

export interface HomepageResponsePropsApi {
  articles: { edges: ArticleNode[] }
  videos: { edges: KcvvTvNode[] }
}
export interface SponsorsResponsePropsApi {
  sponsors: { edges: SponsorNode[] }
}

export interface SponsorsPageResponsePropsApi {
  goldSponsors: { edges: SponsorNode[] }
  silverSponsors: { edges: SponsorNode[] }
  bronzeSponsors: { edges: SponsorNode[] }
}
