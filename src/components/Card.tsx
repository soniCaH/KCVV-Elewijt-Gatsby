import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

import { CardImageOnlyProps, CardImageProps, CardTeaserProps } from "../Types/Card"
import "./Card.scss"

export const CardImageOnly = ({ picture, link }: CardImageOnlyProps) => {
  const image = getImage(picture)

  return (
    <article className={`card card--image-only`}>
      {!CheckExternalLink(link) && image && (
        <Link to={link}>
          <header>
            <figure>
              <GatsbyImage image={image} alt={link} />
            </figure>
          </header>
        </Link>
      )}
      {CheckExternalLink(link) && image && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <header>
            <GatsbyImage image={image} alt={link} />
          </header>
        </a>
      )}
    </article>
  )
}

export const CardImage = ({ title, picture, link = ``, body }: CardImageProps) => {
  const image = getImage(picture)

  return (
    <article className={`card card--teaser`}>
      {link || (
        <>
          <header className={`card_header`}>
            {image && (
              <figure>
                <GatsbyImage image={image} alt={title} />
              </figure>
            )}
          </header>
          <main className={`card_content`}>
            <h4 className={`card_title`}>{title}</h4>
            {body && <div className={`card_body`} dangerouslySetInnerHTML={{ __html: body }}></div>}
          </main>
        </>
      )}
      {link && !CheckExternalLink(link) && (
        <Link to={link} title={title}>
          <header className={`card_header`}>
            {image && (
              <figure>
                <GatsbyImage image={image} alt={title} />
              </figure>
            )}
          </header>
          <main className={`card_content`}>
            <h4 className={`card_title`}>{title}</h4>
            {body && <div className={`card_body`} dangerouslySetInnerHTML={{ __html: body }}></div>}
          </main>
        </Link>
      )}
      {link && CheckExternalLink(link) && (
        <a href={link} title={title} target="_blank" rel="noopener noreferrer">
          <header className={`card_header`}>
            {image && (
              <figure>
                <GatsbyImage image={image} alt={title} />
              </figure>
            )}
          </header>
          <main className={`card_content`}>
            <h4 className={`card_title`}>{title}</h4>
            {body && <div className={`card_body`} dangerouslySetInnerHTML={{ __html: body }}></div>}
          </main>
        </a>
      )}
    </article>
  )
}

export const CardTeaser = ({ title, picture, link, tags, createTime }: CardTeaserProps) => {
  const image = getImage(picture)

  return (
    <article className={`card card--teaser`}>
      <Link to={link} title={title}>
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
                {tags.map(({ name }, i) => (
                  <span className={`tag__label`} key={i}>
                    #{name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </main>
      </Link>
    </article>
  )
}

export const CardTVTeaser = ({ title, picture, link }: CardTeaserProps) => {
  const image = getImage(picture)

  return (
    <article className={`card card--teaser card--teaser-tv`}>
      {!CheckExternalLink(link) && (
        <Link to={link} title={title}>
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
      )}
      {CheckExternalLink(link) && (
        <a href={link} title={title} target="_blank" rel="noopener noreferrer">
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
        </a>
      )}
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

const CheckExternalLink = (link: string) => {
  const absoluteUrlRegex = /^https?:\/\/|^\/\//i
  return absoluteUrlRegex.test(link)
}
