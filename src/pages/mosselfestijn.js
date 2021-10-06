import React, { Component } from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class MosselfestijnPage extends Component {
  render() {
    const { affiche } = this.props.data
    return (
      <Layout>
        <SEO
          lang="nl-BE"
          title="Mosselfestijn reservaties"
          description="Mosselfestijn 2020 - Inschrijvingen"
          path={this.props.location.pathname}
        />
        <div className={`limited-width_wrapper`}>
          <header>
            <h1>Mosselfestijn</h1>
          </header>
          <main>
            <p>
              Op vrijdag 10, zaterdag 11 en zondag 12 september 2021 vindt ons jaarlijkse Mosselfestijn weer plaats. Om
              de spreiding te kunnen garanderen en wachttijden aan de ingang zoveel mogelijk te beperken werken we dit
              jaar met een reservatiesysteem. Hieronder kan je zelf jouw gewenste tijdstip en gezelschap selecteren en
              een tafel boeken (voor 08/09/2021).
            </p>
            <p>
              Telefonisch reserveren kan dagelijks tussen 18u en 21u op het nummer{` `}
              <a href="tel:+32475981611" className="rich-link">
                0475/98.16.11
              </a>
              .
            </p>
            <p>
              Ter plaatse een tafel vragen kan, naargelang de beschikbaarheid op dat moment, maar hou er rekening mee
              dat we onze capaciteit hebben moeten verlagen om aan de regelgeving te kunnen voldoen. Wie zeker wil zijn
              van zijn plek kan beter reserveren.
            </p>
            <tbkr-bm-widget
              restaurant-id="34742560"
              source="website"
              use-modal="0"
              lang="nl"
              theme="light"
            ></tbkr-bm-widget>
            <script src="https://reservations.tablebooker.com/tbkr-widget-import.min.js"></script>
          </main>
          <footer>
            <GatsbyImage
              image={{
                ...affiche.childImageSharp.gatsbyImageData,
              }}
              alt="Mosselfestijn 2021"
            />
          </footer>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    affiche: file(name: { eq: "mossel2021-affiche" }) {
      ...KCVVFullWidth
    }
  }
`

export default MosselfestijnPage
