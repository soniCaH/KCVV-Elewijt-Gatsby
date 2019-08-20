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
          </div>
        </section>
      </Layout>
    )
  }

  componentDidMount() {
    // alert('hey');
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
          # originalImg
          # originalName
          # presentationWidth
          # presentationHeight
        }
      }
    }
  }
`

export default JeugdPage
