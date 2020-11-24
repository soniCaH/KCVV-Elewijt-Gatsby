import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts/index"

import SEO from "../components/seo"

class MosselfestijnPage extends Component {
  render() {
    const { affiche } = this.props.data
    return (
      <Layout>
        <SEO
          lang="nl-BE"
          title="Sinterklaas Takeaway!"
          description="Sinterklaas Takeaway! - Bestelformulier"
          path={this.props.location.pathname}
        />
        <div className={"limited-width_wrapper"}>
          <header>
            <h1>Sinterklaas Takeaway</h1>
          </header>
          <main>
            <p>
              KCVV Elewijt organiseert een afhaal Sinterklaasmaaltijd op{" "}
              <strong>zaterdag 5 december 2020</strong>.
            </p>

            <p>
              Wachten op de sint zou dit jaar wel eens extra lang kunnen duren,
              maak het jezelf daarom dit jaar extra aangenaam en geniet van een
              heerlijk tapasbordje, pasta naar keuze en een lekker dessert,
              vergezeld van een Zuid-Afrikaans wijntje terwijl de Goedheilig man
              over de daken hobbelt.
            </p>
            <p>
              <strong>Bestellen kan tot en met zondag 29 november 2020</strong>.
            </p>
            <p>
              Opgelet: Je kan een afhaalmoment kiezen bij het bestellen. Betalen
              kan ter plaatste cash of via Payconiq.
            </p>

            <tbkr-bm-widget
              restaurant-id="34742560"
              source="website"
              use-modal="0"
              lang="nl"
              theme="light"
              primary-color="#4b9b48"
              takeaway="1"
            ></tbkr-bm-widget>
            <script src="https://reservations.tablebooker.com/tbkr-widget-import.min.js"></script>

            <Img
              fluid={{
                ...affiche.childImageSharp.fluid,
              }}
              alt="Sinterklaas Takeaway"
            />
          </main>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    affiche: file(name: { eq: "takeaway-affiche" }) {
      ...KCVVFluid960
    }
  }
`

export default MosselfestijnPage
