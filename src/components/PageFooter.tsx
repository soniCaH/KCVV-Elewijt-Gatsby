import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import { AltTitle } from "./AltTitle"
import "./PageFooter.scss"
import { SponsorsBlock } from "./SponsorsBlock"

export const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer--widgets grid-container grid-x">
        <div className="small-12 large-5 cell page-footer__contact">
          <div className="page-footer__contact-top">
            <div className={`page-footer__contact--logo`}>
              <Link to="/">
                <StaticImage
                  src="../images/logo-flat.png"
                  alt="KCVV ELEWIJT"
                  width={150}
                  placeholder="none"
                  className="header-mobile__logo-img"
                />
              </Link>
            </div>

            {renderSocialLinks()}
          </div>
          <div className="page-footer__contact-middle">{renderContactTable()}</div>
        </div>

        <div className="page-footer__divider large-1 show-for-large"></div>

        <div className="small-12 large-6 cell page-footer__sponsors">
          <SponsorsBlock />
        </div>
      </div>
      <div className="page-footer__bottom show-for-large">
        <AltTitle title="Er is maar één plezante compagnie" variant="black--alpha" fitText={true} />
      </div>
    </footer>
  )
}

const renderSocialLinks = () => (
  <div className={`page-footer__contact--social`}>
    <ul className="social-links social-links--circle">
      <li className="social-links__item">
        <a
          href="https://facebook.com/KCVVElewijt/"
          className="social-links__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook" />
        </a>
      </li>
      <li className="social-links__item">
        <a href="https://twitter.com/kcvve" className="social-links__link" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter" />
        </a>
      </li>
      <li className="social-links__item">
        <a
          href="https://www.instagram.com/kcvve"
          className="social-links__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram" />
        </a>
      </li>
    </ul>
  </div>
)

const renderContactTable = () => (
  <table className="page-footer__contact-details">
    <tbody>
      <tr>
        <th className="page-footer__contact-details__label">KCVV Elewijt</th>
        <td className="page-footer__contact-details__value">Driesstraat 30, 1982 Elewijt</td>
      </tr>
      <tr>
        <th className="page-footer__contact-details__label">Voorzitter</th>
        <td className="page-footer__contact-details__value">Rudy Bautmans</td>
      </tr>
      <tr>
        <th className="page-footer__contact-details__label">GC</th>
        <td className="page-footer__contact-details__value">
          <a href="mailto:gc@kcvvelewijt.be" className={`rich-link`}>
            John De Ron
          </a>
        </td>
      </tr>
      <tr>
        <th className="page-footer__contact-details__label">Algemeen contact</th>
        <td className="page-footer__contact-details__value">
          <a href="mailto:info@kcvvelewijt.be" className={`rich-link`}>
            info@kcvvelewijt.be
          </a>
        </td>
      </tr>
      <tr>
        <th className="page-footer__contact-details__label">Jeugdwerking</th>
        <td className="page-footer__contact-details__value">
          <a href="mailto:jeugd@kcvvelewijt.be" className={`rich-link`}>
            jeugd@kcvvelewijt.be
          </a>
        </td>
      </tr>
      <tr>
        <th className="page-footer__contact-details__label">Verhuur kantine</th>
        <td className="page-footer__contact-details__value">
          <a href="mailto:verhuur@kcvvelewijt.be" className={`rich-link`}>
            Ann Walgraef
          </a>
        </td>
      </tr>
      <tr>
        <th className="page-footer__contact-details__label">Website</th>
        <td className="page-footer__contact-details__value">
          <a href="mailto:kevin@kcvvelewijt.be" className={`rich-link`}>
            Kevin Van Ransbeeck
          </a>
        </td>
      </tr>
      <tr>
        <th className="page-footer__contact-details__label">Privacy &amp; cookies</th>
        <td className="page-footer__contact-details__value">
          <a href="/privacy" className={`rich-link`}>
            Privacyverklaring
          </a>
        </td>
      </tr>
    </tbody>
  </table>
)
