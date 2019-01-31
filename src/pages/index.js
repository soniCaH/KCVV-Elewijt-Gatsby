import React from 'react'
import Layout from '../layouts/index'
import HeroSlider from '../components/hero-slider'
import FeaturedNews from '../components/featured-news'
import MatchesSlider from '../components/matches-slider'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import MetaMatches from '../components/meta-matches'
import MatchesOverview from '../components/matches-overview'
import picYentel from '../images/yentel.jpg'

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
                <div className={'medium-6 large-12 cell card'}>
                  <div className={'card__header'}>
                    <h4>The A-Team</h4>
                  </div>
                  <MetaMatches
                    season="1819"
                    region="bra"
                    division="3C"
                    regnumber="00055"
                  />
                </div>
                <div className={'medium-6 large-12 cell card'}>
                  <div className={'card__header'}>
                    <h4>The B-Team</h4>
                  </div>
                  <MetaMatches
                    season="1819"
                    region="bra"
                    division="4D"
                    regnumber="00055"
                  />
                </div>

                <div className={'medium-6 large-12 cell card'}>
                  <div className="card__header">
                    <h4>Jeugdploegen</h4>
                  </div>
                  <MatchesOverview
                    season="1819"
                    regnumber="00055"
                    exclude="['3C', '4D']"
                  />
                </div>

                <div className={'medium-6 large-12 cell card'}>
                  <div className="card__header">
                    <h4>Transfernieuws</h4>
                  </div>
                  <div>
                    <img src={picYentel} alt="Yentel Teugels" />
                  </div>
                  <div className={'card__content'}>
                    <h5>Yentel Teugels</h5>
                    <div>
                      <p>
                        <span role="img" aria-label="Checkbox">
                          ✅
                        </span>{' '}
                        Met Yentel haalt KCVV een creatieve aanvallende
                        middenvelder in huis. Hij komt net als Ran Dondeyne over
                        van reeksgenoot SK Steenhuffel.
                      </p>
                      <p>
                        <span role="img" aria-label="Signature">
                          ✍️
                        </span>{' '}
                        Yentel Teugels - 12 doelpunten tot dusver in de
                        competitie.
                      </p>
                    </div>
                  </div>
                  <div className="card__footer">
                    <a href="index.html">Lees alle transfernieuws</a>
                  </div>
                </div>

                <div className={'medium-6 large-12 cell card card--kcvvtv'}>
                  <div className="card__header">
                    <h4>KCVV TV</h4>
                  </div>
                  <div id="fb-root" />
                  <div
                    className={"fb-video"}
                    data-href="http://www.facebook.com/KCVVElewijt/videos/609327786169426/"
                    data-show-text="true"
                    data-allowfullscreen="true"
                  >
                  </div>
                </div>
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
    ;(function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src =
        'https://connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v3.2&appId=1618079068306856&autoLogAppEvents=1'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }
}

export const pageQuery = graphql`
  query {
    toppost: allWordpressPost(
      sort: { fields: [date], order: DESC }
      limit: 12
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
