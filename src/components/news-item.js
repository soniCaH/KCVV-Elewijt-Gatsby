import React, { Component } from "react"

import { Card, CardImage, CardVertical } from "./cards"

import "./news-item.scss"

/**
 * Render a single news item in default card layout.
 */
export class NewsItemCard extends Component {
  render() {
    const { node, teaser = false } = this.props
    const localFile =
      node.relationships.field_media_article_image.relationships
        .field_media_image.localFile
    const summary = teaser && node.body.summary

    const relatedTags = node.relationships.field_tags || []

    return (
      <Card
        title={node.title}
        body={summary}
        localFile={localFile}
        link={node.path.alias}
        metadata={true}
        tags={relatedTags}
        created={node.created}
        key={node.nid}
        className={"test"}
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
    const localFile =
      node.relationships.field_media_article_image.relationships
        .field_media_image.localFile

    return (
      <CardImage
        title={node.title}
        localFile={localFile}
        link={node.path.alias}
      />
    )
  }
}

/**
 * Render a single news item in vertical image card layout.
 */
export class NewsItemSquare extends Component {
  render() {
    const { node } = this.props
    const localFile =
      node.relationships.field_media_article_image.relationships
        .field_media_image.localFile

    return (
      <CardVertical
        title={node.title}
        localFile={localFile}
        link={node.path.alias}
      />
    )
  }
}

/**
 * Render news item in appropriate layout depending on the aspect ratio.
 */
export class NewsItemCardRatio extends Component {
  render() {
    const { node, teaser = false } = this.props

    const aspectRatio =
      node.relationships.field_media_article_image.relationships
        .field_media_image.localFile.childImageSharp.fluid.aspectRatio

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
    const localFile =
      node.relationships.field_media_article_image.relationships
        .field_media_image.localFile
    const summary = `${node.title}<br/><br/>Bekijk hier het wedstrijdverslag, interviews, nabespreking... en stem voor je man van de match!`
    return (
      <Card
        title={"KCVV TV"}
        body={summary}
        localFile={localFile}
        link={node.field_website.uri}
        metadata={true}
        key={node.nid}
        created={node.created}
      />
    )
  }
}
