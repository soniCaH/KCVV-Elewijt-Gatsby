import "./RelatedNews.scss"

import React, { FunctionComponent } from "react"
import RelatedNewsProps, { RelatedNewsItem } from "./RelatedNews.types"
import { getImage, getImageData, getSrc } from "gatsby-plugin-image"

import { CardTeaser } from "./Card"
import fallbackImg from "../images/kcvv-player-bg.png"

const shuffle = (array: RelatedNewsItem[]): RelatedNewsItem[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const RelatedNews: FunctionComponent<RelatedNewsProps> = ({ items, limit = -1 }) => {
  if (limit <= 0) {
    limit = items.length
  }

  return (
    <section className="related_news__wrapper">
      {items.length > 0 && <h2 className="featured-border">Gerelateerde inhoud</h2>}

      <main className="related_news__items">
        {items
          .sort((a, b) => {
            if (a.timestamp && b.timestamp) {
              return b.timestamp - a.timestamp
            } else {
              return 0
            }
          })
          .splice(0, limit)
          .map((item, i) => {
            const picture =
              item.relationships?.field_media_article_image?.relationships?.field_media_image?.localFile
                ?.childImageSharp.gatsbyImageData || null

            return <CardTeaser key={i} title={item.title} picture={picture} link={item.path.alias} />
          })}
      </main>
    </section>
  )
}

RelatedNews.defaultProps = {
  limit: -1,
}

export default RelatedNews
