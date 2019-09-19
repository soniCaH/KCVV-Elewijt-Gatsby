import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layouts/index'
import SEO from '../components/seo'
import Img from 'gatsby-image'

import './categoryPage.scss'

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

      <section className={'category__wrapper'}>
        <header className={'player-detail__header'}>
          <h1 className={'player-detail__name'}>#{taxonomy.name}</h1>

          <div className={'bg-green-mask'}>
            <div className={'bg-white-end'} />
          </div>
        </header>

        <div className={'player-break'}></div>
        <main className={'category__content_wrapper'}>
          {articles &&
            articles.edges.map(({ node }, i) => {
              const image = (
                <Img
                  fixed={{
                    ...node.relationships.field_media_article_image
                      .relationships.field_media_image.localFile.childImageSharp
                      .fixed,
                  }}
                />
              )
              return (
                <Link
                  to={node.path.alias}
                  className={'category__content_link'}
                  key={i}
                >
                  <article className={'category__content_row'}>
                    <figure>{image}</figure>
                    <main>
                      <h3>{node.title}</h3>
                      <div
                        className={'news_overview__summary'}
                        dangerouslySetInnerHTML={{ __html: node.body.summary }}
                      ></div>
                    </main>
                  </article>
                </Link>
              )
            })}
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
                      fixed(width: 125, height: 125) {
                        ...GatsbyImageSharpFixed
                        base64
                        aspectRatio
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        # originalImg
                        # originalName
                        # presentationWidth
                        # presentationHeight
                      }
                    }
                  }
                }
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
