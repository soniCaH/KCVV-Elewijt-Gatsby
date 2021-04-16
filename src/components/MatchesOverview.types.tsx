interface MatchesOverviewProps {
  include: string[]
  exclude: string[]
  action?: string
  details?: boolean
}

interface MatchesOverviewQueryData {
  site: {
    siteMetadata: {
      kcvvPsdApi: string
    }
  }
}
