import React, { Component } from "react"

import Layout from "../layouts/index"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

class BBQPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          lang="nl-BE"
          title="BBQ - Inschrijvinsformulier"
          description="BBQ - Inschrijvinsformulier"
          path={this.props.location.pathname}
        />
        <div className={`limited-width_wrapper`}>
          <header>
            <h1>Winterbarbecue - Inschrijving</h1>
          </header>
          <main>
            <h2>Zaterdag 4 december 2021 // 18:30</h2>
            <p>De jeugd van KCVV Elewijt presenteert zijn jaarlijkse winterbarbecue</p>
            <p>Voor de prijs van 25 euro per volwassene en 15 euro per kind kan je genieten van</p>
            <ol>
              <li>3 stukken vlees (kinderen 2 stukken)</li>
              <li>Saladbar</li>
              <li>Pasta</li>
              <li>Sauzen</li>
              <li>Brood</li>
            </ol>
            <p>
              Door de geldende Corona-maatregelen is het verplicht om op voorhand een tafel met je bubbel/gezin te
              reserveren.
            </p>

            <tbkr-bm-widget
              restaurant-id="34742560"
              source="website"
              use-modal="0"
              lang="nl"
              theme="light"
              primary-color="#4b9b48"
              takeaway="0"
            ></tbkr-bm-widget>
            <script src="https://reservations.tablebooker.com/tbkr-widget-import.min.js"></script>

            <StaticImage src="../images/bbq2021.jpg" alt="Barbecue 2021" placeholder="blurred" />
          </main>
        </div>
      </Layout>
    )
  }
}

export default BBQPage
