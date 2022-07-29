import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { FunctionComponent } from "react"

import { CardTeaserProps } from "../Types/Card"
import "./Card.scss"

export const CardTeaser: FunctionComponent<CardTeaserProps> = ({ title, picture, link, tags, createTime }) => {
  const image = getImage(picture)

  return (
    <article className={`card card--teaser`}>
      <Link to={link}>
        <header className={`card_header`}>
          {image && (
            <figure>
              <GatsbyImage image={image} alt={title} />
            </figure>
          )}
        </header>
        <main className={`card_content`}>
          <h4 className={`card_title`}>{title}</h4>
          <div className={`card_meta`}>
            {createTime && (
              <span className={`datetime`}>
                <i className={`fa fa-clock-o`} aria-hidden="true"></i>
                {createTime}
              </span>
            )}
            {tags && tags?.length > 0 && (
              <div className={`card_tags`}>
                <i className={`fa fa-tags`} aria-hidden="true"></i>
                {tags.map(({ path, name }) => (
                  <Link to={path.alias}>
                    <span className={`tag__label`}>#{name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </main>
      </Link>
    </article>
  )
}

export const CardTVTeaser: FunctionComponent<CardTeaserProps> = ({ title, picture, link }) => {
  const image = getImage(picture)

  return (
    <article className={`card card--teaser card--teaser-tv`}>
      <Link to={link}>
        <header className={`card_header`}>
          {image && (
            <>
              <figure>
                <GatsbyImage image={image} alt={title} />
              </figure>
              <span className={`kcvvtv__play`}></span>
            </>
          )}
        </header>
        <main className={`card_content`}>
          <h4 className={`card_title`}>{title}</h4>
        </main>
      </Link>
    </article>
  )
}

CardTeaser.defaultProps = {
  icon: undefined,
  body: undefined,
  metadata: false,
  tags: [],
  createTime: undefined,
}
