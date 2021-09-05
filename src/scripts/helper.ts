export function mapMatchStatus(statusCode) {
  const statusCodes = new Map([
    [`PP`, `Uitgesteld`],
    [`ST`, `Stopgezet`],
    [`F1`, `Forfait`],
    [`FI`, `Forfait`],
    [`F2`, `Forfait`],
    [`FF`, `Forfait`],
    [`AMC`, `Algemeen forfait`],
  ])

  return statusCodes.get(statusCode) || null
}

/**
 * Strip first character if the division matches a youth division structure AND starts with a number.
 *
 * General form:
 *  - G9E
 *  - 2G10G
 *  - P7L
 *  - 2P12M
 * The function should return true if it matches the form starting with a "2".
 *
 * @param {string} division
 */
export function isYouthDivisionWithNumericFirst(division) {
  return /^(\d+)([a-zA-Z]+)(\d*)([a-zA-Z])/.test(division)
}

/**
 * Remove the first character of a division string if it's a number.
 *
 * Numbers are sometimes added for youth divisions to indicate a second period within a same season.
 * For example, G9K is the regional U9 division K before new year's day. From January 1st, the teams
 * can be re-arranged in a new (more balanced) division, which will be named something like 2G2K,
 * with the "2" in front indicating this difference.
 *
 * @param {string} division
 */
export function replaceFirstCharIfNumber(division) {
  if (isYouthDivisionWithNumericFirst(division)) {
    // Remove first character.
    division = division.substr(1)
  }

  return division
}

/**
 * Convert a region+division into an output label.
 *
 * @param {array} divisionArray
 * @param {string} level
 */
export function outputDivision(divisionArray, level = ``) {
  if (divisionArray[0] === `BCA`) {
    return `Beker van Brabant`
  } else if (divisionArray[0] === `ESCA`) {
    return `Beker voor B-ploegen`
  } else if (divisionArray[0] === `FR`) {
    return `Vriendschappelijk`
  } else if (divisionArray[0] === `BVZ`) {
    return `Beker van Zemst`
  } else if (divisionArray[2] <= 4) {
    return `${divisionArray[2]}e ${level !== `nat` ? `Prov.` : `Nationale`} ${divisionArray[3]}`
  } else {
    return `U${divisionArray[2]} / ${divisionArray[3]}${divisionArray[4] ? ` / ${divisionArray[4]}` : ``}`
  }
}

/**
 * Replace a divisionCode with its descriptive label.
 *
 * @param {string} division
 */
export function mapDivision(division) {
  return /^([A-Z]+)?(\d+)?([a-zA-Z]+)(\d*)$/.exec(replaceFirstCharIfNumber(division))
}

/**
 * Retrieve mapping and the formatted descriptive label of a division.
 *
 * @param {string} division
 * @param {string} region
 */
export function formatDivision(division, region) {
  const divisionArr = mapDivision(division)
  return outputDivision(divisionArr, region)
}

/**
 * Truncate to <n> letters and optionally stop at the last word instead of letter.
 *
 * @param {int} size
 * @param {boolean} useWordBoundary
 */
export function truncate(size, useWordBoundary = true) {
  if (this.length <= size) {
    return this
  }
  const subString = this.substr(0, size - 1)
  return (useWordBoundary ? subString.substr(0, subString.lastIndexOf(` `)) : subString) + `…`
}

/**
 * Map a positionCode to a descriptive label.
 *
 * @param {string} positionCode
 */
export function mapPositionCode(positionCode) {
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
  ])
  return positions
}

export function mapPsdStatus(statusCode) {
  const statusCodes = new Map([
    [0, `Gepland`],
    [1, `Forfait`],
    [2, `Afgelast`],
    [3, `Onderbroken`],
  ])

  return statusCodes.get(statusCode) || null
}

export function mapPsdStatusShort(statusCode) {
  const statusCodes = new Map([
    [0, ``],
    [1, `FF`],
    [2, `AFG`],
    [3, `STOP`],
  ])

  return statusCodes.get(statusCode) || null
}

export function mapPsdStatusIcon(statusCode) {
  const statusCodes = new Map([
    [0, ``],
    [1, `fa-times`],
    [2, `fa-times`],
    [3, `fa-ban`],
  ])

  return statusCodes.get(statusCode) || null
}

export function translateGameResult(result) {
  const statusCodes = new Map([
    [`WON`, `Gewonnen`],
    [`EQUAL`, `Gelijkgespeeld`],
    [`LOST`, `Verloren`],
  ])
  return statusCodes.get(result) || null
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function groupByDate(data) {
  const groups = data.reduce((groups, object) => {
    const date = object.start.split(` `)[0]
    if (!groups[date]) {
      groups[date] = []
    }
    groups[date].push(object)
    return groups
  }, {})

  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      objects: groups[date],
    }
  })

  return groupArrays
}

export function groupByMonth(data) {
  const groups = data.reduce((groups, object) => {
    const date = new Date(object.timestamp * 1000)
    const month = date.toLocaleString(`nl-BE`, { month: `long` })
    if (!groups[month]) {
      groups[month] = []
    }
    groups[month].push(object)
    return groups
  }, {})

  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      objects: groups[date],
    }
  })

  return groupArrays
}

export function replaceAll(source: string, search: string, replacement: string) {
  return source.replace(new RegExp(search, `g`), replacement)
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

export default {
  mapMatchStatus,
  mapDivision,
  formatDivision,
  truncate,
  mapPositionCode,
  getPositions,
  mapPsdStatus,
  mapPsdStatusShort,
  mapPsdStatusIcon,
  translateGameResult,
  capitalizeFirstLetter,
  groupByDate,
  groupByMonth,
  replaceAll,
  sortRankings,
}
