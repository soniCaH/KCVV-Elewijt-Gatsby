import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../layouts/index'

import SEO from '../components/seo'
import MetaMatches from '../components/meta-matches'
import MatchesOverview from '../components/matches-overview'
import MatchesSlider from '../components/matches-slider'
import { NewsItemFeatured, NewsItemCardRatio } from '../components/news-item'
import FeaturedSection from '../components/featured-section'
import { Card, CardImage } from '../components/cards'
import UpcomingEvent from '../components/upcoming-event'
import PlayerFeatured from '../components/player--featured'

class IndexPage extends Component {
  render() {
    const data = this.props.data
    let articleCount = 0
    const linkCTA = (
      <Link to="/category/transfernieuws" className={'btn btn--arrow'}>
        Check alle transfernieuws
      </Link>
    )

    const { featuredPlayer = null } = data

    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

        <section className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className="cell large-8 news_overview__wrapper">
              <UpcomingEvent />

              {data.featuredPosts.edges.map(({ node }, i) => {
                // Keep track of articleCount to properly place/align.
                // Featured articles span 2 columns.
                node.field_featured && (articleCount = articleCount + 2)
                !node.field_featured && articleCount++
                return (
                  <>
                    {node.field_featured && <NewsItemFeatured node={node} />}
                    {!node.field_featured && (
                      <NewsItemCardRatio node={node} teaser={true} />
                    )}
                  </>
                )
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
                {featuredPlayer && (
                  <article className={'medium-6 large-12 cell card'}>
                    <header className={'card__header'}>
                      <h4>Speler van de week</h4>
                    </header>
                    <PlayerFeatured player={featuredPlayer} />
                  </article>
                )}
              </section>
            </aside>
          </div>
        </section>

        <section className={'grid-container full'}>
          <MatchesSlider season="1920" regnumber="00055" />
        </section>

        <section className={'grid-container full'}>
          <FeaturedSection
            articles={data.featuredTransfers}
            title="Transfernieuws"
            link={linkCTA}
          />
        </section>

        <section className="grid-container site-content">
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
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    featuredPosts: allNodeArticle(
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
        }
      }
    }
    featuredTransfers: allNodeArticle(
      filter: {
        relationships: {
          field_tags: { elemMatch: { name: { eq: "Transfernieuws" } } }
        }
        status: { eq: true }
        promote: { eq: true }
      }
      sort: { fields: created, order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          path {
            alias
          }
          created(formatString: "D/M/YYYY")
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
        }
      }
    }
    fm19: file(name: { eq: "fm19-kits" }) {
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
    # featuredPlayer: nodePlayer(field_firstname: { eq: "Nick" }) {
    #   field_firstname
    #   field_lastname
    #   field_shirtnumber
    #   field_stats_games
    #   field_position
    #   field_stats_cleansheets
    #   field_stats_goals
    #   field_stats_cards_yellow
    #   field_stats_cards_red
    #   relationships {
    #     field_image {
    #       localFile {
    #         url
    #       }
    #     }
    #   }
    # }
  }
`

export default IndexPage
