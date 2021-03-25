/**
 * Map a statusCode to a descriptive label.
 *
 * @param {string} statusCode
 */
export function mapMatchStatus(statusCode: string): string;
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
export function isYouthDivisionWithNumericFirst(division: string): boolean;
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
export function replaceFirstCharIfNumber(division: string): string;
/**
 * Convert a region+division into an output label.
 *
 * @param {array} divisionArray
 * @param {string} level
 */
export function outputDivision(divisionArray: any[], level?: string): string;
/**
 * Replace a divisionCode with its descriptive label.
 *
 * @param {string} division
 */
export function mapDivision(division: string): RegExpExecArray;
/**
 * Retrieve mapping and the formatted descriptive label of a division.
 *
 * @param {string} division
 * @param {string} region
 */
export function formatDivision(division: string, region: string): string;
/**
 * Truncate to <n> letters and optionally stop at the last word instead of letter.
 *
 * @param {int} size
 * @param {boolean} useWordBoundary
 */
export function truncate(size: any, useWordBoundary?: boolean): any;
/**
 * Map a positionCode to a descriptive label.
 *
 * @param {string} positionCode
 */
export function mapPositionCode(positionCode: string): string;
/**
 * List of all positions, in order of position on the fields.
 *
 * @param {string} positionCode
 */
export function getPositions(): Map<string, string>;
export function mapPsdStatus(statusCode: any): string;
export function mapPsdStatusShort(statusCode: any): string;
export function translateGameResult(result: any): string;
declare namespace _default {
    export { mapMatchStatus };
    export { mapDivision };
    export { formatDivision };
    export { truncate };
    export { mapPositionCode };
    export { getPositions };
    export { mapPsdStatus };
    export { mapPsdStatusShort };
    export { translateGameResult };
}
export default _default;
