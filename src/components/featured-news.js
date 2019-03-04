import React, { Component, Fragment } from 'react'

import FeaturedNewsItem from './featured-news-item'
import FeaturedEvent from './featured-event'

class FeaturedNews extends Component {
  render() {
    const posts = this.props.posts.edges
    const teaser = this.props.teaser | false
    const columns = 12 / (this.props.columns | 2)

    let insertEvent = { status: false, position: -1, event: {} }

    if (this.props.featuredEvent) {
      insertEvent.status = true
      insertEvent.position = 1
      insertEvent.event = this.props.featuredEvent
    }

    return (
      <div
        className="grid-x featured__news grid-margin-x grid-margin-y"
        data-equalizer="true"
        data-equalize-on="medium"
        id="featured__news"
      >
        {posts.map(({ node }, i) => {
          if (insertEvent.status && insertEvent.position === i) {
            return (
              <Fragment key={i}>
                <FeaturedNewsItem
                  columns={columns}
                  node={node}
                  teaser={teaser}
                />

                <FeaturedEvent event={insertEvent} />
              </Fragment>
            )
          } else {
            return (
              <FeaturedNewsItem
                columns={columns}
                node={node}
                teaser={teaser}
                key={i}
              />
            )
          }
        })}
      </div>
    )
  }
}

export default FeaturedNews
