import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/index'

import SEO from '../components/seo'
import MetaMatches from '../components/meta-matches'
import MatchesOverview from '../components/matches-overview'
import MatchesSlider from '../components/matches-slider'
import {
  NewsItemFeatured,
  NewsItemCardRatio,
  KcvvTvCard,
} from '../components/news-item'
import { CardImage } from '../components/cards'
import UpcomingEvent from '../components/upcoming-event'
import PlayerFeatured from '../components/player--featured'

class IndexPage extends Component {
  render() {
    const data = this.props.data
    let articleCount = 0
    let kcvvTvCount = 0

    const { featuredPosts, kcvvTv, featuredPlayer = null } = data
    const posts = [...featuredPosts.edges, ...kcvvTv.edges].sort((a, b) =>
      a.node.timestamp < b.node.timestamp
        ? 1
        : b.node.timestamp < a.node.timestamp
        ? -1
        : 0
    )

    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

        <section className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className="cell large-8 news_overview__wrapper">
              <UpcomingEvent />

              {posts.map(({ node }, i) => {
                switch (node.internal.type) {
                  case 'node__article':
                    node.field_featured && (articleCount = articleCount + 2)
                    !node.field_featured && articleCount++
                    return (
                      <>
                        {node.field_featured && (
                          <NewsItemFeatured node={node} key={i} />
                        )}
                        {!node.field_featured && (
                          <NewsItemCardRatio
                            node={node}
                            teaser={true}
                            key={i}
                          />
                        )}
                      </>
                    )
                  case 'node__kcvv_tv':
                    if (kcvvTvCount === 0) {
                      articleCount = articleCount + 2
                      kcvvTvCount++
                      return (
                        <CardImage
                          title={node.title}
                          localFile={
                            node.relationships.field_media_article_image
                              .relationships.field_media_image.localFile
                          }
                          link={node.field_website.uri}
                          metadata={false}
                          key={i}
                        />
                      )
                    } else {
                      articleCount = articleCount + 2
                      kcvvTvCount++
                      return <KcvvTvCard node={node} teaser={true} key={i} />
                    }

                  default:
                    return ''
                }
              })}
            </section>
            <aside className="cell large-4">
              <section className="grid-x featured__matches grid-margin-x">
                <article className={'medium-6 large-12 cell card'}>
                  <header className={'card__header'}>
                    <h4>The A-Team</h4>
                  </header>
                  <MetaMatches
                    season="1920"
                    region="bra"
                    division="2A"
                    regnumber="00055"
                  />
                </article>
                <article className={'medium-6 large-12 cell card'}>
                  <header className={'card__header'}>
                    <h4>The B-Team</h4>
                  </header>
                  <MetaMatches
                    season="1920"
                    region="bra"
                    division="4D"
                    regnumber="00055"
                  />
                </article>
                <article className={'medium-6 large-12 cell card'}>
                  <header className="card__header">
                    <h4>Jeugdploegen</h4>
                  </header>
                  <MatchesOverview
                    season="1920"
                    regnumber="00055"
                    exclude="['2A', '4D']"
                  />
                </article>
                {featuredPlayer &&
                  featuredPlayer.edges.map(
                    ({ node: potw }) =>
                      potw.relationships.field_player && (
                        <article className={'medium-6 large-12 cell card'}>
                          <header className={'card__header'}>
                            <h4>Speler van de week</h4>
                          </header>
                          <PlayerFeatured
                            player={potw.relationships.field_player}
                          />
                        </article>
                      )
                  )}
                <article className={'medium-6 large-12 cell social'}>
                  <div className={'social-sidebar__wrapper'}>
                    <a
                      href="https://facebook.com/KCVVElewijt"
                      className="btn-social-counter btn-social-counter--fb"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="btn-social-counter__icon">
                        <i className="fa fa-facebook"></i>
                      </div>
                      <h5 className="btn-social-counter__title">
                        Volg onze Facebook pagina
                      </h5>
                    </a>
                    <a
                      href="https://twitter.com/kcvve"
                      className="btn-social-counter btn-social-counter--twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="btn-social-counter__icon">
                        <i className="fa fa-twitter"></i>
                      </div>
                      <h5 className="btn-social-counter__title">
                        Volg ons op Twitter
                      </h5>
                    </a>
                    <a
                      href="http://www.instagram.com/kcvve"
                      className="btn-social-counter btn-social-counter--instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="btn-social-counter__icon">
                        <i className="fa fa-instagram"></i>
                      </div>
                      <h5 className="btn-social-counter__title">
                        Volg ons op Instagram
                      </h5>
                    </a>
                  </div>
                </article>
                <article className={'medium-6 large-12 cell card'}>
                  <header className={'card__header'}>
                    <h4>
                      <i
                        className={'fa fa-commenting-o'}
                        aria-hidden="true"
                      ></i>{' '}
                      Website feedback
                    </h4>
                  </header>
                  <div className={'card__content'}>
                    <p>
                      Na lang zwoegen is onze nieuwe website eíndelijk online
                      geraakt! We zijn heel benieuwd naar jullie mening of
                      feedback. Als jullie vinden dat er iets ontbreekt, of als
                      je bepaalde fouten tegenkomt, zouden we het ten zeerste
                      appreciëren als je ons even iets laat weten op{' '}
                      <a
                        href="mailto:website@kcvvelewijt.be"
                        className={'rich-link'}
                      >
                        website@kcvvelewijt.be
                      </a>
                      !
                    </p>
                  </div>
                </article>
              </section>
            </aside>
          </div>
        </section>

        <section className={'grid-container full'}>
          <MatchesSlider season="1920" regnumber="00055" />
        </section>

        {/* <section className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className={'cell large-12 featured-article'}>
              <CardImage
                title="Voorbereidings- en bekerwedstrijden"
                localFile={data.preseason}
                link="/games"
                metadata={false}
              />
            </section>
          </div>
        </section> */}
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    featuredPosts: allNodeArticle(
      filter: { status: { eq: true }, promote: { eq: true } }
      sort: { fields: changed, order: DESC }
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
          timestamp: created(formatString: "x")
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
    preseason: file(name: { eq: "preseason" }) {
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
        }
      }
    }
    kcvvTv: allNodeKcvvTv(
      filter: { status: { eq: true }, promote: { eq: true } }
      sort: { fields: created, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
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
          internal {
            type
          }
        }
      }
    }
    featuredPlayer: allNodePotw(
      sort: { fields: created, order: DESC }
      filter: { status: { eq: true } }
      limit: 1
    ) {
      edges {
        node {
          relationships {
            field_player {
              field_firstname
              field_lastname
              field_shirtnumber
              field_stats_games
              field_position
              field_stats_cleansheets
              field_stats_goals
              field_stats_cards_yellow
              field_stats_cards_red
              relationships {
                field_image {
                  localFile {
                    url
                  }
                }
              }
              path {
                alias
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
