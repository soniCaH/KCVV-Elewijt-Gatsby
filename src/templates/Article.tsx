import { graphql, Link } from "gatsby"
import { GatsbyImage, getSrc } from "gatsby-plugin-image"
import React from "react"
import { replaceAll } from "../scripts/helper"
import { Seo } from "../components/Seo"
import Layout from "../layouts"
import { ArticleQuery } from "../Types/Article"
import "./Article.scss"
import { Share } from "../components/Share"

const Article = ({
  data: {
    nodeArticle,
    site: {
      siteMetadata: { siteUrl, twitterHandle },
    },
  },
}: ArticleQuery) => {
  const { gatsbyImageData: heroImage } =
    nodeArticle.relationships.field_media_article_image.relationships.field_media_image.localFile.childImageSharp

  const relatedArticles = nodeArticle.relationships.field_related_content || []
  const relatedTags = nodeArticle.relationships.field_tags || []

  const ogImage = {
    src: getSrc(heroImage),
    width: heroImage.width,
    height: heroImage.height,
  }

  const cleanBody = replaceAll(
    nodeArticle.body.processed,
    `/sites/default/`,
    `${process.env.GATSBY_API_DOMAIN}/sites/default/`
  )

  const pathUrl = nodeArticle.path.alias

  const css = `
    html {
      --featured-img: url(${getSrc(heroImage)});
    }
  `

  return (
    <Layout>
      <Seo title={nodeArticle.title} description={nodeArticle.body.summary} path={pathUrl} />
      <style>{css}</style>

      <section className="article__wrapper page__section">
        <article className="article__full">
          <header className="article__header">
            <div className="article__header__title__wrapper">
              <div className="article__header__title">
                <h1>{nodeArticle.title}</h1>
              </div>
            </div>
            <div className="article__header__image__wrapper">
              <div className="article__header__image__bg">
                <GatsbyImage image={heroImage} alt={``} />
              </div>
              <div className="article__header__image__hero">
                <GatsbyImage image={heroImage} alt={``} />
              </div>
            </div>
          </header>

          <div className={`article__main`}>
            <section className={`article__metadata`}>
              <div className={`article__author`}>Geschreven door {nodeArticle.relationships.uid.display_name}.</div>
              <div className={`article__tags`}>
                <span className={`datetime`}>
                  <i className={`fa fa-clock-o`} aria-hidden="true"></i> {nodeArticle.created}
                </span>
                {relatedTags.length > 0 && (
                  <span className={`tag__wrapper`}>
                    <i className={`fa fa-tags`} aria-hidden="true"></i>
                    {` `}
                    {relatedTags.map(({ path, name }, i) => (
                      <Link to={path.alias} key={i}>
                        <span key={i} className={`tag__label`}>
                          #{name}
                        </span>
                      </Link>
                    ))}
                  </span>
                )}
              </div>
              <div className={`article__social-share`}>
                <Share
                  socialConfig={{
                    twitterHandle,
                    config: {
                      url: `${siteUrl}${pathUrl}`,
                      title: nodeArticle.title,
                    },
                  }}
                  tags={relatedTags}
                />
              </div>
            </section>
            <div dangerouslySetInnerHTML={{ __html: cleanBody }} className="article__body" />
          </div>
        </article>
      </section>
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
      path {
        alias
      }
      created(formatString: "DD/MM/YYYY")
      body {
        processed
        summary
      }
      title
      relationships {
        uid {
          display_name
        }
        field_related_content {
          ... on node__article {
            title
            path {
              alias
            }
            internal {
              type
            }
          }
          ... on node__player {
            title
            path {
              alias
            }
            internal {
              type
            }
          }
          ... on node__staff {
            title
            path {
              alias
            }
            internal {
              type
            }
          }
          ... on node__team {
            title
            path {
              alias
            }
            internal {
              type
            }
          }
        }
        field_media_article_image {
          ...HeroImage
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
