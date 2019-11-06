import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/index'
import SEO from '../components/seo'
import Img from 'gatsby-image'

import './article.scss'

// eslint-disable-next-line
String.prototype.replaceAll = function(search, replacement) {
  var target = this
  return target.replace(new RegExp(search, 'g'), replacement)
}

export default ({ data }) => {
  const post = data.nodePage
  let image = null

  if (post.relationships.field_media_article_image) {
    const aspectRatio =
      post.relationships.field_media_article_image.relationships
        .field_media_image.localFile.childImageSharp.fluid

    image = (
      <Img
        fluid={{
          ...post.relationships.field_media_article_image.relationships
            .field_media_image.localFile.childImageSharp.fluid,
          aspectRatio: aspectRatio > 1 ? 2.5 / 1 : 1.5 / 1,
        }}
      />
    )
  }
  const cleanBody = post.body.processed.replaceAll(
    '/sites/default/',
    `${process.env.GATSBY_API_DOMAIN}/sites/default/`
  )

  return (
    <Layout>
      <SEO lang="nl-BE" title={post.title} />

      <article className={'article__wrapper'}>
        <header
          className={
            'article__header' + (!image ? ' article__header--no-image' : '')
          }
        >
          {image && (
            <figure className={'article__header_image'}>
              {image}
              <div className={'gradient gradient--70'}></div>
            </figure>
          )}
          <h3 className={'article__header__heading'}>
            <span>{post.title}</span>
          </h3>
        </header>
        <main className={'article__body'}>
          <section>
            <div dangerouslySetInnerHTML={{ __html: cleanBody }} />
          </section>
        </main>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    nodePage(path: { alias: { eq: $slug } }) {
      path {
        alias
      }
      body {
        processed
      }
      title
      relationships {
        field_media_article_image {
          ...ArticleImageLarge
        }
      }
    }
  }
`
