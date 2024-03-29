import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { Component } from "react";

import SEO from "../components/seo";
import Layout from "../layouts/index";

class MosselfestijnPage extends Component {
  render() {
    const { affiche } = this.props.data;
    return (
      <Layout>
        <SEO
          lang="nl-BE"
          title="Lunch vd lege portemonnee - Takeaway!"
          description="Lege portemonnee Takeaway! - Bestelformulier"
          path={this.props.location.pathname}
        />
        <div className={`limited-width_wrapper`}>
          <header>
            <h1>Lunch van de lege portemonnee - Takeaway</h1>
          </header>
          <main>
            <h2>Zaterdag 20 februari 2021</h2>
            <p>
              Door de corona-beperkingen wordt de Lunch vd Lege Portemonne
              helaas een Take Away versie. Daarom stellen we een aantal
              gerechten voor, die standaard bij onze Lunch horen en waarvan u
              kan genieten bij een wijntje of drankje bij u thuis.
            </p>

            <p>Op het menu:</p>
            <ul>
              <li>Ajuinsoep met kaas - 1L: 8€ per portie</li>
              <li>Balletjes in tomatensaus met puree: 10€ per portie</li>
              <li>Winterstoemp met spekjes en chipolatta: 11€ per portie</li>
              <li>Witloof in den oven met puree: 12€ per portie</li>
              <li>Dessert - chocomousse of pannenkoeken met suiker (2): 5€</li>
            </ul>
            <p>
              <strong>
                Bestellen kan tot en met woensdag 17 februari 2021!
              </strong>
            </p>
            <p>
              Opgelet: Je kan een afhaalmoment kiezen bij het bestellen (16:00 -
              20:00). Betalen kan ter plaatse cash (liefst gepast).
            </p>

            <p>
              Wie bijkomende vragen heeft kan terecht op
              evenementen@kcvvelewijt.be.
              <br />
              Alvast bedankt! En graag tot in 2022 voor opnieuw een face-to-face
              versie van deze Lunch vd Leige Portemonnee!
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

            <GatsbyImage
              image={{
                ...affiche.childImageSharp.gatsbyImageData,
              }}
              alt="Sinterklaas Takeaway"
            />
          </main>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    affiche: file(name: { eq: "takeaway-lunch" }) {
      ...KCVVFluid960
    }
  }
`;

export default MosselfestijnPage;
