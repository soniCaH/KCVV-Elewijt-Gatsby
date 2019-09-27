import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layouts/index'
import SEO from '../components/seo'
import Img from 'gatsby-image'

import './categoryPage.scss'
import { NewsItemCard, NewsItemCardRatio } from '../components/news-item'

// eslint-disable-next-line
String.prototype.replaceAll = function(search, replacement) {
  const target = this
  return target.replace(new RegExp(search, 'g'), replacement)
}

export default ({ data }) => {
  const articles = data.articles
  const taxonomy = data.term

  return (
    <Layout>
      <SEO lang="nl-BE" title={taxonomy.name} />

      <section className={'category__wrapper site-content'}>
        <header className={'player-detail__header'}>
          <h1 className={'player-detail__name'}>#{taxonomy.name}</h1>

          <div className={'bg-green-mask'}>
            <div className={'bg-white-end'} />
          </div>
        </header>

        <div className={'player-break'}></div>
        <main className={'grid-container'}>
          <div
            className={
              'grid-x grid-margin-x category__content_wrapper news_overview__wrapper news_overview__wrapper--archive'
            }
          >
            {articles &&
              articles.edges.map(({ node }, i) => {
                return <NewsItemCardRatio node={node} teaser={false} key={i} />
              })}
          </div>
        </main>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    articles: allNodeArticle(
      sort: { fields: created, order: DESC }
      limit: 20
      filter: {
        relationships: {
          field_tags: { elemMatch: { path: { alias: { eq: $slug } } } }
        }
      }
    ) {
      edges {
        node {
          created
          title
          body {
            summary
          }
          path {
            alias
          }
          relationships {
            field_media_article_image {
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 800, quality: 75, cropFocus: ATTENTION) {
                        base64
                        aspectRatio
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                      }
                    }
                  }
                }
              }
            }
            field_tags {
              name
              path {
                alias
              }
            }
          }
        }
      }
    }
    term: taxonomyTermCategory(path: { alias: { eq: $slug } }) {
      name
    }
  }
`
