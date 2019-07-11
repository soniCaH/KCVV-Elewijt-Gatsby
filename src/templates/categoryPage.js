import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layouts/index'
import SEO from '../components/seo'
import Img from 'gatsby-image'

import './categoryPage.scss'

String.prototype.replaceAll = function(search, replacement) {
  const target = this;
  return target.replace(new RegExp(search, 'g'), replacement)
}

export default ({ data }) => {
  const info = data.allTaxonomyTermCategory.group
  const tagName = info[0].fieldValue
  const post = data.allTaxonomyTermCategory.edges[0].node
  const articles =
    post.relationships.node__article &&
    post.relationships.node__article.slice(0, 19)

  return (
    <Layout>
      <SEO lang="nl-BE" title={tagName} />

      <section className={'category__wrapper'}>
        <header className={'player-detail__header'}>
          <h1 className={'player-detail__name'}>#{tagName}</h1>

          <div className={'bg-green-mask'}>
            <div className={'bg-white-end'} />
          </div>
        </header>

        <div className={'player-break'}></div>
        <main className={'category__content_wrapper'}>
          {articles && articles.map(({relationships, path, title, body}, i) => {
            const image = (
              <Img
                fixed={{
                  ...relationships.field_media_article_image
                    .relationships.field_media_image.localFile.childImageSharp
                    .fixed,
                }}
              />
            )
            return (
              <Link
                to={path.alias}
                className={'category__content_link'}
                key={i}
              >
                <article className={'category__content_row'}>
                  <figure>{image}</figure>
                  <main>
                    <h3>{title}</h3>
                    <div
                      className={'news_overview__summary'}
                      dangerouslySetInnerHTML={{ __html: body.summary }}
                    ></div>
                  </main>
                </article>
              </Link>
            );
          })}
        </main>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    allTaxonomyTermCategory(
      sort: { fields: relationships___node__article___created, order: DESC }
      filter: { path: { alias: { eq: $slug } } }
    ) {
      edges {
        node {
          name
          relationships {
            node__article {
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
      }
      group(field: name) {
        fieldValue
      }
    }
  }
`
