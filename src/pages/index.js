import React, { Component } from 'react'
import Layout from '../layouts/index'
import SEO from '../components/seo'
import MetaMatches from '../components/meta-matches';
import MatchesOverview from '../components/matches-overview';
import MatchesSlider from '../components/matches-slider';

class IndexPage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

        <div className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className="cell large-8">
              FEATURED NEWS
              {/* <FeaturedNews
                posts={data.toppost}
                featuredEvent={featuredEvent}
              /> */}
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

export default IndexPage
