import React, { Component } from 'react'

import Layout from '../../layouts/index'

import SEO from '../../components/seo'
import PlayerFeatured from '../../components/player--featured'

class DesignPage extends Component {
  render() {
    const player1 = {
      field_firstname: 'Nick',
      field_lastname: 'De Letter',
      field_shirtnumber: 11,
      field_stats_games: 11,
      field_position: 'a',
      field_stats_cleansheets: 0,
      field_stats_goals: 2,
      field_stats_cards_yellow: 2,
      field_stats_cards_red: 0,
      relationships: {
        field_image: null,
      },
    }

    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

        <section className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className={'cell large-8 featured-article card'}>
              <header className={'card__header'}><h4>Speler van de week</h4></header>
              <section className={''}><PlayerFeatured player={player1} /></section>
            </section>
            <section className={'cell large-4 featured-article card'}>
            <header className={'card__header'}><h4>Speler van de week</h4></header>
              <section className={''}><PlayerFeatured player={player1} /></section>
            </section>
          </div>
        </section>
      </Layout>
    )
  }
}

export default DesignPage
