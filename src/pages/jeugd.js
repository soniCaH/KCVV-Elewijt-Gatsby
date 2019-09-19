import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/index'

import SEO from '../components/seo'
import { CardImage } from '../components/cards'
import MatchesOverview from '../components/matches-overview'

class JeugdPage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

        <section className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className={'cell large-12 featured-article'}>
              <CardImage
                title="Leerplannen voor de jeugdwerking"
                localFile={data.leerplan}
                link="/news/2019-08-08-leerplan-kcvv-elewijt-jeugd"
                metadata={false}
              />
            </section>
            <section className={'cell large-12 featured-article'}>
              <h2 style={{ marginTop: `${2}rem` }}>Volgende wedstrijden</h2>
              <MatchesOverview
                season="1920"
                regnumber="00055"
                exclude="['2A', '4D']"
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
    leerplan: file(name: { eq: "leerplan_header" }) {
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

export default JeugdPage
