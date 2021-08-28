import React, { Component } from "react"

import Layout from "../layouts/index"
import SEO from "../components/seo"

import MatchesScheurkalenderOverview from "../components/MatchesScheurkalender"

class ScheurkalenderPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          lang="nl-BE"
          title="Matchoverzicht voorbereiding"
          description="Overzicht van alle wedstrijden voor de scheurkalender"
          path="scheurkalender"
        />
        <div className={`games__template scheurkalender__template`}>
          <MatchesScheurkalenderOverview />
        </div>
      </Layout>
    )
  }
}

export default ScheurkalenderPage
