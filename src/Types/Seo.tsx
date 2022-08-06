export interface SeoStaticSiteData {
  site: {
    siteMetadata: {
      description?: string
      siteUrl?: string
      title: string
      subTitle?: string
      author?: string
      fbAppId?: string
    }
  }
}

export interface SeoClassProps {
  title: string
  path: string
  description?: string
}
