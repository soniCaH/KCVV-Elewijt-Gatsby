import React, { Component } from 'react'
import Layout from '../layouts/components'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

class ComponentsPage extends Component {
  render() {
    const data = this.props.data
    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

        <article className={'player-detail'}>
          <header className={'player-detail__header'}>
            <h1 className={'player-detail__name'}>
              <span className={'player-detail__name-first'}>Matthias</span>
              <span className={'player-detail__name-last'}>Vannieuwenhuyse</span>
            </h1>

            <div className={'player-detail__bg-black-mask'}>
              <div
                className={'player-detail__bg-avatar'}
                style={{
                  backgroundImage:
                    'url(//www.manutd.com/AssetPicker/images/0/0/12/30/794304/De_Gea1558101632154.png)',
                }}
              />
              <div className={'player-detail__bg-gray-mask'} />
            </div>

            <div
              className={'player-detail__bg-shirt-number'}
              aria-hidden="true"
            >
              10
            </div>
          </header>

          <aside className={'player-detail__statistics'}>
            <section className={'player-detail__statistics-item'}>
              <div className={'player-detail__statistics-item__number'}>30</div>
              <div className={'player-detail__statistics-item__label'}>Wedstrijden</div>
            </section>
            <section className={'player-detail__statistics-item'}>
              <div className={'player-detail__statistics-item__number'}>19</div>
              <div className={'player-detail__statistics-item__label'}>Doelpunten</div>
            </section>
            <section className={'player-detail__statistics-item'}>
              <div className={'player-detail__statistics-item__number'}>5</div>
              <div className={'player-detail__statistics-item__label'}>Gele kaarten</div>
            </section>
            <section className={'player-detail__statistics-item'}>
              <div className={'player-detail__statistics-item__number'}>0</div>
              <div className={'player-detail__statistics-item__label'}>Rode kaarten</div>
            </section>
          </aside>

          <div className={"player-break"}></div>

          <section className={"player-detail__data"}>
            <div className={'player-detail__data-item player-detail__data-item--birthdate'}>
              <span className={'player-detail__data-item__label'}>Geboortedatum</span><span className={'player-detail__data-item__data'}>19/11/1986</span>
            </div>
            <div className={'player-detail__data-item player-detail__data-item--position'}>
              <span className={'player-detail__date-item__data'}>Aanvaller</span>
            </div>
            <div className={'player-detail__data-item player-detail__data-item--joindate'}>
              <span className={'player-detail__data-item__label'}>Speler bij KCVV sinds</span><span className={'player-detail__data-item__data'}>01/07/2018</span>
            </div>
          </section>
        </article>
      </Layout>
    )
  }

  componentDidMount() {
    // alert('hey');
  }
}

export default ComponentsPage
