import React, { Component } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import './cards.scss'

/**
 * Render a card layout (image / tag / title / excerpt).
 */
export class Card extends Component {
  render() {
    const {
      title,
      body = null,
      localFile,
      link,
      metadata = false,
      tags = [],
      created = null,
    } = this.props

    const image = (
      <Img
        fluid={{
          ...localFile.childImageSharp.fluid,
          aspectRatio: 3 / 2,
        }}
        alt={title}
      />
    )

    const absoluteUrlRegex = /^https?:\/\/|^\/\//i

    return (
      <article className={'cardItem'}>
        {absoluteUrlRegex.test(link) || (
          <Link to={link}>
            <header>
              <figure>{image}</figure>
            </header>

            <main className={'cardItem__summary'}>
              <div className={'cardItem__heading'}>
                <h3>{title}</h3>
              </div>

              {body && <div dangerouslySetInnerHTML={{ __html: body }}></div>}
            </main>
          </Link>
        )}

        {absoluteUrlRegex.test(link) && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <header>
              <figure>{image}</figure>
            </header>

            <main className={'cardItem__summary'}>
              <div className={'cardItem__heading'}>
                <h3>{title}</h3>
              </div>

              {body && <div dangerouslySetInnerHTML={{ __html: body }}></div>}
            </main>
          </a>
        )}

        {metadata && (
          <footer className={'cardItem__footer article__tags'}>
            <span className={'datetime'}>
              <i className={'fa fa-clock-o'} aria-hidden="true"></i> {created}
            </span>
            {tags.length > 0 && (
              <span className={'tag__wrapper'}>
                <i className={'fa fa-tags'} aria-hidden="true"></i>{' '}
                {tags.map(({ path, name }, i) => (
                  <Link to={path.alias} key={i}>
                    <span className={'tag__label'}>#{name}</span>
                  </Link>
                ))}
              </span>
            )}
          </footer>
        )}
      </article>
    )
  }
}

export class CardImage extends Component {
  render() {
    const { title, localFile, link, body = null } = this.props
    const absoluteUrlRegex = /^https?:\/\/|^\/\//i

    const image = (
      <Img
        fluid={{
          ...localFile.childImageSharp.fluid,
          aspectRatio: 2 / 1,
        }}
        alt={title}
      />
    )

    return (
      <article className={'cardItem cardItem--image'}>
        {absoluteUrlRegex.test(link) || (
          <Link to={link}>
            <header>
              <figure>{image}</figure>
              <div className={'gradient gradient--70'}></div>
              <div className={'cardItem__heading'}>
                <h3>{title}</h3>
                {body && <div dangerouslySetInnerHTML={{ __html: body }}></div>}
              </div>
            </header>
          </Link>
        )}
        {absoluteUrlRegex.test(link) && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <header>
              <figure>{image}</figure>
              <div className={'gradient gradient--70'}></div>
              <div className={'cardItem__heading'}>
                <h3>{title}</h3>
                {body && <div dangerouslySetInnerHTML={{ __html: body }}></div>}
              </div>
            </header>
          </a>
        )}
      </article>
    )
  }
}

export class SingleImageCard extends Component {
  render() {
    const { localFile, link } = this.props

    const absoluteUrlRegex = /^https?:\/\/|^\/\//i

    const image = (
      <Img
        fluid={{
          ...localFile.childImageSharp.fluid,
          aspectRatio: 2 / 1,
        }}
      />
    )

    return (
      <article className={'cardItem cardItem--vertical'}>
        {absoluteUrlRegex.test(link) || (
          <Link to={link}>
            <header>
              <figure>{image}</figure>
            </header>
          </Link>
        )}
        {absoluteUrlRegex.test(link) && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <header>
              <figure>{image}</figure>
            </header>
          </a>
        )}
      </article>
    )
  }
}

export class CardVertical extends Component {
  render() {
    const { title, localFile, link } = this.props

    const absoluteUrlRegex = /^https?:\/\/|^\/\//i

    const image = (
      <Img
        fluid={{
          ...localFile.childImageSharp.fluid,
          aspectRatio: 6 / 8,
        }}
        alt={title}
      />
    )

    return (
      <article className={'cardItem cardItem--vertical'}>
        {absoluteUrlRegex.test(link) || (
          <Link to={link}>
            <header>
              <figure>{image}</figure>
              <div className={'gradient gradient--70'}></div>
              <div className={'cardItem__heading'}>
                <h3>{title}</h3>
              </div>
            </header>
          </Link>
        )}
        {absoluteUrlRegex.test(link) && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <header>
              <figure>{image}</figure>
              <div className={'gradient gradient--70'}></div>
              <div className={'cardItem__heading'}>
                <h3>{title}</h3>
              </div>
            </header>
          </a>
        )}
      </article>
    )
  }
}
