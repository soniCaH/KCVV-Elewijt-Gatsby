import React, { Component } from 'react'

import Layout from '../layouts/index'

import SEO from '../components/seo'

class SponsorsPage extends Component {
  render() {
    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />
        <div className={'sponsors-overview__wrapper'}>
            Overzicht van sponsors wordt zo snel mogelijk toegevoegd.
        </div>
      </Layout>
    )
  }
}

export default SponsorsPage
