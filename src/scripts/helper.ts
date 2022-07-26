export function mapPsdStatus(statusCode: number): string | null {
  const statusCodes = new Map([
    [0, `Gepland`],
    [1, `Forfait`],
    [2, `Afgelast`],
    [3, `Onderbroken`],
  ])

  return statusCodes.get(statusCode) || null
}
