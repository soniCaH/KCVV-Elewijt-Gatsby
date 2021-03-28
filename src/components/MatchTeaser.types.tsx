interface MatchTeaserDetailProps {
  match: Match
}

interface MatchTeaserProps {
  teamId: number
  action: string
}

interface MatchTeasersProps {
  teamId: number
}

interface MatchTeam {
  id: number
  logo: string
  logoSmall: string
  name: string
  abbreviation: string
  version: number
}

interface Match {
  id: number
  competitionType: string
  timestamp: number
  date: string
  status: number
  cancelled: boolean
  awayClub: MatchTeam
  awayTeamId: number
  homeClub: MatchTeam
  homeTeamId: number
  goalsHomeTeam: number
  goalsAwayTeam: number
  viewGameReport: boolean
  teamId: number
  teamName: string
  age: string
}
