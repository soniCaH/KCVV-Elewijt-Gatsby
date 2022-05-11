import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import { FunctionComponent } from "react"
import React from "react"

import SEO from "../components/seo"
import Share from "../components/share"
import Layout from "../layouts/index"
import { replaceAll } from "../scripts/helper"
import { ArticleQuery } from "./Article.types"
import "./ArticleStyle.scss"

const Article: FunctionComponent<ArticleQuery> = ({ data }: ArticleQuery) => {
  const {
    nodeArticle,
    site: {
      siteMetadata: { siteUrl, twitterHandle },
    },
  } = data

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
      <SEO
        lang="nl-BE"
        title={nodeArticle.title}
        description={nodeArticle.body.summary}
        path={pathUrl}
        image={ogImage}
      />

      <style>{css}</style>

      <article className={`article__wrapper`}>
        <header className={`article__header`}>
          {/* <div className={`article__hero_image`}>
            <GatsbyImage image={heroImage} alt={nodeArticle.title} />
          </div> */}
          <h1 className="article__title featured-border">{nodeArticle.title}</h1>
        </header>
        <div className={`article__main`}>
          <section className={`article__metadata container clearfix`}>
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
          <div dangerouslySetInnerHTML={{ __html: cleanBody }} />
        </div>
        <footer className={`article__footer__wrapper`}>
          <section className={`article__footer`}>
            {relatedArticles.length > 0 && (
              <>
                <h3>Gerelateerde inhoud</h3>
                {relatedArticles.map(({ path, title, internal }, i) => {
                  return (
                    <article key={i} className={`article__footer_related`}>
                      <i
                        className={`article__footer_related__icon article__footer_related__icon--${internal.type} fa`}
                      />
                      <Link to={path.alias}>{title}</Link>
                    </article>
                  )
                })}
              </>
            )}
          </section>
        </footer>
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
