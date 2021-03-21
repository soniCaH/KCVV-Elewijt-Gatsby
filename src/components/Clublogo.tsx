import React, { FunctionComponent } from "react"
import { graphql, useStaticQuery } from "gatsby"
import LazyLoad from "react-lazyload"

import defaultLogo from "../images/default.png"
import flatLogoElewijt from "../images/logo-flat.png"

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

const getLogoImageSrcUrl = (apiUrl: string, regNumber: string) => {
  if (regNumber === `00055`) {
    return flatLogoElewijt
  }
  return `${apiUrl}/${regNumber}`
}

const ClubLogo: FunctionComponent<ClublogoProps> = ({ lazyload, regNumber, title, className }) => {
  function imageErrorHandler(e: React.SyntheticEvent<HTMLImageElement, Event>) {
    const el = e.target as HTMLImageElement
    el.onerror = null
    el.src = defaultLogo
  }

  const data: ClublogoData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          logoUrl
        }
      }
    }
  `)

  const logoSourceUrl = getLogoImageSrcUrl(data.site.siteMetadata.logoUrl, regNumber)

  const image = (
    <img src={logoSourceUrl} role="presentation" onError={imageErrorHandler} alt={title} className={className} />
  )

  if (lazyload === true) {
    return <LazyLoad debounce={false}>{image}</LazyLoad>
  } else {
    return image
  }
}

ClubLogo.defaultProps = {
  lazyload: false,
  regNumber: `00055`,
  title: `KCVV Elewijt`,
  className: ``,
}

export default ClubLogo
