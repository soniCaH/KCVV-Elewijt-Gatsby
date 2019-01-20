import React, { Component } from 'react'
import './featured-news.scss'
import Img from "gatsby-image"

class FeaturedNews extends Component {
  render() {
    const posts = this.props.posts.edges;
    const teaser = this.props.teaser | false;
    const columns = 12 / (this.props.columns | 2);

    return (
      <div
        className="grid-x featured__news grid-margin-x grid-margin-y"
        data-equalizer="true"
        data-equalize-on="medium"
        id="featured__news"
      >
        {posts.map(({ node }, i) => {
          let image = null;
          if (node.featured_media !== null) {
            if (
              node.featured_media.localFile !== null &&
              'localFile' in node.featured_media
            ) {
              image = <Img sizes={{...node.featured_media.localFile.childImageSharp.sizes, aspectRatio: 4/3}} />
            }
          }

          return <article className={"medium-" + columns + " cell featured__news-item article-card"} key={i}>
          <div
            className={"posts__item posts__item--card card post__category--" + node.categories[0].name.replace(/\s+/g, '_').toLowerCase()}
            data-equalizer-watch="true"
          >
            <figure className="posts__thumb">
              <div className="posts__cat">
                <span className="label posts__cat-label">{node.categories[0].name}</span>
              </div>
              <a href="index.html">
                { image ? image : '' }
              </a>
            </figure>
            <div className="posts__inner card__content">
              <time dateTime={node.unixdate} className="posts__date">
                {node.longdate}
              </time>
              <h6 className="posts__title">
                <a href="index.html" dangerouslySetInnerHTML = {{__html: node.title }} />
              </h6>
              { (!teaser) ? (<div className="posts__excerpt" dangerouslySetInnerHTML = {{__html: node.excerpt }} />) : '' }
            </div>
          </div>
        </article>
        })}
      </div>
    )
  }
}

export default FeaturedNews
