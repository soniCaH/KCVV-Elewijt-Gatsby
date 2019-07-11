import React, { Component } from 'react'

import Layout from '../layouts/index'

import SEO from '../components/seo'

class PageNotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

        <article>
          Deze site is nog volop in opbouw. <br />
          De pagina die u zocht is wellicht nog niet ontwikkeld.
        </article>
      </Layout>
    )
  }
}

export default PageNotFoundPage
