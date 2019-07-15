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
      />
    )

    return (
      <article className={'cardItem'}>
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

        {metadata && (
          <footer className={'cardItem__footer article__tags'}>
            <span className={'datetime'}>
              <i class="fa fa-clock-o" aria-hidden="true"></i> {created}
            </span>
            {tags.length > 0 && (
              <span className={'tag__wrapper'}>
                <i class="fa fa-tags" aria-hidden="true"></i>{' '}
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

    const image = (
      <Img
        fluid={{
          ...localFile.childImageSharp.fluid,
          aspectRatio: 2 / 1,
          cropFocus: ATTENTION
        }}
      />
    )

    return (
      <article className={'cardItem cardItem--image'}>
        <Link to={link}>
          <header>
            <figure>{image}</figure>
            <div class="gradient gradient--70"></div>
            <div className={'cardItem__heading'}>
              <h3>{title}</h3>
              {body && <div dangerouslySetInnerHTML={{ __html: body }}></div>}
            </div>
          </header>
        </Link>
      </article>
    )
  }
}

export class CardVertical extends Component {
  render() {
    const { title, localFile, link } = this.props

    const image = (
      <Img
        fluid={{
          ...localFile.childImageSharp.fluid,
          aspectRatio: 6 / 8,
        }}
      />
    )

    return (
      <article className={'cardItem cardItem--vertical'}>
        <Link to={link}>
          <header>
            <figure>{image}</figure>
            <div class="gradient gradient--70"></div>
            <div className={'cardItem__heading'}>
              <h3>{title}</h3>
            </div>
          </header>
        </Link>
      </article>
    )
  }
}
