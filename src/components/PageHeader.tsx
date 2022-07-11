import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { Fragment, useEffect } from "react"

import "./PageHeader.scss"

const MenuItems = () => {
  useEffect(() => {
    const activeLinks = document.querySelectorAll(`.active`)
    let parent = null

    activeLinks.forEach((activeLink) => {
      parent = activeLink.closest(`.submenu`)
      if (parent !== null) {
        parent.classList.add(`is-active`)
      }
    })
  }, [])

  return (
    <Fragment>
      <li>
        <Link to="/" activeClassName="active" partiallyActive={false}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/news/" activeClassName="active" partiallyActive={true}>
          Nieuws
        </Link>
      </li>
      <li>
        <Link to="/events/" activeClassName="active" partiallyActive={true}>
          Evenementen
        </Link>
      </li>
      <li>
        <Link to="/team/a-ploeg" activeClassName="active" partiallyActive={true}>
          A-Ploeg
        </Link>
        <ul className="vertical menu submenu">
          <li>
            <Link to="/team/a-ploeg#team-info" activeClassName="active" partiallyActive={true}>
              Info
            </Link>
          </li>
          <li>
            <Link to="/team/a-ploeg#team-lineup" activeClassName="active" partiallyActive={true}>
              Spelers &amp; Staff
            </Link>
          </li>
          <li>
            <Link to="/team/a-ploeg#team-matches" activeClassName="active" partiallyActive={true}>
              Wedstrijden
            </Link>
          </li>
          <li>
            <Link to="/team/a-ploeg#team-ranking" activeClassName="active" partiallyActive={true}>
              Stand
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/team/b-ploeg" activeClassName="active" partiallyActive={true}>
          B-Ploeg
        </Link>
        <ul className="vertical menu submenu">
          <li>
            <Link to="/team/b-ploeg#team-info" activeClassName="active" partiallyActive={true}>
              Info
            </Link>
          </li>
          <li>
            <Link to="/team/b-ploeg#team-lineup" activeClassName="active" partiallyActive={true}>
              Spelers &amp; Staff
            </Link>
          </li>
          <li>
            <Link to="/team/b-ploeg#team-matches" activeClassName="active" partiallyActive={true}>
              Wedstrijden
            </Link>
          </li>
          <li>
            <Link to="/team/b-ploeg#team-ranking" activeClassName="active" partiallyActive={true}>
              Stand
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/jeugd/" activeClassName="active" partiallyActive={true}>
          Jeugd
        </Link>
        <ul className="vertical menu submenu">
          <li>
            <Link to="/team/zondagsreserven/" activeClassName="active" partiallyActive={true}>
              Zondagsreserven
            </Link>
          </li>
          <li>
            <Link
              to="/team/veteranen/"
              activeClassName="active"
              partiallyActive={true}
              className="menu_item--border-bottom"
            >
              Veteranen
            </Link>
          </li>
          <li>
            <Link to="/jeugd/u17/" activeClassName="active" partiallyActive={true}>
              U17
            </Link>
          </li>
          <li>
            <Link to="/jeugd/u15/" activeClassName="active" partiallyActive={true}>
              U15
            </Link>
          </li>
          <li>
            <Link to="/jeugd/u13/" activeClassName="active" partiallyActive={true}>
              U13
            </Link>
          </li>
          <li>
            <Link to="/jeugd/u12/" activeClassName="active" partiallyActive={true}>
              U12
            </Link>
          </li>
          <li>
            <Link to="/jeugd/u11/" activeClassName="active" partiallyActive={true}>
              U11
            </Link>
          </li>
          <li>
            <Link to="/jeugd/u10/" activeClassName="active" partiallyActive={true}>
              U10
            </Link>
          </li>
          <li>
            <Link to="/jeugd/u9/" activeClassName="active" partiallyActive={true}>
              U9
            </Link>
          </li>
          <li>
            <Link to="/jeugd/u8/" activeClassName="active" partiallyActive={true}>
              U8
            </Link>
          </li>
          <li>
            <Link to="/jeugd/u7/" activeClassName="active" partiallyActive={true}>
              U7
            </Link>
          </li>
          <li>
            <Link to="/jeugd/u6/" activeClassName="active" partiallyActive={true}>
              U6
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/sponsors/" activeClassName="active" partiallyActive={true}>
          Sponsors
        </Link>
      </li>
      <li>
        <Link to="/club/" activeClassName="active" partiallyActive={true}>
          De club
        </Link>
        <ul className="vertical menu submenu">
          <li>
            <Link to="/club/history/" activeClassName="active" partiallyActive={true}>
              Geschiedenis
            </Link>
          </li>
          <li>
            <Link to="/club/bestuur/" activeClassName="active" partiallyActive={true}>
              Bestuur
            </Link>
          </li>
          <li>
            <Link to="/club/jeugdbestuur/" activeClassName="active" partiallyActive={true}>
              Jeugdbestuur
            </Link>
          </li>
          <li>
            <Link to="/club/responsibilities/" activeClassName="active" partiallyActive={true}>
              Verantwoordelijkheden
            </Link>
          </li>
          <li>
            <Link to="/club/ultras/" activeClassName="active" partiallyActive={true}>
              KCVV Ultras
            </Link>
          </li>
          <li>
            <Link to="/club/contact/" activeClassName="active" partiallyActive={true}>
              Contact
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/search/" activeClassName="active" partiallyActive={true}>
          <i className={`fa fa-search`} aria-hidden="true"></i>
          {` `}
          <span className={`display-mobile--inline-block display-mobile search--label`}>Zoeken</span>
        </Link>
      </li>
    </Fragment>
  )
}

export const PageHeader = () => (
  // <!-- START STICKY CONTAINER --> //
  // <header data-sticky-container className="l--header">
  <header className="l--header">
    {/* <!-- START STICKY INNER --> */}
    {/* <div data-sticky data-options="marginTop:0;"> */}
    <div className="navigation">
      {/* <!-- START MOBILE NAV BAR --> */}
      <div className="header--mobile">
        <button
          type="button"
          className="menu-icon"
          data-toggle="responsiveNavigation"
          aria-label="Toggle Responsive navigation"
        />
        <div className="header-mobile__logo">
          <Link to="/">
            <StaticImage
              src="../images/logo-flat.png"
              alt="KCVV ELEWIJT"
              width={350}
              placeholder="none"
              className="header-mobile__logo-img"
            />
          </Link>
        </div>
      </div>
      {/* <!-- END MOBILE NAV BAR --> */}

      {/* <!-- START DESKTOP NAV BAR --> */}
      <div className="header--desktop">
        {/* LOGO */}
        <div className="header-logo">
          <Link to="/">
            <StaticImage
              src="../images/logo-flat.png"
              alt="KCVV ELEWIJT"
              placeholder="none"
              height={112}
              className="header__logo-img"
            />
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__list--desktop menu dropdown" data-dropdown-menu>
            <MenuItems />
          </ul>
        </nav>
      </div>
    </div>
    {/* <!-- END DESKTOP NAV BAR --> */}

    {/* <!-- END STICKY INNER --> */}
  </header>
  // <!-- END STICKY CONTAINER --> //
)

export const PageHeaderMobile = () => (
  <nav className="off-canvas position-left" id="responsiveNavigation" data-off-canvas>
    <ul className="main-nav__list vertical menu" data-responsive-menu="accordion large-dropdown">
      <div className="header-mobile__logo">
        <button aria-label="Close menu" type="button" data-toggle="" className="button--back">
          {/* <span aria-hidden="true" /> */}
        </button>

        <Link to="/">
          <StaticImage
            src="../images/logo-flat.png"
            alt="KCVV ELEWIJT"
            width={350}
            placeholder="none"
            className="header-mobile__logo-img"
          />
        </Link>
      </div>

      <MenuItems />

      <li className="main-nav__item--social-links">
        <a
          href="https://www.facebook.com/KCVVElewijt"
          className="social-links__link"
          data-toggle="tooltip"
          data-placement="bottom"
          title=""
          data-original-title="Facebook"
        >
          <i className="fa fa fa-facebook" />
        </a>

        <a
          href="https://twitter.com/kcvve"
          className="social-links__link"
          data-toggle="tooltip"
          data-placement="bottom"
          title=""
          data-original-title="Twitter"
        >
          <i className="fa fa fa-twitter" />
        </a>

        <a
          href="https://www.instagram.com/kcvve/"
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
