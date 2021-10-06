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
            <h1>Seizoensbarbecue - Inschrijving</h1>
          </header>
          <main>
            <h2>Zaterdag 31 juli 2021</h2>
            <p>Op zaterdag 31 juli 2021 starten we het nieuwe seizoen op met onze jaarlijkse seizoensbarbecue!</p>
            <p>
              Vanaf 18:00 wordt het aperitief aangeboden en de barbecue aangestoken. Om 20:15 is er ook de mogelijkheid
              om de nieuwe kern van de A-ploeg aan het werk te zien. Zij spelen dan een oefenwedstrijd tegen
              eersteprovincialer H.O. Veltem.
            </p>
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
