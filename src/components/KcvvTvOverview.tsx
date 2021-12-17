import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { Fragment } from "react"
import { FunctionComponent } from "react"

import { KcvvTv } from "../types/Drupal"
import Icon from "./Icon"
import "./KcvvTvOverview.scss"
import { KcvvTvEdge, KcvvTvOverviewQueryData } from "./KcvvTvOverview.types"

const KcvvTvOverview: FunctionComponent = () => {
  const { videos }: KcvvTvOverviewQueryData = useStaticQuery(graphql`
    {
      videos: allNodeKcvvTv(
        filter: { status: { eq: true }, promote: { eq: true } }
        sort: { fields: created, order: DESC }
        limit: 5
      ) {
        edges {
          node {
            created(formatString: "D/M/YYYY")
            title
            timestamp: created(formatString: "x")
            relationships {
              field_media_article_image {
                ...ArticleImage
              }
            }
            field_website {
              uri
            }
          }
        }
      }
    }
  `)

  return (
    <section className="kcvvtv-wrapper">
      {videos && <KcvvTvFeatured node={videos.edges.slice(0, 1)[0].node} />}
      <div className="kcvvtv-list">
        {videos &&
          videos.edges.slice(1).map(({ node }, i) => {
            return <KcvvTvListItem key={i} node={node} />
          })}
      </div>
    </section>
  )
}

const KcvvTvFeatured: FunctionComponent<KcvvTvEdge> = ({ node }: KcvvTvEdge) => {
  const localFile =
    node.relationships.field_media_article_image.relationships.field_media_image.localFile.childImageSharp
      .gatsbyImageData
  const image = getImage(localFile)

  if (image) {
    return (
      <article className="kcvvtv-featured">
        <a href={node.field_website.uri} title={`${node.title}: Speel video af via Facebook`} target={`_blank`}>
          <GatsbyImage image={image} alt={node.title} />
          <div className="gradient gradient--70"></div>
          <header className="kcvvtv__heading">
            <span className="kcvvtv__play" />
            <h3 className="kcvvtv__title">
              <Icon icon={`fa-facebook-square`} /> {node.title}
            </h3>
          </header>
          <span className="kcvvtv__label">KCVV TV</span>
        </a>
      </article>
    )
  } else {
    return <></>
  }
}

const KcvvTvListItem: FunctionComponent<KcvvTvEdge> = ({ node }: KcvvTvEdge) => {
  const localFile =
    node.relationships.field_media_article_image.relationships.field_media_image.localFile.childImageSharp
      .gatsbyImageData
  const image = getImage(localFile)
  if (image) {
    return (
      <article className="kcvvtv-list-item">
        <a href={node.field_website.uri} title={`${node.title}: Speel video af via Facebook`} target={`_blank`}>
          <aside className="kcvvtv-teaser-image">
            <GatsbyImage image={image} alt={node.title} />
            <span className="kcvvtv__play" />
          </aside>

          <main className="kcvvtv-teaser-main">
            <span className="kcvvtv__label">KCVV TV</span>
            <h4 className="kcvvtv__title">
              <Icon icon={`fa-facebook-square`} /> {node.title}
            </h4>

            <span className="kcvvtv__date">
              <i className={`fa fa-clock-o`} aria-hidden="true"></i> {node.created}
            </span>
          </main>
        </a>
      </article>
    )
  } else {
    return <></>
  }
}

export default KcvvTvOverview
