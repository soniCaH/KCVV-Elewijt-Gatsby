import React, { Component } from 'react'
import Layout from '../layouts/components'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import playerProfile from '../images/kcvv-player-bg.png'

class ComponentsPage extends Component {
  render() {
    const data = this.props.data
    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

        <h2 className={'component_header'}>Player detail page</h2>

        <article className={'player-detail'}>
          <header className={'player-detail__header'}>
            <h1 className={'player-detail__name'}>
              <span className={'player-detail__name-first'}>Matthias</span>
              <span className={'player-detail__name-last'}>
                Vannieuwenhuyse
              </span>
            </h1>

            <div className={'bg-green-mask'}>
              <div
                className={'player-detail__bg-avatar'}
                style={{ backgroundImage: `url(${playerProfile})` }}
              />
              <div className={'bg-white-end'} />
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
              <div className={'player-detail__statistics-item__label'}>
                Wedstrijden
              </div>
            </section>
            <section className={'player-detail__statistics-item'}>
              <div className={'player-detail__statistics-item__number'}>19</div>
              <div className={'player-detail__statistics-item__label'}>
                Doelpunten
              </div>
            </section>
            <section className={'player-detail__statistics-item'}>
              <div className={'player-detail__statistics-item__number'}>5</div>
              <div className={'player-detail__statistics-item__label'}>
                Gele kaarten
              </div>
            </section>
            <section className={'player-detail__statistics-item'}>
              <div className={'player-detail__statistics-item__number'}>0</div>
              <div className={'player-detail__statistics-item__label'}>
                Rode kaarten
              </div>
            </section>
          </aside>

          <div className={'player-break'}></div>

          <section className={'player-detail__data'}>
            <div
              className={
                'player-detail__data-item player-detail__data-item--birthdate'
              }
            >
              <span className={'player-detail__data-item__label'}>
                Geboortedatum
              </span>
              <span className={'player-detail__data-item__data'}>
                19/11/1986
              </span>
            </div>
            <div
              className={
                'player-detail__data-item player-detail__data-item--position'
              }
            >
              <span className={'player-detail__date-item__data'}>
                Aanvaller
              </span>
            </div>
            <div
              className={
                'player-detail__data-item player-detail__data-item--joindate'
              }
            >
              <span className={'player-detail__data-item__label'}>
                Speler bij KCVV sinds
              </span>
              <span className={'player-detail__data-item__data'}>
                01/07/2018
              </span>
            </div>
          </section>
        </article>

        <h2 className={'component_header'}>Coach detail page</h2>

        <article className={'player-detail'}>
          <header className={'player-detail__header'}>
            <h1 className={'player-detail__name'}>
              <span className={'player-detail__name-first'}>Wim</span>
              <span className={'player-detail__name-last'}>D'Hondt</span>
            </h1>

            <div className={'bg-green-mask'}>
              <div
                className={'player-detail__bg-avatar'}
                style={{ backgroundImage: `url(${playerProfile})` }}
              />
              <div className={'bg-white-end'} />
            </div>

            <div
              className={'player-detail__bg-shirt-number'}
              aria-hidden="true"
            >
              T1
            </div>
          </header>

          <aside className={'player-detail__statistics'}></aside>

          <div className={'player-break'}></div>

          <section className={'player-detail__data'}>
            <div
              className={
                'player-detail__data-item player-detail__data-item--birthdate'
              }
            >
              <span className={'player-detail__data-item__label'}>
                Geboortedatum
              </span>
              <span className={'player-detail__data-item__data'}>
                19/11/1986
              </span>
            </div>
            <div
              className={
                'player-detail__data-item player-detail__data-item--position'
              }
            >
              <span className={'player-detail__date-item__data'}>
                Coach A-ploeg
              </span>
            </div>
            <div
              className={
                'player-detail__data-item player-detail__data-item--joindate'
              }
            >
              <span className={'player-detail__data-item__label'}>
                Aangesloten bij KCVV sinds
              </span>
              <span className={'player-detail__data-item__data'}>
                01/07/2017
              </span>
            </div>
          </section>
        </article>

        <h2 className={'component_header'}>Player highlight -- LARGE</h2>

        <div className={' player-highlight--large'}>
          <article className={'player-highlight'}>
            <section className={'player-highlight__header'}>
              <section
                className={'player-highlight__image'}
                style={{ backgroundImage: `url(${playerProfile})` }}
              ></section>
              <section className={'player-highlight__bg'}></section>
            </section>

            <section className={'player-highlight__main'}>
              <div className={'player-highlight__name'}>
                <div
                  className={'player-highlight__name-shirt-number'}
                  aria-hidden="true"
                >
                  10
                </div>
                <div
                  className={'player-highlight__name-name'}
                  aria-hidden="true"
                >
                  <div className={'player-highlight__name-name--first'}>
                    Matthias
                  </div>
                  <div className={'player-highlight__name-name--last'}>
                    Vannieuwenhuyse
                  </div>
                </div>
              </div>
              <aside className={'player-highlight__stats'}>
                <section className={'player-highlight__stats-item'}>
                  <div className={'player-highlight__stats-item__number'}>
                    30
                  </div>
                  <div className={'player-highlight__stats-item__label'}>
                    Wedstrijden
                  </div>
                </section>
                <section className={'player-highlight__stats-item'}>
                  <div className={'player-highlight__stats-item__number'}>
                    19
                  </div>
                  <div className={'player-highlight__stats-item__label'}>
                    Doelpunten
                  </div>
                </section>
                <section className={'player-highlight__stats-item'}>
                  <div className={'player-highlight__stats-item__number'}>
                    5
                  </div>
                  <div className={'player-highlight__stats-item__label'}>
                    Gele kaarten
                  </div>
                </section>
                <section className={'player-highlight__stats-item'}>
                  <div className={'player-highlight__stats-item__number'}>
                    0
                  </div>
                  <div className={'player-highlight__stats-item__label'}>
                    Rode kaarten
                  </div>
                </section>
              </aside>
            </section>
          </article>
        </div>

        <h2 className={'component_header'}>Player highlight -- SMALL</h2>

        <div style={{ maxWidth: 500 + 'px', margin: 0 + ' auto' }}>
          <article className={'player-highlight'}>
            <section className={'player-highlight__header'}>
              <section
                className={'player-highlight__image'}
                style={{ backgroundImage: `url(${playerProfile})` }}
              ></section>
              <section className={'player-highlight__bg'}></section>
            </section>

            <section className={'player-highlight__main'}>
              <div className={'player-highlight__name'}>
                <div
                  className={'player-highlight__name-shirt-number'}
                  aria-hidden="true"
                >
                  10
                </div>
                <div
                  className={'player-highlight__name-name'}
                  aria-hidden="true"
                >
                  <div className={'player-highlight__name-name--first'}>
                    Matthias
                  </div>
                  <div className={'player-highlight__name-name--last'}>
                    Vannieuwenhuyse
                  </div>
                </div>
              </div>
              <aside className={'player-highlight__stats'}>
                <section className={'player-highlight__stats-item'}>
                  <div className={'player-highlight__stats-item__number'}>
                    30
                  </div>
                  <div className={'player-highlight__stats-item__label'}>
                    Wedstrijden
                  </div>
                </section>
                <section className={'player-highlight__stats-item'}>
                  <div className={'player-highlight__stats-item__number'}>
                    19
                  </div>
                  <div className={'player-highlight__stats-item__label'}>
                    Doelpunten
                  </div>
                </section>
                <section className={'player-highlight__stats-item'}>
                  <div className={'player-highlight__stats-item__number'}>
                    5
                  </div>
                  <div className={'player-highlight__stats-item__label'}>
                    Gele kaarten
                  </div>
                </section>
                <section className={'player-highlight__stats-item'}>
                  <div className={'player-highlight__stats-item__number'}>
                    0
                  </div>
                  <div className={'player-highlight__stats-item__label'}>
                    Rode kaarten
                  </div>
                </section>
              </aside>
            </section>
          </article>
        </div>

        <h2 className={'component_header'}>Keeper highlight</h2>

        <div className={' player-highlight--large'}>
          <article className={'player-highlight'}>
            <section className={'player-highlight__header'}>
              <section
                className={'player-highlight__image'}
                style={{ backgroundImage: `url(${playerProfile})` }}
              ></section>
              <section className={'player-highlight__bg'}></section>
            </section>

            <section className={'player-highlight__main'}>
              <div className={'player-highlight__name'}>
                <div
                  className={'player-highlight__name-shirt-number'}
                  aria-hidden="true"
                >
                  1
                </div>
                <div
                  className={'player-highlight__name-name'}
                  aria-hidden="true"
                >
                  <div className={'player-highlight__name-name--first'}>
                    Ken
                  </div>
                  <div className={'player-highlight__name-name--last'}>
                    Vanhalle
                  </div>
                </div>
              </div>
              <aside className={'player-highlight__stats'}>
                <section className={'player-highlight__stats-item'}>
                  <div className={'player-highlight__stats-item__number'}>
                    30
                  </div>
                  <div className={'player-highlight__stats-item__label'}>
                    Wedstrijden
                  </div>
                </section>
                <section className={'player-highlight__stats-item'}>
                  <div className={'player-highlight__stats-item__number'}>
                    15
                  </div>
                  <div className={'player-highlight__stats-item__label'}>
                    Cleansheets
                  </div>
                </section>
                <section className={'player-highlight__stats-item'}>
                  <div className={'player-highlight__stats-item__number'}>
                    2
                  </div>
                  <div className={'player-highlight__stats-item__label'}>
                    Gele kaarten
                  </div>
                </section>
                <section className={'player-highlight__stats-item'}>
                  <div className={'player-highlight__stats-item__number'}>
                    0
                  </div>
                  <div className={'player-highlight__stats-item__label'}>
                    Rode kaarten
                  </div>
                </section>
              </aside>
            </section>
          </article>
        </div>

        <h2 className={'component_header'}>Team presentation</h2>

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
            <ul className={"tabs team-sub_navigation__tabs "} data-tabs id="team-subnavigation_tabs">
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
                            <img src={playerProfile} alt="Profile" />
                            <div
                              className={'team-detail__lineup-gradient'}
                            ></div>
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
                            <div
                              className={'team-detail__lineup-info__lastname'}
                            >
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
                            <img src={playerProfile} alt="Profile" />
                            <div
                              className={'team-detail__lineup-gradient'}
                            ></div>
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
                            <div
                              className={'team-detail__lineup-info__lastname'}
                            >
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
                            <img src={playerProfile} alt="Profile" />
                            <div
                              className={'team-detail__lineup-gradient'}
                            ></div>
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
                            <div
                              className={'team-detail__lineup-info__lastname'}
                            >
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
                            <img src={playerProfile} alt="Profile" />
                            <div
                              className={'team-detail__lineup-gradient'}
                            ></div>
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
                            <div
                              className={'team-detail__lineup-info__lastname'}
                            >
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
                            <img src={playerProfile} alt="Profile" />
                            <div
                              className={'team-detail__lineup-gradient'}
                            ></div>
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
                            <div
                              className={'team-detail__lineup-info__lastname'}
                            >
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
                            <img src={playerProfile} alt="Profile" />
                            <div
                              className={'team-detail__lineup-gradient'}
                            ></div>
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
                            <div
                              className={'team-detail__lineup-info__lastname'}
                            >
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
                            <img src={playerProfile} alt="Profile" />
                            <div
                              className={'team-detail__lineup-gradient'}
                            ></div>
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
                            <div
                              className={'team-detail__lineup-info__lastname'}
                            >
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

  componentDidMount() {
    // alert('hey');
  }
}

export default ComponentsPage
