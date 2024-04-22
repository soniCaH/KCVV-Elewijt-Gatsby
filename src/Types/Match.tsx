interface MatchTeam {
  id: number
  logo: string
  logoSmall: string
  name: string
  abbreviation: string
  version: number
}

export interface Match {
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

export interface MatchesProps {
  teamId: number
}

export interface MatchesRowProps {
  match: Match
}

export interface MatchDetails {
  general: MatchDetailsGeneral
  substitutes: MatchDetailsSubstitutes
  lineup: MatchDetailsLineups
  events: MatchDetailsEventItem[]
}

export interface MatchDetailsSubstitutes {
  home: MatchDetailsSubstituteItem[]
  away: MatchDetailsSubstituteItem[]
}
export interface MatchDetailsLineups {
  home: MatchDetailsLineupItem[]
  away: MatchDetailsLineupItem[]
}

export interface MatchDetailsLineupItem {
  number?: number
  playerName: string
  minutesPlayed?: number
  captain: boolean
  status: string
  changed: boolean
}

export interface MatchDetailsEventItem {
  playerName: string
  goalsHome?: number
  goalsAway?: number
  action:
    | {
        type: string
        subtype?: string
      }
    | string
  clubId?: number
  playerId?: number
  minute?: number
}

export interface MatchDetailsSubstituteItem {
  number?: number
  playerName: string
  minutesPlayed?: number
  captain: boolean
  playerId?: number
  status: string
  changed: boolean
}

interface MatchDetailsGeneral {
  date: string
  awayClub: MatchDetailClub
  homeClub: MatchDetailClub
  goalsHomeTeam?: number
  goalsAwayTeam?: number
  competitionType: string
  cancelled: boolean
  viewGameReport: boolean
  id: number
  time?: string
  homeTeamId?: number
  awayTeamId?: number
  status: number
}

interface MatchDetailClub {
  name: string
  logo: string
  id: number
  abbreviation: string
  logoSmall: string
  version: number
}
