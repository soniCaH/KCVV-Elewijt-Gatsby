import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { SeoClassProps, SeoStaticSiteData } from "../Types/Seo"

export const Seo = ({ title, path }: SeoClassProps) => {
  const {
    site: {
      siteMetadata: { description, siteUrl, title: titleTpl, subTitle },
    },
  }: SeoStaticSiteData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          siteUrl
          title
          subTitle
        }
      }
    }
  `)
  const canonicalUrl = path ? `${siteUrl}${path}` : null
  const metaDescription = description || description

  return (
    <Helmet
      htmlAttributes={{ lang: `nl-BE` }}
      title={title}
      titleTemplate={`%s | ${titleTpl}`}
      link={canonicalUrl ? [{ rel: `canonical`, href: canonicalUrl }] : []}
      // TODO: METADATA
    ></Helmet>
  )
}
