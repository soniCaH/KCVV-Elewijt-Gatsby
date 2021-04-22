interface MatchesProps {
  teamId: number
}

interface MatchesRowProps {
  match: Match
}

interface MatchesQueryData {
  site: {
    siteMetadata: {
      kcvvPsdApi: string
    }
  }
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
  time: string
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
}
