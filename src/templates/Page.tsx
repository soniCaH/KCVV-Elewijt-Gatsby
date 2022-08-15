import { graphql } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import React from "react"
import { Seo } from "../components/Seo"
import Layout from "../layouts"
import { PageQuery } from "../Types/Page"

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
      <header className="page_header__wrapper">
        <div className="page_header">
          <h1>{post.title}</h1>
        </div>
      </header>

      {image && (
        <div className="page__header__image__wrapper">
          <div className="page__header__image__bg">
            <GatsbyImage image={image} alt={``} />
          </div>
          <div className="page__header__image__hero">
            <GatsbyImage image={image} alt={``} />
          </div>
        </div>
      )}
      <main className="page__wrapper page__wrapper--limited">
        <div dangerouslySetInnerHTML={{ __html: cleanBody }} className="page__body" />
      </main>
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
