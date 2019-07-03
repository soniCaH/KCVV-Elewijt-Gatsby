import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/index'

import SEO from '../components/seo'
import MetaMatches from '../components/meta-matches'
import MatchesOverview from '../components/matches-overview'
import MatchesSlider from '../components/matches-slider'
import { NewsItemCard, NewsItemFeatured } from '../components/news-item'

class IndexPage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

        <div className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className="cell large-8 news_overview__wrapper">
              {data.featuredPosts.edges.map(({ node }, i) => {
                return (
                  <>
                    {node.field_featured && <NewsItemFeatured node={node} />}
                    {!node.field_featured && (
                      <NewsItemCard node={node} teaser={true} />
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
                    season="1819"
                    region="bra"
                    division="3C"
                    regnumber="00055"
                  />
                </article>
                <article className={'medium-6 large-12 cell card'}>
                  <header className={'card__header'}>
                    <h4>The B-Team</h4>
                  </header>
                  <MetaMatches
                    season="1819"
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
                    season="1819"
                    regnumber="00055"
                    exclude="['3C', '4D']"
                  />
                </article>
              </section>
            </aside>
          </div>
        </div>

        <div className="grid-container full">
          <MatchesSlider season="1819" regnumber="00055" />
        </div>

        <div className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className="cell large-12">
              REST VAN NIEUWS
              {/* <FeaturedNews posts={data.lowerpost} columns="3" teaser={true} /> */}
            </section>
          </div>
        </div>
      </Layout>
    )
  }

  componentDidMount() {
    // alert('hey');
  }
}

export const pageQuery = graphql`
  query {
    featuredPosts: allNodeArticle(
      filter: { status: { eq: true }, promote: { eq: true } }
      sort: { fields: changed, order: ASC }
      limit: 12
    ) {
      edges {
        node {
          id
          path {
            alias
          }
          changed
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
                      fluid(maxWidth: 1680, quality: 75, cropFocus: ATTENTION) {
                        # base64
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        # srcWebp
                        # srcSetWebp
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
  }
`

export default IndexPage
