interface ClublogoProps {
  lazyload: boolean
  regNumber: string
  title: string
  className: string
}

interface ClublogoData {
  site: {
    siteMetadata: {
      logoUrl: string
    }
  }
}
