import { graphql } from "gatsby"
import React from "react"
import Layout from "../layouts/index"
import { FunctionComponent } from "react"
import { GatsbyImage, getImage, getImageData } from "gatsby-plugin-image"
import { ArticleQuery } from "./Article.types"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import "./Article.scss"

const Article: FunctionComponent<ArticleQuery> = ({ data }: ArticleQuery) => {
  const {
    nodeArticle,
    site: {
      siteMetadata: { siteUrl, twitterHandle },
    },
  } = data

  const { gatsbyImageData: heroImage } =
    nodeArticle.relationships.field_media_article_image.relationships.field_media_image.localFile.childImageSharp

  const bgImage = convertToBgImage(heroImage)

  console.log(bgImage)

  return (
    <Layout>
      <article className={`article__wrapper`}>
        <header className={`article__header`}>
          <div className={`article__hero_image`}>
            <GatsbyImage image={heroImage} alt={nodeArticle.title} />
          </div>
          <h1 className="article__title">{nodeArticle.title}</h1>
        </header>
        <div className={`article__main`}></div>
      </article>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        twitterHandle
      }
    }
    nodeArticle(path: { alias: { eq: $slug } }) {
      # path {
      #   alias
      # }
      # created(formatString: "DD/MM/YYYY")
      # body {
      #   processed
      #   summary
      # }
      title
      relationships {
        #   uid {
        #     display_name
        #   }
        #   field_related_content {
        #     ... on node__article {
        #       title
        #       path {
        #         alias
        #       }
        #       internal {
        #         type
        #       }
        #     }
        #     ... on node__player {
        #       title
        #       path {
        #         alias
        #       }
        #       internal {
        #         type
        #       }
        #     }
        #     ... on node__staff {
        #       title
        #       path {
        #         alias
        #       }
        #       internal {
        #         type
        #       }
        #     }
        #     ... on node__team {
        #       title
        #       path {
        #         alias
        #       }
        #       internal {
        #         type
        #       }
        #     }
        #   }
        field_media_article_image {
          ...HeroImage
        }
        #   field_tags {
        #     name
        #     path {
        #       alias
        #     }
        #   }
      }
    }
  }
`
