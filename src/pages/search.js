import React, { Component } from 'react'

import Layout from '../layouts/index'

import SEO from '../components/seo'
import Search from '../components/search-container';

class SearchPage extends Component {
  render() {
    return (
      <Layout>
        <SEO lang="nl-BE" title="Zoeken" />

        <div className={'limited-width_wrapper'}>
          <h1>Zoeken</h1>

          <Search />
        </div>
      </Layout>
    )
  }
}

export default SearchPage
