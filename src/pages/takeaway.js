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
          </main>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    affiche: file(name: { eq: "mossel2020-affiche" }) {
      ...KCVVFluid960
    }
  }
`

export default MosselfestijnPage
