import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layouts/index'
import SEO from '../components/seo'
import Img from 'gatsby-image'

import Share from '../components/share'

import './article.scss'

// eslint-disable-next-line
String.prototype.replaceAll = function(search, replacement) {
  var target = this
  return target.replace(new RegExp(search, 'g'), replacement)
}

export default ({ data }) => {
  const post = data.nodeArticle

  const {
    site: {
      siteMetadata: { url, twitterHandle },
    },
  } = data

  const aspectRatio =
    post.relationships.field_media_article_image.relationships.field_media_image
      .localFile.childImageSharp.fluid

  const image = (
    <Img
      fluid={{
        ...post.relationships.field_media_article_image.relationships
          .field_media_image.localFile.childImageSharp.fluid,
        aspectRatio: aspectRatio > 1 ? 2.5 / 1 : 1.5 / 1,
      }}
    />
  )
  const relatedArticles = post.relationships.field_related_content || []
  const relatedTags = post.relationships.field_tags || []
  const cleanBody = post.body.processed.replaceAll(
    '/sites/default/',
    `${process.env.GATSBY_API_DOMAIN}/sites/default/`
  )

  return (
    <Layout>
      <SEO lang="nl-BE" title={post.title} />

      <article className={'article__wrapper'}>
        <header className={'article__header'}>
          <figure className={'article__header_image'}>
            {image}
            <div className={'gradient gradient--70'}></div>
          </figure>
          <h3 className={'article__header__heading'}>
            <span>{post.title}</span>
          </h3>
        </header>
        <main className={'article__body'}>
          <section className={'article__metadata container clearfix'}>
            <div className={'article__author'}>
              Geschreven door {post.relationships.uid.name}.
            </div>
            <div className={'article__tags'}>
              <span className={'datetime'}>
                <i className={'fa fa-clock-o'} aria-hidden="true"></i>{' '}
                {post.created}
              </span>
              {relatedTags.length > 0 && (
                <span className={'tag__wrapper'}>
                  <i className={'fa fa-tags'} aria-hidden="true"></i>{' '}
                  {relatedTags.map(({ path, name }, i) => (
                    <Link to={path.alias} key={i}>
                      <span key={i} className={'tag__label'}>
                        #{name}
                      </span>
                    </Link>
                  ))}
                </span>
              )}
            </div>
            <div className={'article__social-share'}>
              <Share
                socialConfig={{
                  twitterHandle,
                  config: {
                    url: `${url}${post.path.alias}`,
                    title: post.title,
                  },
                }}
                tags={relatedTags}
              />
            </div>
          </section>
          <section>
            <div dangerouslySetInnerHTML={{ __html: cleanBody }} />
          </section>
        </main>
        <footer className={'article__footer__wrapper'}>
          <section className={'article__footer'}>
            /--- Gerelateerde inhoud ---/
            {relatedArticles.length > 0 &&
              relatedArticles.map(({ path, title }, i) => {
                return (
                  <article key={i} className={'article__footer_related'}>
                    <Link to={path.alias}>{title}</Link>
                  </article>
                )
              })}
          </section>
        </footer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        url
        twitterHandle
      }
    }
    nodeArticle(path: { alias: { eq: $slug } }) {
      path {
        alias
      }
      created(formatString: "DD/MM/YYYY")
      body {
        processed
      }
      title
      relationships {
        uid {
          name
        }
        field_related_content {
          ... on node__article {
            title
            path {
              alias
            }
          }
          ... on node__player {
            title
            path {
              alias
            }
          }
          ... on node__staff {
            title
            path {
              alias
            }
          }
          ... on node__team {
            path {
              alias
            }
            title
          }
        }
        field_media_article_image {
          relationships {
            field_media_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1680, quality: 75, cropFocus: ATTENTION) {
                    base64
                    aspectRatio
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
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
        field_tags {
          name
          path {
            alias
          }
        }
      }
    }
  }
`
