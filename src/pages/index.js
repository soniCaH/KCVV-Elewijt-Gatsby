import React from 'react'
import Layout from '../layouts/index'
import HeroSlider from '../components/hero-slider'
import FeaturedNews from '../components/featured-news'
import MatchesSlider from '../components/matches-slider'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import MatchWithLogo from '../components/match-with-logo'

class IndexPage extends React.Component {
  render() {
    const data = this.props.data

    const matchMockup = {
      season: '1819',
      region: 'bra',
      division: '3C',
      dateTime: 1548597600000,
      home: 'KCVV.Elewijt A',
      away: 'KNV Keerbergen',
      status: '',
      matchDay: 20,
      regNumberHome: '00055',
      regNumberAway: '03823',
    }

    const matchPrevMockup = {
      season: '1819',
      region: 'bra',
      division: '3C',
      dateTime: 1547992800000,
      resultHome: 0,
      resultAway: 1,
      home: 'Asse-Terheide A',
      away: 'KVC.Asse-Terheide A',
      status: '',
      matchDay: 19,
      regNumberHome: '06623',
      regNumberAway: '00055',
    }

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
                  <ul className="widget__filter" data-tabs id="matches-a">
                    <li className="tabs-title">
                      <a href="#matches-a-prev">Vorige</a>
                    </li>
                    <li className="tabs-title is-active">
                      <a href="#matches-a-next">Volgende</a>
                    </li>
                    <li className="tabs-title">
                      <a href="#matches-a-rank">Ranking</a>
                    </li>
                  </ul>
                  <div data-tabs-content="matches-a">
                    <div className="tabs-panel" id="matches-a-prev">
                      <MatchWithLogo match={matchPrevMockup} />
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
                            <td>43</td>
                          </tr>
                          <tr>
                            <td>12</td>
                            <td>KVC.Asse-Terheide A</td>
                            <td>21</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tabs-panel is-active" id="matches-a-next">
                      <MatchWithLogo match={matchMockup} />
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
                            <td>43</td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>KVC.Asse-Terheide A</td>
                            <td>27</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tabs-panel" id="matches-a-rank">
                      RANK
                    </div>
                  </div>
                </div>
                <div className={'medium-6 large-12 cell card'}>
                  <div className="card__header">
                    <h4>The B-Team</h4>
                  </div>
                  <MatchWithLogo match={matchMockup} />
                </div>

                <div className={'medium-6 large-12 cell card'}>
                  <div className="card__header">
                    <h4>Jeugdploegen</h4>
                  </div>
                  Matches overzicht
                </div>

                <div className={'medium-6 large-12 cell card'}>
                  <div className="card__header">
                    <h4>Transfernieuws</h4>
                  </div>
                  <MatchWithLogo match={matchMockup} />
                </div>

                <div className={'medium-6 large-12 cell card'}>
                  <div className="card__header">
                    <h4>KCVV TV</h4>
                  </div>
                  <MatchWithLogo match={matchMockup} />
                </div>

                <div className={'medium-6 large-12 cell card'}>
                  <div className="card__header">
                    <h4>Aan tafel bij Hans</h4>
                  </div>
                  <MatchWithLogo match={matchMockup} />
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
