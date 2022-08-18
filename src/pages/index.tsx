import { graphql, Link, PageProps, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"

import { HomepageResponsePropsApi } from "../Types/Gatsby"
import { AltTitle } from "../components/AltTitle"
import { CardTeaser, CardTVTeaser } from "../components/Card"
import { MatchesOverview } from "../components/MatchesOverview"
import MatchesSlider from "../components/MatchesSlider"
import { MatchesTabs } from "../components/MatchesTabs"
import { Seo } from "../components/Seo"
import Layout from "../layouts"
import "./index.scss"

export const Head = () => (
  <Seo
    title="Er is maar één plezante compagnie"
    description="Startpagina van stamnummer 00055: KCVV Elewijt."
    path={`/`}
    keywords={[`KCVV`, `Voetbal`, `Elewijt`, `Crossing`, `KCVVE`, `Zemst`, `00055`, `55`, `1982`, `1980`]}
  />
)

const IndexPage = () => {
  const { articles, videos }: HomepageResponsePropsApi = useStaticQuery(graphql`
    query {
      articles: allNodeArticle(
        filter: { status: { eq: true }, promote: { eq: true } }
        sort: { fields: created, order: DESC }
        limit: 13
      ) {
        edges {
          node {
            id
            path {
              alias
            }
            created(formatString: "D/M/YYYY")
            changed(formatString: "D/M/YYYY")
            timestamp: changed(formatString: "x")
            title
            promote
            status
            field_featured
            body {
              value
              format
              processed
              summary
            }
            relationships {
              field_media_article_image {
                ...ArticleImage
              }
              field_tags {
                name
                path {
                  alias
                }
              }
            }
            internal {
              type
            }
          }
        }
      }
      videos: allNodeKcvvTv(
        filter: { status: { eq: true }, promote: { eq: true } }
        sort: { fields: created, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            created(formatString: "D/M/YYYY")
            title
            timestamp: created(formatString: "x")
            relationships {
              field_media_article_image {
                ...ArticleImage
              }
            }
            field_website {
              uri
            }
          }
        }
      }
    }
  `)

  const featuredArticle = articles.edges.slice(0, 1)

  return (
    <Layout>
      <section className="frontpage__top__wrapper page__section">
        <div className="frontpage__hero">
          <div className="frontpage__hero__inner">
            <div className="frontpage__hero__container">
              <div className="frontpage__hero__content">
                <article className="frontpage__hero__article">
                  <Link to={featuredArticle[0].node.path.alias}>
                    <div className="frontpage__hero__article__inner">
                      <header>
                        <h3>
                          {featuredArticle[0].node.relationships?.field_tags.map(({ name }, i) => (
                            <span className={`tag__label`} key={`tag-${i}`}>
                              #{name}
                            </span>
                          ))}
                        </h3>
                        <div className="frontpage__hero__article__title">
                          <h2>{featuredArticle[0].node.title}</h2>
                        </div>
                      </header>
                      <GatsbyImage
                        image={
                          featuredArticle[0].node.relationships.field_media_article_image.relationships
                            .field_media_image.localFile.childImageSharp.gatsbyImageData
                        }
                        alt={featuredArticle[0].node.title}
                      />
                    </div>
                  </Link>
                </article>
                <div className="frontpage__hero__sponsor">
                  <StaticImage
                    src="../images/rbfa-lukaku.jpg"
                    alt="RBFA VVF - Romelu Lukaku"
                    placeholder="blurred"
                    layout="constrained"
                    aspectRatio={0.7063758}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="frontpage__matches_carousel page__section" id="frontpage__matches_carousel">
        <AltTitle title="matches" variant="black" />
        <main className="frontpage__matches_carousel__content">
          <article className="frontpage__matches_carousel_item frontpage__matches_carousel_item--a">
            <header className="frontpage__matches_carousel_item__header">THE A Team</header>
            <MatchesTabs teamId={1} />
          </article>
          <article className="frontpage__matches_carousel_item frontpage__matches_carousel_item--b">
            <header className="frontpage__matches_carousel_item__header">THE B Team</header>
            <MatchesTabs teamId={2} />
          </article>
        </main>
        <footer className="frontpage__matches_carousel__buttons">
          <span className="nav-btn prev" onClick={previousMatches}></span>
          <span className="nav-btn next" onClick={nextMatches}></span>
        </footer>
      </section>

      <section className="frontpage__main_content page__section">
        {articles.edges.slice(1, 5).map(({ node }) => (
          <CardTeaser
            key={node.id}
            title={node.title}
            picture={
              node.relationships.field_media_article_image.relationships.field_media_image.localFile.childImageSharp
                .gatsbyImageData
            }
            link={node.path.alias}
            tags={node.relationships?.field_tags}
            createTime={node.created}
          />
        ))}

        <article className="frontpage__main_content__youth">
          <header className="frontpage__matches_carousel_item__header">Wedstrijden</header>
          <MatchesOverview exclude={[`1`, `2`]} action="next" />
        </article>
      </section>

      <section className="frontpage__kcvvtv page__section">
        <AltTitle title="KCVV TV" variant="black" />
        <div className="frontpage__kcvvtv__content">
          {videos.edges.map(({ node }, i) => (
            <CardTVTeaser
              key={i}
              title={node.title}
              picture={
                node.relationships.field_media_article_image.relationships.field_media_image.localFile.childImageSharp
                  .gatsbyImageData
              }
              link={node.field_website.uri}
              createTime={node.created}
            />
          ))}
        </div>
      </section>

      <section className="frontpage__main_content page__section">
        {articles.edges.slice(5, 11).map(({ node }) => (
          <CardTeaser
            key={node.id}
            title={node.title}
            picture={
              node.relationships.field_media_article_image.relationships.field_media_image.localFile.childImageSharp
                .gatsbyImageData
            }
            link={node.path.alias}
            tags={node.relationships?.field_tags}
            createTime={node.created}
          />
        ))}
      </section>
      {/*
      <section className="frontpage__slogan page__section">
        <AltTitle title="Er is maar één plezante compagnie" variant="green" />
      </section> */}

      <section className="frontpage__matches_slider page__section">
        <MatchesSlider />
      </section>
    </Layout>
  )
}

const previousMatches = () => {
  const gallery = document.querySelector(`#frontpage__matches_carousel`)
  const gallery_scroller = gallery?.querySelector(`.frontpage__matches_carousel__content`)
  const gallery_item_size = gallery_scroller?.querySelector(`article`)?.clientWidth || 0

  gallery_scroller?.scrollBy(-gallery_item_size, 0)
}

const nextMatches = () => {
  const gallery = document.querySelector(`#frontpage__matches_carousel`)
  const gallery_scroller = gallery?.querySelector(`.frontpage__matches_carousel__content`)
  const gallery_item_size = gallery_scroller?.querySelector(`article`)?.clientWidth || 0

  gallery_scroller?.scrollBy(gallery_item_size, 0)
}

export default IndexPage
