import React, { Component } from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../layouts/index"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class SpaghettiPage extends Component {
  render() {
    const { affiche } = this.props.data
    return (
      <Layout>
        <SEO
          lang="nl-BE"
          title="Spaghettislag Ultra's 55"
          description="Spaghettislag Ultra's 55"
          path={this.props.location.pathname}
        />
        <div className={`limited-width_wrapper`}>
          <header>
            <h1>Spaghettislag ULTRA'S 55</h1>
            <h2>Supportersclub KCVV Elewijt</h2>
          </header>
          <main>
            <p>Op zondag 3 oktober 2021 organiseert de supportersclub "Ultra's 55" zijn eerste spaghettislag.</p>
            <p>
              Kom tussen 11:00 en 13:30 smullen van onze heerlijke spaghetti bolognese in de kantine van KCVV Elewijt.
            </p>
            <p>Prijs is 10 euro voor volwassenen en 7 euro voor een kinderportie.</p>
            <p>
              Vooraf en nadien spelen onze drie seniorploegen hun competitiewedstrijd thuis:
              <ul>
                <li>10:15 - Zondagsreserven vs FC Ramsdonk</li>
                <li>14:00 - KCVV Elewijt B vs VC Groot-Dilbeek B</li>
                <li>15:00 - KCVV Elewijt A vs KFC Baal</li>
              </ul>
            </p>
            <p>Inschrijven kan, maar is niet verplicht:</p>
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
              alt="Spaghettislag KCVV Ultra's 55"
            />
          </footer>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    affiche: file(name: { eq: "spaghetti" }) {
      ...KCVVFullWidth
    }
  }
`

export default SpaghettiPage
