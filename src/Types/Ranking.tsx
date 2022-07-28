export interface RankingDataTeamObject {
  goalsScoredHome: number
  goalsConceded: number
  cleanSheetsAway: number
  unbeatenStreakCurrent: number
  losses: number
  goalsScored: number
  pointsAway: number
  points: number
  redCards: number
  winsHome: number
  totwPoins: number
  secondYellowCards: number
  lossesAway: number
  rank: number
  draws: number
  goalsConcededAway: number
  id: number
  lossesHome: number
  pointsHome: number
  wins: number
  winsAway: number
  goalsConcededHome: number
  winningStreak: number
  cleanSheets: number
  drawsHome: number
  team: {
    sourceId: null
    players: null
    competitions: null
    abbreviation: null
    creationDate: null
    localName: null
    name: null
    modifiedDate: null
    club: {
      sourceId: number
      country: string
      localNames: number
      seasons: number
      level: string
      abbreviation: string
      division: string
      localName: string
      registrationNumber: number
      name: string
      id: number
      mappedTo: number
      sportsType: number
      facilities: number
      dataSource: number
      status: number
    }
    id: number
    mappedTo: number
    fifaId: number
    dataSource: number
    status: number
  }
  unbeatenStreak: number
  matchesPlayedHome: number
  goalsScoredAway: number
  matchesPlayed: number
  matchesPlayedAway: number
  winningStreakCurrent: number
  yellowCards: number
  drawsAway: number
  cleanSheetsHome: number
}

export interface RankingDataObject {
  name: string
  teams: Array<RankingDataTeamObject>
  type: string
}

export interface RankingState {
  data: Array<RankingDataObject>
  loading: boolean
}

export interface RankingProps {
  teamId: number
}

export interface RankingData {
  site: {
    siteMetadata: {
      kcvvPsdApi: string
    }
  }
}
