/**
 * Map a statusCode to a descriptive label.
 * 
 * @param {string} statusCode 
 */
export function mapMatchStatus(statusCode) {
  const statusCodes = new Map([
    ['PP', 'Uitgesteld'],
    ['ST', 'Stopgezet'],
    ['F1', 'Forfait'],
    ['FI', 'Forfait'],
    ['F2', 'Forfait'],
    ['FF', 'Forfait'],
    ['AMC', 'Algemeen forfait'],
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
export function outputDivision(divisionArray, level = '') {
    if (divisionArray[0] === 'BCD') {
      return `Beker van Brabant`;
    } else if (divisionArray[2] <= 4) {
      return `${divisionArray[2]}e ${
        level !== 'nat' ? 'Prov.' : 'Nationale'
      } ${divisionArray[3]}`;
    } else {
      return `U${divisionArray[2]} / ${divisionArray[3]}${
        divisionArray[4] ? ` / ${divisionArray[4]}` : ''
      }`;
    }
  }

/**
 * Replace a divisionCode with its descriptive label.
 * 
 * @param {string} division 
 */
export function mapDivision(division) {
  return /^([A-Z]+)?(\d+)?([a-zA-Z]+)(\d*)$/.exec(
    replaceFirstCharIfNumber(division)
  )
}


/**
 * Retrieve mapping and the formatted descriptive label of a division.
 * 
 * @param {string} division
 * @param {string} region
 */
export function formatDivision(division, region) {
    const divisionArr = mapDivision(division);
    return outputDivision(divisionArr, region);
}

export default { mapMatchStatus, mapDivision, formatDivision }
