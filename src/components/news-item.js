import "./news-item.scss"

import { CardImage, CardTeaser, CardTeaserVertical } from "./Card"
import React, { Component } from "react"

/**
 * Render a single news item in default card layout.
 */
export class NewsItemCard extends Component {
  render() {
    const { node, teaser = false } = this.props
    const localFile = node.relationships.field_media_article_image.relationships.field_media_image.localFile
    const summary = teaser && node.body.summary

    const relatedTags = node.relationships.field_tags || []

    return (
      <CardTeaser
        title={node.title}
        body={summary}
        picture={localFile}
        link={node.path.alias}
        metadata={true}
        tags={relatedTags}
        createTime={node.created}
        key={node.nid}
        className={`test`}
      />
    )
  }
}

/**
 * Render a single news item in image focus card layout.
 */
export class NewsItemFeatured extends Component {
  render() {
    const { node } = this.props
    const localFile = node.relationships.field_media_article_image.relationships.field_media_image.localFile

    return <CardImage title={node.title} localFile={localFile} link={node.path.alias} />
  }
}

/**
 * Render a single news item in vertical image card layout.
 */
export class NewsItemSquare extends Component {
  render() {
    const { node } = this.props
    const localFile = node.relationships.field_media_article_image.relationships.field_media_image.localFile

    return <CardTeaserVertical title={node.title} picture={localFile} link={node.path.alias} />
  }
}

/**
 * Render news item in appropriate layout depending on the aspect ratio.
 */
export class NewsItemCardRatio extends Component {
  render() {
    const { node, teaser = false } = this.props

    const { gatsbyImageData: heroImage } =
      node.relationships.field_media_article_image.relationships.field_media_image.localFile.childImageSharp

    const aspectRatio = heroImage.width / heroImage.height

    if (aspectRatio >= 1) {
      return <NewsItemCard node={node} teaser={teaser} />
    } else {
      return <NewsItemSquare node={node} />
    }
  }
}

/**
 * Render a single KCVV TV item in default card layout.
 */
export class KcvvTvCard extends Component {
  render() {
    const { node } = this.props
    const localFile = node.relationships.field_media_article_image.relationships.field_media_image.localFile
    const summary = `${node.title}<br/><br/>Bekijk hier het wedstrijdverslag, interviews, nabespreking... en stem voor je man van de match!`
    return (
      <CardTeaser
        title={`KCVV TV`}
        icon={`fa-facebook-square`}
        body={summary}
        picture={localFile}
        link={node.field_website.uri}
        metadata={true}
        key={node.nid}
        createTime={node.created}
      />
    )
  }
}
