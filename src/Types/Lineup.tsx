export type LineupStaff = Queries.Maybe<{
  readonly field_position_short: string | null
  readonly field_lastname: string | null
  readonly field_firstname: string | null
  readonly path: { readonly alias: string | null } | null
  readonly relationships: {
    readonly field_image: {
      readonly localFile: {
        readonly childImageSharp: {
          readonly gatsbyImageData: import("gatsby-plugin-image").IGatsbyImageData
        } | null
      } | null
    } | null
  } | null
}>

export type LineupPlayer = Queries.Maybe<{
  readonly field_shirtnumber: number | null
  readonly field_lastname: string | null
  readonly field_firstname: string | null
  readonly field_position: string | null
  readonly path: { readonly alias: string | null } | null
  readonly relationships: {
    readonly field_image: {
      readonly localFile: {
        readonly childImageSharp: {
          readonly gatsbyImageData: import("gatsby-plugin-image").IGatsbyImageData
        } | null
      } | null
    } | null
  } | null
}>

/** Don't ask... */
export interface LineupProps {
  title?: string
  lineup: ReadonlyArray<LineupStaff | null> | ReadonlyArray<LineupPlayer | null> | null
}
