import "./featured-section.scss"

import React, { Component } from "react"

import { NewsItemSquare } from "./news-item"

class FeaturedSection extends Component {
  render() {
    const { articles, title, link = null } = this.props
    return (
      <div className={`featured_section__wrapper`}>
        <header className={`featured_section__header`}>
          <h3>#{title}</h3>
        </header>
        <main className={`featured_section__content`}>
          {articles &&
            articles.edges.map(({ node }, i) => (
              <article className={`featured_section__item`}>
                <NewsItemSquare node={node} />
              </article>
            ))}
        </main>
        {link && <footer className={`featured_section__footer`}>{link}</footer>}
      </div>
    )
  }
}

export default FeaturedSection
