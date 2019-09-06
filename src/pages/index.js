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

class IndexPage extends Component {
  render() {
    const data = this.props.data
    let articleCount = 0
    const linkCTA = (
      <Link to="/category/transfernieuws" className={'btn btn--arrow'}>
        Check alle transfernieuws
      </Link>
    )

    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

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
        <section className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className="cell large-8 news_overview__wrapper">
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

              {articleCount % 2 !== 0 && (
                <Card
                  title="Speel nu FM 2019 met KCVV"
                  localFile={data.fm19}
                  link="news/2019-07-11-neem-zelf-de-leiding-van-kcvv-elewijt"
                  metadata={false}
                />
              )}
              {articleCount % 2 === 0 && (
                <CardImage
                  title="Speel nu FM 2019 met KCVV"
                  localFile={data.fm19}
                  link="news/2019-07-11-neem-zelf-de-leiding-van-kcvv-elewijt"
                  metadata={false}
                />
              )}
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
              </section>
            </aside>
          </div>
        </section>

        <section className={'grid-container full'}>
          <MatchesSlider season="1920" regnumber="00055" />
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
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 800, quality: 75, cropFocus: ATTENTION) {
                        base64
                        aspectRatio
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                        # originalImg
                        # originalName
                        # presentationWidth
                        # presentationHeight
                      }
                    }
                  }
                }
              }
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
              relationships {
                field_media_image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 600, quality: 75, cropFocus: ATTENTION) {
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
                }
              }
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
  }
`

export default IndexPage
