import React from "react"
import { RelatedNewsProps } from "../Types/News"
import { CardTeaser } from "./Card"
import "./RelatedNews.scss"
const RelatedNews = ({ items, limit = -1 }: RelatedNewsProps) => {
  if (limit <= 0) {
    limit = items.length
  }

  return (
    <section className="related_news__wrapper">
      {items.length > 0 && <h2 className="featured-border">Gerelateerde inhoud</h2>}

      <main className="related_news__items">
        {items
          .sort((a, b) => {
            if (a?.created && b?.created) {
              return +b.created - +a.created
            } else {
              return 0
            }
          })
          .splice(0, limit)
          .map((item, i) => {
            const picture =
              item?.relationships?.field_media_article_image?.relationships?.field_media_image?.localFile
                ?.childImageSharp?.gatsbyImageData || null

            return (
              picture && (
                <CardTeaser key={i} title={item?.title || ``} picture={picture} link={item?.path?.alias ?? ``} />
              )
            )
          })}
      </main>
    </section>
  )
}

export default RelatedNews
