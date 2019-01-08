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
            data-hide-for="medium"
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
          <div className="header__top-bar show-for-medium">
            DNO WHAT THIS SHOULD CONTAIN
          </div>
          <div className="header__seconday show-for-medium">
            NEITHER FOR THIS ONE
          </div>
          <div className="header__primary show-for-medium">
            <div className="grid-container">
              <div className="header__primary-inner" />
            </div>
          </div>

          <div className="top-bar" id="responsive-menu">
            <div className="top-bar-left">
              {/* LOGO */}
              IMG
              <ul className="dropdown menu" data-dropdown-menu>
                <li className="menu-text">Site Title</li>
                <li className="has-submenu">
                  <a href="#0">One</a>
                  <ul className="submenu menu vertical" data-submenu>
                    <li>
                      <a href="#0">One</a>
                    </li>
                    <li>
                      <a href="#0">Two</a>
                    </li>
                    <li>
                      <a href="#0">Three</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#0">Two</a>
                </li>
                <li>
                  <a href="#0">Three</a>
                </li>
              </ul>
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
          data-responsive-menu="accordion medium-dropdown"
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
            <a href="index.html">
              Home
            </a>
          </li>
          <li>
            <a href="index.html">Nieuws</a>
          </li>
          <li>
            <a href="index.html">Evenementen</a>
          </li>
          <li>
            <a href="index.html" className="active">A-Ploeg</a>
            <ul className="vertical menu is-active">
              <li>
                <a href="#" className="active">Wedstrijden</a>
              </li>
              <li>
                <a href="#">Ranking</a>
              </li>
              <li>
                <a href="#">Staff</a>
              </li>
              <li>
                <a href="#">Spelers</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="index.html">B-ploeg</a>
            <ul className="vertical menu">
              <li>
                <a href="#">Wedstrijden</a>
              </li>
              <li>
                <a href="#">Ranking</a>
              </li>
              <li>
                <a href="#">Staff</a>
              </li>
              <li>
                <a href="#">Spelers</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="index.html">Jeugd</a>
            <ul className="vertical menu">
              <li>
                <a href="#">U13</a>
              </li>
              <li>
                <a href="#">U11</a>
              </li>
              <li>
                <a href="#">U10</a>
              </li>
              <li>
                <a href="#">U9</a>
              </li>
              <li>
                <a href="#">U8</a>
              </li>
              <li>
                <a href="#">U7</a>
              </li>
              <li>
                <a href="#">U6</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="index.html">De club</a>
          </li>
          <li>
            <a href="index.html">Contact</a>
          </li>
          <li className="main-nav__item--social-links">
            <a
              href="#"
              class="social-links__link"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Facebook"
            >
              <i class="fa fa fa-facebook" />
            </a>

            <a
              href="#"
              class="social-links__link"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Twitter"
            >
              <i class="fa fa fa-twitter" />
            </a>

            <a
              href="#"
              class="social-links__link"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Instagram"
            >
              <i class="fa fa fa-instagram" />
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default PageHeader
