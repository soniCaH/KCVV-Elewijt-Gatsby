import classNames from "classnames"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { FunctionComponent } from "react"

import "./Card.scss"
import {
  CardImageHeaderProps,
  CardProps,
  CardTeaserBodyProps,
  CardTeaserFooterProps,
  CardTeaserHeaderProps,
  CardTeaserVerticalProps,
} from "./Card.types"
import Icon from "./Icon"

const Card: FunctionComponent<CardProps> = ({ className, hasTable, title, titleIcon = ``, children }) => (
  <article
    className={classNames(`card`, className, {
      "card--has-table": hasTable,
    })}
  >
    <header className={`card__header`}>
      <h4>
        {titleIcon !== `` && <Icon icon={titleIcon} />} {title}
      </h4>
    </header>
    <div className={`card__content`}>{children}</div>
  </article>
)

Card.defaultProps = {
  className: ``,
  hasTable: false,
  titleIcon: ``,
}

const CheckExternalLink = (link: string) => {
  const absoluteUrlRegex = /^https?:\/\/|^\/\//i
  return absoluteUrlRegex.test(link)
}

const CardTeaserHeader: FunctionComponent<CardTeaserHeaderProps> = ({ title, image }): JSX.Element => (
  <header>
    <figure>{image && <GatsbyImage image={image} alt={title} />}</figure>
  </header>
)

const CardTeaserBody: FunctionComponent<CardTeaserBodyProps> = ({ title, icon, body }): JSX.Element => (
  <main className={`cardItem__summary`}>
    <div className={`cardItem__heading`}>
      <h3>
        {icon && <Icon icon={icon} />} {title}
      </h3>
    </div>

    {body && <div dangerouslySetInnerHTML={{ __html: body }}></div>}
  </main>
)

const CardTeaserFooter: FunctionComponent<CardTeaserFooterProps> = ({ tags, createTime }): JSX.Element => (
  <footer className={`cardItem__footer article__tags`}>
    <span className={`datetime`}>
      <i className={`fa fa-clock-o`} aria-hidden="true"></i> {createTime}
    </span>
    {tags.length > 0 && (
      <span className={`tag__wrapper`}>
        <i className={`fa fa-tags`} aria-hidden="true"></i>
        {` `}
        {tags.map(({ path, name }, i) => {
          return (
            <Link to={path.alias} key={i}>
              <span className={`tag__label`}>#{name}</span>
            </Link>
          )
        })}
      </span>
    )}
  </footer>
)
CardTeaserFooter.defaultProps = {
  tags: [],
  createTime: ``,
}

const CardImageHeader: FunctionComponent<CardImageHeaderProps> = ({ title, image, body }): JSX.Element => (
  <header>
    <figure>{<GatsbyImage image={image} alt={title} />}</figure>
    <div className={`gradient gradient--70`}></div>
    <div className={`cardItem__heading`}>
      <h3>{title}</h3>
      {body && <div dangerouslySetInnerHTML={{ __html: body }}></div>}
    </div>
  </header>
)

export const CardTeaserVertical: FunctionComponent<CardTeaserVerticalProps> = ({ title, picture, link }) => {
  const image = getImage({ ...picture, aspectRatio: 6 / 8 })
  return (
    <article className={`cardItem cardItem--vertical`}>
      {!CheckExternalLink(link) && image && (
        <Link to={link}>
          <CardImageHeader image={image} title={title} />
        </Link>
      )}
      {CheckExternalLink(link) && image && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <CardImageHeader image={image} title={title} />
        </a>
      )}
    </article>
  )
}

export default Card
