import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import SEO from "../components/seo"
import Layout from "../layouts/index"
import "./ArticleStyle.scss"

// eslint-disable-next-line
String.prototype.replaceAll = function (search, replacement) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  var target = this
  return target.replace(new RegExp(search, `g`), replacement)
}

const PageTemplate = ({ data }) => {
  const post = data.nodePage
  let image = null

  if (post.relationships.field_media_article_image) {
    const aspectRatio =
      post.relationships.field_media_article_image.relationships.field_media_image.localFile.childImageSharp
        .gatsbyImageData

    // Create a fluid image based on its original aspectRatio.
    image = (
      <GatsbyImage
        image={{
          ...post.relationships.field_media_article_image.relationships.field_media_image.localFile.childImageSharp
            .gatsbyImageData,
          aspectRatio: aspectRatio > 1 ? 1.7 / 1 : 2 / 1,
        }}
        alt={post.title}
      />
    )
  }

  // Convert links to paths on our API, to absolute URL's.
  const cleanBody = post.body.processed.replaceAll(`/sites/default/`, `${process.env.GATSBY_API_DOMAIN}/sites/default/`)
  const pathUrl = post.path.alias

  return (
    <Layout>
      <SEO lang="nl-BE" title={post.title} path={pathUrl} />

      <article className={`article__wrapper`}>
        <header className={`article__header` + (!image ? ` article__header--no-image` : ``)}>
          {image && (
            <figure className={`article__header_image`}>
              {image}
              <div className={`gradient gradient--70`}></div>
            </figure>
          )}
          <h3 className={`article__header__heading`}>
            <span>{post.title}</span>
          </h3>
        </header>
        <main className={`article__body`}>
          <section>
            <div dangerouslySetInnerHTML={{ __html: cleanBody }} />
          </section>
        </main>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
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
          ...ArticleImage
        }
      }
    }
  }
`

export default PageTemplate