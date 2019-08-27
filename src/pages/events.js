import React, { Component } from 'react'

import Layout from '../layouts/index'

import SEO from '../components/seo'

class EventsPage extends Component {
  render() {
    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

        <div className={'limited-width_wrapper'}>
          <h1>Evenementen</h1>

          Pagina wordt zo snel mogelijk aangevuld.
        </div>
      </Layout>
    )
  }
}

export default EventsPage
