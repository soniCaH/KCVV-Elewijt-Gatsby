import React, { Component } from 'react'

import Layout from '../layouts/index'

import SEO from '../components/seo'
import HeaderBgTitle from '../components/header-bg-title'

class PageNotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

        <HeaderBgTitle />
      </Layout>
    )
  }
}

export default PageNotFoundPage
