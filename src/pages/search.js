import React, { Component } from "react"

import Layout from "../layouts/index"

import SEO from "../components/seo"
import SearchLegacy from "../components/search-container"
import Search from "../components/Search"

class SearchPage extends Component {
  render() {
    return (
      <Layout>
        <SEO lang="nl-BE" title="Zoeken" description="Zoekpagina KCVV Elewijt" path={this.props.location.pathname} />

        <div className={`limited-width_wrapper`}>
          <h1>Zoeken</h1>

          {/* <SearchLegacy /> */}
          <Search />
        </div>
      </Layout>
    )
  }
}

export default SearchPage
