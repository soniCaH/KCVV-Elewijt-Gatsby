export interface MatchesOverviewProps {
  include?: string[]
  exclude?: string[]
  action?: string
  details?: boolean
}

export interface MatchesOverviewQueryData {
  site: {
    siteMetadata: {
      kcvvPsdApi: string
    }
  }
}
