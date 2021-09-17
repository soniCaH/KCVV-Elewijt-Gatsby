import React, { Component } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../layouts/index"

import SEO from "../components/seo"

class SpaghettiPage extends Component {
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
        <div className={"limited-width_wrapper"}>
          <header>
            <h1>Spaghettislag ULTRA'S 55</h1>
            <h2>Supportersclub KCVV Elewijt</h2>
          </header>
          <main>
            <p>Lalala tekst enz...</p>
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
