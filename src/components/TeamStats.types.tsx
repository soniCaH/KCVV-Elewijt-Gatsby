

interface SquadPlayerStatisticsData {
  firstName: string
  lastName: string
  gamesPlayed: number
  gamesWon: number
  gamesEqual: number
  gamesLost: number
  yellowCards: number
  redCards: number
  goals: number
  cleanSheets: number
  minutes: number
}

interface TopScorer {
  name: string
  firstName: string
  lastName: string
  id: number
  value: number
}

interface GameStreak {
  result: string
  game: any
}

interface ExtraStatsData {
  gamesPlayed: number
  gamesWon: number
  gamesEqual: number
  gamesLost: number
  goalsScored: number
  goalsAgainst: number
  cleanSheets: number
  yellowCards: number
  redCards: number
  notScored: number
  biggestWin: any
  biggestLoss: any
  mostGoals: any
  topscorers: Array<TopScorer>
  gameStreak: Array<GameStreak>
}

interface TeamStatsDataObject {
  squadPlayerStatistics: Array<SquadPlayerStatisticsData>,
  goalsScored: Array<object>,
  goalsAgainst: Array<object>,
  extraStats: ExtraStatsData
}

interface TeamStatsProps {
  teamId: number
}

interface TeamStatsState {
  data: TeamStatsDataObject,
  loading: boolean
}

interface TeamStatsData {
  site: {
    siteMetadata: {
      kcvvPsdApi: string
    }
  }
}
