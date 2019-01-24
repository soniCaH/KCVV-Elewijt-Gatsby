import React from 'react'
import Layout from '../layouts/index'
import HeroSlider from '../components/hero-slider'
import FeaturedNews from '../components/featured-news'
import MatchesSlider from '../components/matches-slider'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

class IndexPage extends React.Component {
  render() {
    const data = this.props.data
    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

        <HeroSlider />

        <div className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className="cell large-8">
              <FeaturedNews posts={data.toppost} />
            </section>
            <aside className="cell large-4">
              <div className="grid-x featured__matches grid-margin-x">
                {/* <MatchDetails division="3C" regNumber="00055"... /> */}
                {/* <MatchDetails division="4D" regNumber="00055"... /> */}
                {/* <MatchesCardSlider ignore="3C,4D" /> */}
                <article className="medium-6 large-12 cell featured__news-item article-card">
                  <div
                    className="posts__item posts__item--card post__category--interview card"
                    data-equalizer-watch="true"
                  >
                    <div className="posts__inner card__content">
                      <figure className="posts__thumb">LOGO 1 vs LOGO 2</figure>
                      <h6 className="posts__title">
                        Asse Terheide - KCVV Elewijt A
                      </h6>
                      <time dateTime="2016-08-23" className="posts__date">
                        13 januari 2019
                      </time>
                      <div className="posts__excerpt">
                        <table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Team</th>
                              <th>Pts</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2</td>
                              <td>KCVV Elewijt A</td>
                              <td>40</td>
                            </tr>
                            <tr>
                              <td>12</td>
                              <td>KVC.Asse-Terheide A</td>
                              <td>18</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="medium-6 large-12 cell">
                  MATCH B-ploeg
                </article>
                <article className="medium-12 cell">
                  Other matches (youth calendar)
                </article>
                <article className="medium-12 cell">
                  IN THE SPOTLIGHT: Overzicht transfers / contract
                </article>
                <article className="medium-12 cell">
                  IN THE SPOTLIGHT: KCVV TV
                </article>
                <article className="medium-12 cell">
                  IN THE SPOTLIGHT: Aan tafel bij Hans
                </article>
              </div>
            </aside>
          </div>
        </div>

        <div className="grid-container full">
          <MatchesSlider season="1819" regnumber="00055" />
        </div>

        <div className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className="cell large-12">
              <FeaturedNews posts={data.lowerpost} columns="3" teaser={true} />
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
    toppost: allWordpressPost(sort: { fields: [date], order: DESC }, limit: 8) {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          unixdate: date(formatString: "YYYY-MM-DD", locale: "nl-be")
          longdate: date(formatString: "DD MMMM YYYY", locale: "nl-be")
          modified
          categories {
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                sizes(maxWidth: 615) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    lowerpost: allWordpressPost(
      sort: { fields: [date], order: DESC }
      limit: 12
      skip: 8
    ) {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          unixdate: date(formatString: "YYYY-MM-DD", locale: "nl-be")
          longdate: date(formatString: "DD MMMM YYYY", locale: "nl-be")
          modified
          categories {
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                sizes(maxWidth: 615) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
