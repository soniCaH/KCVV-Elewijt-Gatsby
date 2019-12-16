import React, { Component } from 'react'
import { Link } from 'gatsby'

import './player--featured.scss'

/**
 */
class PlayerFeatured extends Component {
  render() {
    const { player } = this.props

    return (
      <article className={'player--featured'}>
        <header className={'player--featured__header'}>
          <div className={'bg-green-mask--horizontal'}>
            <div
              className={'player--featured__bg-avatar'}
              style={
                player.relationships.field_image && {
                  backgroundImage: `url(${player.relationships.field_image.localFile.url})`,
                }
              }
            />
            <div className={'bg-white-end'} />
          </div>
        </header>

        <section className={'player--featured__content'}>
          <div className={'player--featured__name__wrapper'}>
            <h1 className={'player--featured__name'}>
              <span className={'player--featured__name-first'}>
                {player.field_firstname}
              </span>
              <span className={'player--featured__name-last'}>
                {player.field_lastname}
              </span>
            </h1>
            <div
              className={'player--featured__bg-shirt-number'}
              aria-hidden="true"
            >
              {player.field_shirtnumber || ''}
            </div>
          </div>
          <aside className={'player--featured__statistics'}>
            <section className={'player--featured__statistics-item'}>
              <div className={'player--featured__statistics-item__number'}>
                {player.field_stats_games || '0'}
              </div>
              <div className={'player--featured__statistics-item__label'}>
                Wedstrijden
              </div>
            </section>

            {player.field_position === 'k' && (
              <section className={'player--featured__statistics-item'}>
                <div className={'player--featured__statistics-item__number'}>
                  {player.field_stats_cleansheets || '0'}
                </div>
                <div className={'player--featured__statistics-item__label'}>
                  Cleansheets
                </div>
              </section>
            )}
            {player.field_position !== 'k' && (
              <section className={'player--featured__statistics-item'}>
                <div className={'player--featured__statistics-item__number'}>
                  {player.field_stats_goals || '0'}
                </div>
                <div className={'player--featured__statistics-item__label'}>
                  Doelpunten
                </div>
              </section>
            )}
            <section
              className={
                'player--featured__statistics-item player--featured__statistics-item--cards'
              }
            >
              <div className={'player--featured__statistics-item__number'}>
                {player.field_stats_cards_yellow || '0'}
              </div>
              <div className={'player--featured__statistics-item__label'}>
                <span className={'stats__card stats__card--yellow'}></span>
              </div>
            </section>
            <section
              className={
                'player--featured__statistics-item player--featured__statistics-item--cards'
              }
            >
              <div className={'player--featured__statistics-item__number'}>
                {player.field_stats_cards_red || '0'}
              </div>
              <div className={'player--featured__statistics-item__label'}>
                <span className={'stats__card stats__card--red'}></span>
              </div>
            </section>
          </aside>
          {player.path && (
            <footer className={'player--featured__footer'}>
              <Link to={player.path.alias}>
                Meer over {player.field_firstname} &raquo;
              </Link>
            </footer>
          )}
        </section>
      </article>
    )
  }
}

export default PlayerFeatured
