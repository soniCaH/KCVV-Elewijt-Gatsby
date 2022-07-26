import { Match } from "./Match"

export interface MatchTeaserProps {
  teamId: number
  action: string
  includeRankings?: boolean
}

export interface MatchTeaserDetailProps {
  match: Match
  includeRankings?: boolean
}
