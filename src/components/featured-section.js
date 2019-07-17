import React, { Component } from 'react'

import './featured-section.scss'
import { NewsItemCard, NewsItemCardRatio, NewsItemSquare } from './news-item'
import { Link } from 'gatsby'

class FeaturedSection extends Component {
  render() {
    const { articles, title, link = null } = this.props
    return (
      <div className={'featured_section__wrapper'}>
        <header className={'featured_section__header'}>
          <h3>#{title}</h3>
        </header>
        <main className={'featured_section__content'}>
          {articles &&
            articles.edges.map(({ node }, i) => {
              return (
                <article className={'featured_section__item'}>
                  {/* <NewsItemCardRatio node={node} teaser={true} /> */}
                  <NewsItemSquare node={node} />
                </article>
              )
            })}
        </main>
        {link && (
          <footer className={'featured_section__footer'}>
            {link}
          </footer>
        )}
      </div>
    )
  }
}

export default FeaturedSection
