export interface PlayerQuery {
  data: {
    nodePlayer: Queries.node__player
  } & Queries.PlayerQueryQuery
}

export interface PlayerShareProps {
  player: Queries.node__player
}

export interface StaffQuery {
  data: {
    nodeStaff: Queries.node__staff
  } & Queries.StaffQueryQuery
}

export interface PlayerProps {
  player: Queries.node__player
}

export interface StaffProps {
  player: Queries.node__staff
}

export interface PlayerStatsReportsResponseObject {
  date?: string
  teamRating?: never
  competitionId?: number
  goalsHomeTeam?: number
  goalsAwayTeam?: number
  rating?: never
  competition?: string
  team?: string
  home?: boolean
  redCards?: number
  yellowCards?: number
  assists?: number
  opponent?: string
  minutesPlayed?: number
  remarks?: never
  goals?: number
}

export interface PlayerStatsDataResponseObject {
  lastName?: string
  minutes?: number
  rating?: never
  squadPlayer?: never
  clubId?: number
  cleanSheets?: number
  team?: string
  gamesWon?: number
  redCards?: number
  firstName?: string
  gamesLost?: number
  gamesPlayed?: number
  assists?: number
  club?: never
  gamesEqual?: number
  yellowCards?: number
  playerId: number
  goals?: number
}

interface PlayerStatsGoalsResponseObject {
  player2?: null
  targeted?: boolean
  action?: string
  clubId?: number
  homeTeam?: boolean
  season?: number
  style?: string
  id: number
  remarks?: never
  minute?: number
}

export interface PlayerStatsDataObject {
  playerName: string
  gameReports: Array<PlayerStatsReportsResponseObject>
  playerStatistics: Array<PlayerStatsDataResponseObject>
  goals: Array<PlayerStatsGoalsResponseObject>
}
