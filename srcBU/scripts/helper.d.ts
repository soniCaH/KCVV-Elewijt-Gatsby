export function getPositions(): Map<string, string>
/**
 * Map a statusCode to a descriptive label.
 *
 * @param {string} statusCode
 */
export function mapPsdStatus(statusCode: string): string
export function mapPsdStatusShort(statusCode: string): string
export function translateGameResult(result: string): string
export function mapMatchStatus(statusCode: string): string
export function replaceFirstCharIfNumber(division: string): string
export function outputDivision(divisionArray: string[], level?: string): string
export function mapDivision(division: string): RegExpExecArray
export function formatDivision(division: string, region: string): string
export function truncate(size: number, useWordBoundary?: boolean): string
export function mapPositionCode(positionCode: string): string
