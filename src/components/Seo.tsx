import { SeoClassProps } from "../Types/Seo"
import { useSiteMetaData } from "../hooks/use-site-metadata"
import defaultOgImage from "../images/logo-flat.png"
import React, { PropsWithChildren } from "react"

export const Seo = ({ title, description, keywords, image, path, children }: PropsWithChildren<SeoClassProps>) => {
  const {
    title: defaultTitle,
    subTitle,
    description: defaultDescription,
    siteUrl,
    author,
    twitterHandle,
    fbAppId,
  } = useSiteMetaData()

  const seo = {
    title: `${title || subTitle} | ${defaultTitle}`,
    description: description || defaultDescription || ``,
    image: image || { width: 567, height: 567, src: defaultOgImage },
    url: `${siteUrl}${path || ``}`,
    fbAppId: fbAppId || ``,
    author: author || ``,
    twitterHandle: twitterHandle || ``,
    keywords: keywords?.join(`, `) || ``,
  }

  return (
    <>
      <title>{seo.title}</title>

      <link rel="canonical" href={seo.url} />

      <meta name="description" content={seo.description} />

      <meta name="fb:app_id" content={seo.fbAppId} />

      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={seo.url} />

      <meta name="og:image" content={seo.image?.src} />
      <meta name="og:image:width" content={seo.image?.width.toString()} />
      <meta name="og:image:type" content="image/png" />
      <meta name="og:image:height" content={seo.image?.height.toString()} />
      <meta name="og:image:title" content={seo.title} />
      <meta name="og:image:alt" content={seo.title} />

      <meta name="twitter:creator" content={seo.author} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      <meta name="twitter:card" content="summary_large_image" />

      {keywords && <meta name="keywords" content={seo.keywords} />}

      {children}
    </>
  )
}
