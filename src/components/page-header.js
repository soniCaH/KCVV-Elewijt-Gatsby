import React, { Component } from 'react'

import './page-header.scss'
import logo from '../images/logo-flat.png'

class PageHeader extends Component {
  render() {
    return (
      // <!-- START STICKY CONTAINER --> //
      <header data-sticky-container className="l--header">
        {/* <!-- START STICKY INNER --> */}
        <div data-sticky data-options="marginTop:0;">
          {/* <!-- START MOBILE NAV BAR --> */}
          <div
            className="header--mobile"
            data-responsive-toggle="responsive-menu"
            data-hide-for="large"
          >
            <button
              type="button"
              className="menu-icon"
              data-toggle="responsiveNavigation"
            />
            <div className="header-mobile__logo">
              <a href="index.html">
                <img
                  src={logo}
                  alt="KCVV Elewijt"
                  className="header-mobile__logo-img"
                />
              </a>
            </div>
          </div>
          {/* <!-- END MOBILE NAV BAR --> */}

          {/* <!-- START DESKTOP NAV BAR --> */}
          <div className="header--desktop">
            <div className="header__secondary show-for-large">
              <div className="grid-container">
                <div className="grid-x">
                  <div className="medium-4 medium-offset-8">
                    <div className="sponsors--header">
                      <img
                        src="http://lorempixel.com/g/410/100/"
                        alt="Bauvall Trans"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__primary show-for-large">
              <div className="grid-container">
                <div className="header__primary-inner">
                  {/* LOGO */}
                  <div className="header-logo">
                    <a href="index.html">
                      <img
                        src={logo}
                        alt="KCVV Elewijt"
                        className="header__logo-img"
                      />
                    </a>
                  </div>
                  <nav className="main-nav">
                    <ul
                      className="main-nav__list--desktop menu dropdown"
                      data-dropdown-menu
                    >
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="index.html">Nieuws</a>
                      </li>
                      <li>
                        <a href="index.html">Evenementen</a>
                      </li>
                      <li>
                        <a href="index.html" className="active">
                          A-Ploeg
                        </a>
                        <ul className="vertical menu is-active">
                          <li>
                            <a href="index.html" className="active">
                              Wedstrijden
                            </a>
                          </li>
                          <li>
                            <a href="index.html">Ranking</a>
                          </li>
                          <li>
                            <a href="index.html">Staff</a>
                          </li>
                          <li>
                            <a href="index.html">Spelers</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="index.html">B-ploeg</a>
                        <ul className="vertical menu">
                          <li>
                            <a href="index.html">Wedstrijden</a>
                          </li>
                          <li>
                            <a href="index.html">Ranking</a>
                          </li>
                          <li>
                            <a href="index.html">Staff</a>
                          </li>
                          <li>
                            <a href="index.html">Spelers</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="index.html">Jeugd</a>
                        <ul className="vertical menu submenu">
                          <li>
                            <a href="index.html">U13</a>
                          </li>
                          <li>
                            <a href="index.html">U11</a>
                          </li>
                          <li>
                            <a href="index.html">U10</a>
                          </li>
                          <li>
                            <a href="index.html">U9</a>
                          </li>
                          <li>
                            <a href="index.html">U8</a>
                          </li>
                          <li>
                            <a href="index.html">U7</a>
                          </li>
                          <li>
                            <a href="index.html">U6</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="index.html">Sponsors</a>
                      </li>
                      <li>
                        <a href="index.html">De club</a>
                        <ul className="vertical menu submenu">
                          <li>
                            <a href="index.html">Geschiedenis</a>
                          </li>
                          <li>
                            <a href="index.html">Verantwoordelijkheden</a>
                          </li>
                          <li>
                            <a href="index.html">Contact</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END DESKTOP NAV BAR --> */}

        {/* <!-- END STICKY INNER --> */}
      </header>
      // <!-- END STICKY CONTAINER --> //
    )
  }
}

export class PageHeaderMobile extends Component {
  render() {
    return (
      <nav
        className="off-canvas position-left"
        id="responsiveNavigation"
        data-off-canvas
      >
        <ul
          className="main-nav__list vertical menu"
          data-responsive-menu="accordion large-dropdown"
        >
          <div className="header-mobile__logo">
            <button aria-label="Close menu" type="button" data-toggle="">
              <span aria-hidden="true" className="button--back" />
            </button>

            <a href="index.html">
              <img
                src={logo}
                alt="KCVV Elewijt"
                className="header-mobile__logo-img"
              />
            </a>
          </div>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html">Nieuws</a>
          </li>
          <li>
            <a href="index.html">Evenementen</a>
          </li>
          <li>
            <a href="index.html" className="active">
              A-Ploeg
            </a>
            <ul className="vertical menu is-active">
              <li>
                <a href="index.html" className="active">
                  Wedstrijden
                </a>
              </li>
              <li>
                <a href="index.html">Ranking</a>
              </li>
              <li>
                <a href="index.html">Staff</a>
              </li>
              <li>
                <a href="index.html">Spelers</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="index.html">B-ploeg</a>
            <ul className="vertical menu">
              <li>
                <a href="index.html">Wedstrijden</a>
              </li>
              <li>
                <a href="index.html">Ranking</a>
              </li>
              <li>
                <a href="index.html">Staff</a>
              </li>
              <li>
                <a href="index.html">Spelers</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="index.html">Jeugd</a>
            <ul className="vertical menu">
              <li>
                <a href="index.html">U13</a>
              </li>
              <li>
                <a href="index.html">U11</a>
              </li>
              <li>
                <a href="index.html">U10</a>
              </li>
              <li>
                <a href="index.html">U9</a>
              </li>
              <li>
                <a href="index.html">U8</a>
              </li>
              <li>
                <a href="index.html">U7</a>
              </li>
              <li>
                <a href="index.html">U6</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="index.html">Sponsors</a>
          </li>
          <li>
            <a href="index.html">De club</a>
            <ul className="vertical menu submenu">
              <li>
                <a href="index.html">Geschiedenis</a>
              </li>
              <li>
                <a href="index.html">Verantwoordelijkheden</a>
              </li>
              <li>
                <a href="index.html">Contact</a>
              </li>
            </ul>
          </li>
          <li className="main-nav__item--social-links">
            <a
              href="index.html"
              className="social-links__link"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Facebook"
            >
              <i className="fa fa fa-facebook" />
            </a>

            <a
              href="index.html"
              className="social-links__link"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Twitter"
            >
              <i className="fa fa fa-twitter" />
            </a>

            <a
              href="index.html"
              className="social-links__link"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Instagram"
            >
              <i className="fa fa fa-instagram" />
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default PageHeader
