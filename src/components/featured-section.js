import React, { Component } from 'react'

import './featured-section.scss'
import { NewsItemCard } from './news-item'
import { Link } from 'gatsby'

class FeaturedSection extends Component {
  render() {
    const { articles, title, link } = this.props
    return (
      <div className={'featured_section__wrapper'}>
        <header className={'featured_section__header'}>
          <h3>TRANSFERNIEUWS</h3>
        </header>
        <main className={'featured_section__content'}>
          {articles &&
            articles.edges.map(({ node }, i) => {
              return (
                <article className={'featured_section__item'}>
                  <NewsItemCard node={node} teaser={true} />
                </article>
              )
            })}
        </main>
        {link && (
          <footer className={'featured_section__footer'}>
            <Link to={link}>Lees meer artikels over dit onderwerp</Link>
          </footer>
        )}
      </div>
    )
  }
}

export default FeaturedSection
