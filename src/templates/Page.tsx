import { graphql } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import React from "react"
import { Seo } from "../components/Seo"
import Layout from "../layouts"
import { PageQuery } from "../Types/Page"
import "./Article.scss"

const PageTemplate = ({ data }: PageQuery) => {
  const post = data.nodePage
  const image = getImage(
    post.relationships.field_media_article_image.relationships.field_media_image.localFile.childImageSharp
      .gatsbyImageData
  )

  // Convert links to paths on our API, to absolute URL's.
  const cleanBody = post.body.processed.replaceAll(`/sites/default/`, `${process.env.GATSBY_API_DOMAIN}/sites/default/`)

  return (
    <Layout>
      <section className="article__wrapper page__section">
        <article className="article__full">
          <header className="article__header">
            <div className="article__header__title__wrapper">
              <div className="article__header__title">
                <h1>{post.title}</h1>
              </div>
            </div>
            {image && (
              <div className="article__header__image__wrapper">
                <div className="article__header__image__bg">
                  <GatsbyImage image={image} alt={``} />
                </div>
                <div className="article__header__image__hero">
                  <GatsbyImage image={image} alt={``} />
                </div>
              </div>
            )}
          </header>
          <main className={`article__main`}>
            <div dangerouslySetInnerHTML={{ __html: cleanBody }} className="article__body" />
          </main>
        </article>
      </section>
    </Layout>
  )
}

export const Head = ({ data }: PageQuery) => {
  const post = data.nodePage
  const image = getImage(
    post.relationships.image_og.relationships.field_media_image.localFile.childImageSharp.gatsbyImageData
  )
  const ogImage = image && {
    src: getSrc(image) || ``,
    width: image.width,
    height: image.height,
  }

  const pathUrl = post.path.alias
  return <Seo title={post.title} path={pathUrl} image={ogImage} />
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
          ...HeroImage
        }
        image_og: field_media_article_image {
          ...ArticleImage
        }
      }
    }
  }
`

export default PageTemplate
