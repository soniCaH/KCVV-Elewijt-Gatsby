import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/index'
import SEO from '../components/seo'

import './team.scss'

const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key]
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
    return objectsByKeyValue
  }, {})
const groupByPosition = groupBy('field_position')

export default ({ data }) => {
  const node = data.nodeTeam

  const playersByPosition = groupByPosition(node.relationships.field_players)

  console.log(playersByPosition)

  return (
    <Layout>
      <SEO lang="nl-BE" title={node.title} />

      <article className={'team-detail'}>
        <header className={'team-detail__header'}>
          <h1 className={'team-detail__name'}>
            <span className={'team-detail__name-division'}>
              2e provinciale A
            </span>
            <span className={'team-detail__name-tagline'}>The A Team</span>
          </h1>

          <div className={'bg-green-mask'}>
            <div className={'bg-white-end'} />
          </div>

          <div className={'team-detail__division-number'} aria-hidden="true">
            2A
          </div>
        </header>

        <div className={'team-break'}></div>

        <section className={'team-sub_navigation'}>
          <ul
            className={'tabs team-sub_navigation__tabs '}
            data-tabs
            id="team-subnavigation_tabs"
          >
            <li class="tabs-title is-active">
              <a href="#team-lineup" aria-selected="true">
                Lineup
              </a>
            </li>
            <li class="tabs-title">
              <a data-tabs-target="team-matches" href="#team-matches">
                Wedstrijden
              </a>
            </li>
            <li class="tabs-title">
              <a data-tabs-target="team-ranking" href="#team-ranking">
                Stand
              </a>
            </li>
          </ul>
        </section>

        <div class="tabs-content" data-tabs-content="team-subnavigation_tabs">
          <div class="tabs-panel is-active" id="team-lineup">
            <main className={'team-detail__lineup'}>
              <section className={'team-detail__lineup-section'}>
                <h2>Staff</h2>
                <ul>
                  <li className={'team-detail__lineup-item'}>
                    <article className={'team-detail__lineup-teaser'}>
                      <a href="#">
                        <div className={'team-detail__lineup-image'}>
                          <div className={'team-detail__lineup-gradient'}></div>
                        </div>
                        <div className={'team-detail__lineup-info'}>
                          <div className={'team-detail__lineup-info__number'}>
                            T1
                          </div>
                          <div
                            className={'team-detail__lineup-info__firstname'}
                          >
                            Wim
                          </div>
                          <div className={'team-detail__lineup-info__lastname'}>
                            D'Hondt
                          </div>
                        </div>
                      </a>
                    </article>
                  </li>
                  <li className={'team-detail__lineup-item'}>
                    <article className={'team-detail__lineup-teaser'}>
                      <a href="#">
                        <div className={'team-detail__lineup-image'}>
                          <div className={'team-detail__lineup-gradient'}></div>
                        </div>
                        <div className={'team-detail__lineup-info'}>
                          <div className={'team-detail__lineup-info__number'}>
                            T2
                          </div>
                          <div
                            className={'team-detail__lineup-info__firstname'}
                          >
                            Kevin
                          </div>
                          <div className={'team-detail__lineup-info__lastname'}>
                            Spiessens
                          </div>
                        </div>
                      </a>
                    </article>
                  </li>
                  <li className={'team-detail__lineup-item'}>
                    <article className={'team-detail__lineup-teaser'}>
                      <a href="#">
                        <div className={'team-detail__lineup-image'}>
                          <div className={'team-detail__lineup-gradient'}></div>
                        </div>
                        <div className={'team-detail__lineup-info'}>
                          <div className={'team-detail__lineup-info__number'}>
                            TK
                          </div>
                          <div
                            className={'team-detail__lineup-info__firstname'}
                          >
                            Luc
                          </div>
                          <div className={'team-detail__lineup-info__lastname'}>
                            Usewils
                          </div>
                        </div>
                      </a>
                    </article>
                  </li>
                  <li className={'team-detail__lineup-item'}>
                    <article className={'team-detail__lineup-teaser'}>
                      <a href="#">
                        <div className={'team-detail__lineup-image'}>
                          <div className={'team-detail__lineup-gradient'}></div>
                        </div>
                        <div className={'team-detail__lineup-info'}>
                          <div className={'team-detail__lineup-info__number'}>
                            Afgevaardigde
                          </div>
                          <div
                            className={'team-detail__lineup-info__firstname'}
                          >
                            Stefan
                          </div>
                          <div className={'team-detail__lineup-info__lastname'}>
                            Robberechts
                          </div>
                        </div>
                      </a>
                    </article>
                  </li>
                </ul>
              </section>
              <section className={'team-detail__lineup-section'}>
                <h2>Doelmannen</h2>
                <ul>
                  <li className={'team-detail__lineup-item'}>
                    <article className={'team-detail__lineup-teaser'}>
                      <a href="#">
                        <div className={'team-detail__lineup-image'}>
                          <div className={'team-detail__lineup-gradient'}></div>
                        </div>
                        <div className={'team-detail__lineup-info'}>
                          <div className={'team-detail__lineup-info__number'}>
                            1
                          </div>
                          <div
                            className={'team-detail__lineup-info__firstname'}
                          >
                            Ken
                          </div>
                          <div className={'team-detail__lineup-info__lastname'}>
                            Vanhalle
                          </div>
                        </div>
                      </a>
                    </article>
                  </li>
                  <li className={'team-detail__lineup-item'}>
                    <article className={'team-detail__lineup-teaser'}>
                      <a href="#">
                        <div className={'team-detail__lineup-image'}>
                          <div className={'team-detail__lineup-gradient'}></div>
                        </div>
                        <div className={'team-detail__lineup-info'}>
                          <div className={'team-detail__lineup-info__number'}>
                            12
                          </div>
                          <div
                            className={'team-detail__lineup-info__firstname'}
                          >
                            Mick
                          </div>
                          <div className={'team-detail__lineup-info__lastname'}>
                            Devoster
                          </div>
                        </div>
                      </a>
                    </article>
                  </li>
                  <li className={'team-detail__lineup-item'}>
                    <article className={'team-detail__lineup-teaser'}>
                      <a href="#">
                        <div className={'team-detail__lineup-image'}>
                          <div className={'team-detail__lineup-gradient'}></div>
                        </div>
                        <div className={'team-detail__lineup-info'}>
                          <div className={'team-detail__lineup-info__number'}>
                            22
                          </div>
                          <div
                            className={'team-detail__lineup-info__firstname'}
                          >
                            Joeri
                          </div>
                          <div className={'team-detail__lineup-info__lastname'}>
                            Bonsels
                          </div>
                        </div>
                      </a>
                    </article>
                  </li>
                </ul>
              </section>
              <section className={'team-detail__lineup-section'}>
                <h2>Verdedigers</h2>
              </section>
              <section className={'team-detail__lineup-section'}>
                <h2>Middenvelders</h2>
              </section>
              <section className={'team-detail__lineup-section'}>
                <h2>Aanvallers</h2>
              </section>
            </main>
          </div>
          <div class="tabs-panel" id="team-matches">
            GAMES
          </div>
          <div class="tabs-panel" id="team-ranking">
            RANKING
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    nodeTeam(path: { alias: { eq: $slug } }) {
      path {
        alias
      }
      title
      relationships {
        field_players {
          path {
            alias
          }
          field_shirtnumber
          title
          field_position
          relationships {
            field_image {
              localFile {
                url
              }
            }
          }
        }
      }
    }
  }
`
