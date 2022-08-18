import { CardImageOnlyProps, CardImageProps, CardProps, CardTeaserProps } from "../Types/Card"
import "./Card.scss"
import Icon from "./Icon"
import classNames from "classnames"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { PropsWithChildren } from "react"

export const Card = ({ className, hasTable, title, titleIcon = ``, children }: PropsWithChildren<CardProps>) => (
  <article
    className={classNames(`card`, className, {
      "card--has-table": hasTable,
    })}
  >
    <header className="card__header">
      <h4 className="after-border">
        {titleIcon !== `` && <Icon icon={titleIcon} />} {title}
      </h4>
    </header>
    <div className="card__content">{children}</div>
  </article>
)

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
                <Icon icon="fa-clock-o" />
                {createTime}
              </span>
            )}
            {tags && tags?.length > 0 && (
              <div className={`card_tags`}>
                <Icon icon="fa-tags" />
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
