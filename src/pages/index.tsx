import { graphql, Link, useStaticQuery } from "gatsby"
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
import EventCard from "../components/EventCard"
import classnames from "classnames"
import Icon from "../components/Icon"

export const Head = () => (
  <Seo
    title="Er is maar één plezante compagnie"
    description="Startpagina van stamnummer 00055: KCVV Elewijt."
    path={`/`}
    keywords={[`KCVV`, `Voetbal`, `Elewijt`, `Crossing`, `KCVVE`, `Zemst`, `00055`, `55`, `1982`, `1980`]}
  />
)

const IndexPage = () => {
  const { articles, videos, events, stickyArticles }: HomepageResponsePropsApi = useStaticQuery(graphql`
    query {
      articles: allNodeArticle(
        filter: { status: { eq: true }, promote: { eq: true } }
        sort: { fields: created, order: DESC }
        limit: 10
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
      stickyArticles: allNodeArticle(
        filter: { status: { eq: true }, promote: { eq: true }, sticky: { eq: true } }
        sort: { fields: created, order: DESC }
        limit: 3
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
                ...ArticleImageLarge
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
      events: allNodeEvent(
        filter: { promote: { eq: true }, status: { eq: true } }
        sort: { order: ASC, fields: field_daterange___value }
        limit: 1
      ) {
        edges {
          node {
            field_daterange {
              value(formatString: "YYYY-MM-DDTHH:mm:ssZ")
              end_value(formatString: "YYYY-MM-DDTHH:mm:ssZ")
            }
            field_event_link {
              uri
            }
            title
            relationships {
              field_media_image {
                field_media_image {
                  alt
                }
                relationships {
                  field_media_image {
                    localFile {
                      ...KCVVFluid960
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const featuredEvent = events.edges.slice(0, 1)

  return (
    <Layout>
      <section className="frontpage__featured_articles">
        {stickyArticles.edges.map(({ node }, i) => (
          <Link
            key={`featured-${i}`}
            to={node.path.alias}
            className={classnames(`frontpage__featured_article`, { "frontpage__featured_article--active": i === 0 })}
          >
            <GatsbyImage
              image={
                node.relationships.field_media_article_image.relationships.field_media_image.localFile.childImageSharp
                  .gatsbyImageData
              }
              alt={node.title}
            />
            <div className="frontpage__featured_article__title__wrapper">
              <h3 className="frontpage__featured_article__title">{node.title}</h3>
              <div
                className="frontpage__featured_article__title__description"
                dangerouslySetInnerHTML={{ __html: node.body.summary }}
              />
              <div className="frontpage__featured_article__meta__wrapper">
                <div className="frontpage__featured_article__meta">
                  {node.relationships.field_tags && node.relationships.field_tags?.length > 0 && (
                    <div className={`frontpage__featured_article__meta__tags`}>
                      <Icon icon="fa-tags" />
                      {node.relationships.field_tags.map(({ name }, i) => (
                        <span className={`tag__label`} key={i}>
                          #{name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="frontpage__matches_carousel page__section" id="frontpage__matches_carousel">
        {/* <AltTitle title="matches" variant="black" /> */}
        <main className="frontpage__matches_carousel__content">
          <article className="frontpage__matches_carousel_item frontpage__matches_carousel_item--a">
            <header className="frontpage__matches_carousel_item__header">
              <Link to="/team/a-ploeg">THE A Team &raquo;</Link>
            </header>
            <MatchesTabs teamId={1} />
          </article>
          <article className="frontpage__matches_carousel_item frontpage__matches_carousel_item--b">
            <header className="frontpage__matches_carousel_item__header">
              <Link to="/team/b-ploeg">THE B Team &raquo;</Link>
            </header>
            <MatchesTabs teamId={2} />
          </article>
        </main>
        <footer className="frontpage__matches_carousel__buttons">
          <span className="nav-btn prev" onClick={previousMatches}></span>
          <span className="nav-btn next" onClick={nextMatches}></span>
        </footer>
      </section>

      <section className="frontpage__main_content page__section">
        {featuredEvent.length > 0 && (
          <EventCard
            title={featuredEvent[0].node.title}
            picture={
              featuredEvent[0].node.relationships.field_media_image.relationships.field_media_image.localFile
                .childImageSharp.gatsbyImageData
            }
            link={featuredEvent[0].node.field_event_link.uri}
            datetimeStart={featuredEvent[0].node.field_daterange.value}
            datetimeEnd={featuredEvent[0].node.field_daterange.end_value}
          />
        )}
        {articles.edges.slice(0, featuredEvent.length > 0 ? 2 : 4).map(({ node }) => (
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
        {/* <AltTitle title="KCVV TV" variant="black" /> */}
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

      <div className="frontpage__advertisement">
        <StaticImage
          src="../images/cometogether.jpg"
          alt="#ComeTogether"
          className="frontpage__advertisement"
          width={960}
        />
      </div>

      <div className="frontpage__main_content__wrapper">
        <section className="frontpage__main_content page__section">
          {articles.edges.slice(featuredEvent.length > 0 ? 2 : 4, featuredEvent.length > 0 ? 8 : 10).map(({ node }) => (
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
      </div>

      <section className="frontpage__matches_slider page__section">
        <MatchesSlider />
      </section>

      <div className="frontpage__advertisement">
        <a href="mailto:sponsoring@kcvvelewijt.be" target="_blank">
          <StaticImage
            src="../images/sponsoring.jpg"
            alt="Sponsor worden van KCVV?"
            className="frontpage__advertisement"
            width={960}
          />
        </a>
      </div>
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
