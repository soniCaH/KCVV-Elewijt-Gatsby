import React, { Component } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import './news-item.scss'

/**
 * Render a single news item in card layout (image / tag / title / excerpt).
 */
export class NewsItemCard extends Component {
  render() {
    const { node, teaser = false } = this.props
    const image = (
      <Img
        fluid={{
          ...node.relationships.field_media_article_image.relationships
            .field_media_image.localFile.childImageSharp.fluid,
          aspectRatio: 3 / 2,
        }}
      />
    )
    const summary = node.body.value.replace(/<[^>]*>?/gm, '').substr(0, 150)

    return (
      <article key={node.nid} className={'news_overview__article'}>
        <Link to={node.path.alias}>
          <header>
            <figure>{image}</figure>
          </header>

          <main>
            <h3 className={'news_overview__heading'}>{node.title}</h3>

            {teaser && (
              <div
                className={'news_overview__summary'}
                dangerouslySetInnerHTML={{ __html: summary }}
              ></div>
            )}
          </main>
        </Link>

        <footer
          className={'news_overview__footer article_footer--datetime-tags'}
        >
          <span className={'datetime'}>
            <i class="fa fa-clock-o" aria-hidden="true"></i> {node.changed}
          </span>
          {node.relationships.field_tags.length > 0 && (
            <span className={'tag__wrapper'}>
              <i class="fa fa-tags" aria-hidden="true"></i>{' '}
              {node.relationships.field_tags.map(({ path, name }, i) => (
                <Link to={path.alias}>
                  <span key={i} className={'tag__label'}>
                    #{name}
                  </span>
                </Link>
              ))}
            </span>
          )}
        </footer>
      </article>
    )
  }
}

/**
 * Render a single news item in image focus layout (image / tag / title).
 */
export class NewsItemFeatured extends Component {
  render() {
    const { node } = this.props
    const image = (
      <Img
        fluid={{
          ...node.relationships.field_media_article_image.relationships
            .field_media_image.localFile.childImageSharp.fluid,
          aspectRatio: 2 / 1,
        }}
      />
    )

    return (
      <article
        key={node.nid}
        className={'news_overview__article news_overview__article--featured'}
      >
        <Link to={node.path.alias}>
          <header style={{position: 'relative'}}>
            <figure>{image}</figure>
            <div class="gradient gradient--70"></div>
          </header>

          <div className={'news_overview__featured_content'}>
            <h3 className={'news_overview__heading'}>{node.title}</h3>

            <section
              className={'news_overview__footer article_footer--datetime-tags'}
            >
              <span className={'datetime'}>
                <i class="fa fa-clock-o" aria-hidden="true"></i> {node.changed}
              </span>
              {node.relationships.field_tags.length > 0 && (
                <span className={'tag__wrapper'}>
                  <i class="fa fa-tags" aria-hidden="true"></i>{' '}
                  {node.relationships.field_tags.map(({ path, name }, i) => (
                    <Link to={path.alias}>
                      <span key={i} className={'tag__label'}>
                        #{name}
                      </span>
                    </Link>
                  ))}
                </span>
              )}
            </section>
          </div>
        </Link>
      </article>
    )
  }
}

/**
 * Render a single news item in vertical image layout (image / tag / title).
 */
export class NewsItemSquare extends Component {
  render() {
    const { node } = this.props
    const image = (
      <Img
        fluid={{
          ...node.relationships.field_media_article_image.relationships
            .field_media_image.localFile.childImageSharp.fluid,
          aspectRatio: 6 / 8,
        }}
      />
    )

    return (
      <article
        key={node.nid}
        className={'news_overview__article news_overview__article--vertical'}
      >
        <Link to={node.path.alias}>
          <header>
            <figure>{image}</figure>
            <div class="gradient gradient--70"></div>
          </header>

          <div className={'news_overview__featured_content'}>
            <h3 className={'news_overview__heading'}>{node.title}</h3>

            <section
              className={'news_overview__footer article_footer--datetime-tags'}
            >
              <span className={'datetime'}>
                <i class="fa fa-clock-o" aria-hidden="true"></i> {node.changed}
              </span>
              {node.relationships.field_tags.length > 0 && (
                <span className={'tag__wrapper'}>
                  <i class="fa fa-tags" aria-hidden="true"></i>{' '}
                  {node.relationships.field_tags.map(({ path, name }, i) => (
                    <Link to={path.alias}>
                      <span key={i} className={'tag__label'}>
                        #{name}
                      </span>
                    </Link>
                  ))}
                </span>
              )}
            </section>
          </div>
        </Link>
      </article>
    )
  }
}

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
