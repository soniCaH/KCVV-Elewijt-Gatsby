import { RankingDataTeamObject } from "../Types/Ranking"
import Axios from "axios"
import { setupCache } from "axios-cache-interceptor"

export function mapPsdStatus(statusCode: number): string | null {
  const statusCodes = new Map([
    [0, `Gepland`],
    [1, `Forfait`],
    [2, `Afgelast`],
    [3, `Onderbroken`],
  ])

  return statusCodes.get(statusCode) || null
}

export function mapPsdStatusShort(statusCode: number): string | null {
  const statusCodes = new Map([
    [0, ``],
    [1, `FF`],
    [2, `AFG`],
    [3, `STOP`],
  ])

  return statusCodes.get(statusCode) || null
}

export function sortRankings(a: RankingDataTeamObject, b: RankingDataTeamObject) {
  // Rank lager: A stijgt in sortering.
  if (a.rank < b.rank) {
    return -1
  }
  if (a.rank > b.rank) {
    return 1
  }
  // Aantal overwinningen hoger: A stijgt in sortering.
  if (a.wins > b.wins) {
    return -1
  }
  if (a.wins < b.wins) {
    return 1
  }
  // Doelpuntensaldo beter: A stijgt in sortering.
  if (a.goalsScored - a.goalsConceded > b.goalsScored - b.goalsConceded) {
    return -1
  }
  if (a.goalsScored - a.goalsConceded < b.goalsScored - b.goalsConceded) {
    return 1
  }
  // Aantal gemaakte doelpunten hoger: A stijgt in sortering.
  if (a.goalsScored > b.goalsScored) {
    return -1
  }
  if (a.goalsScored < b.goalsScored) {
    return 1
  }
  // Aantal uitoverwinningen hoger: A stijgt in sortering.
  if (a.winsAway > b.winsAway) {
    return -1
  }
  if (a.winsAway < b.winsAway) {
    return 1
  }
  // Doelpuntensaldo op verplaatsing beter: A stijgt in sortering.
  if (a.goalsScoredAway - a.goalsConcededAway > b.goalsScoredAway - b.goalsConcededAway) {
    return -1
  }
  if (a.goalsScoredAway - a.goalsConcededAway < b.goalsScoredAway - b.goalsConcededAway) {
    return 1
  }
  // Aantal gemaakte doelpunten op verplaatsing hoger: A stijgt in sortering.
  if (a.goalsScoredAway > b.goalsScoredAway) {
    return -1
  }
  if (a.goalsScoredAway < b.goalsScoredAway) {
    return 1
  }

  return a.team?.club?.localName.localeCompare(b.team?.club?.localName)
}

export function replaceAll(source: string, search: string, replacement: string) {
  return source.replace(new RegExp(search, `g`), replacement)
}

export function translateGameResult(result: string) {
  const statusCodes = new Map([
    [`WON`, `Gewonnen`],
    [`EQUAL`, `Gelijkgespeeld`],
    [`LOST`, `Verloren`],
  ])
  return statusCodes.get(result) || null
}

/**
 * Map a positionCode to a descriptive label.
 *
 * @param {string} positionCode
 */
export function mapPositionCode(positionCode: string) {
  return getPositions().get(positionCode) || null
}

/**
 * List of all positions, in order of position on the fields.
 *
 * @param {string} positionCode
 */
export function getPositions() {
  const positions = new Map([
    [`k`, `Doelman`],
    [`d`, `Verdediger`],
    [`m`, `Middenvelder`],
    [`a`, `Aanvaller`],
    [`j`, `Speler`],
  ])
  return positions
}

/**
 * Setup instance of axios with caching support.
 */
export const request = setupCache(Axios)
