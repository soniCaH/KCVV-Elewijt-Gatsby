import React, { Component } from "react"

import SEO from "../../components/seo"
import Layout from "../../layouts/index"

class ResponsibilitiesPage extends Component {
  render() {
    return (
      <Layout>
        <SEO lang="nl-BE" title="Verantwoordelijkheden" path={this.props.location.pathname} />

        <div className={`limited-width_wrapper`}>
          <h1>Verantwoordelijkheden</h1>
          Pagina wordt zo snel mogelijk aangevuld.
        </div>
      </Layout>
    )
  }
}

export default ResponsibilitiesPage
