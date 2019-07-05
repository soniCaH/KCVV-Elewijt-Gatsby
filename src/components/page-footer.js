import React, { Component } from 'react'

import './page-footer.scss'
import logo from '../images/logo-flat.png'

class PageFooter extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="page-footer--widgets grid-container grid-x">
          <div className="small-12 large-6 cell page-footer__contact">
            <div className="page-footer__contact-top">
              <div className={'page-footer__contact--logo'}>
                <img src={logo} alt="KCVV Elewijt" />
              </div>

              <div className={'page-footer__contact--social'}>
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
                    <a
                      href="https://twitter.com/kcvve"
                      className="social-links__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
            </div>
            <div className="page-footer__contact-middle">
              <table className="page-footer__contact-details">
                <tbody>
                  <tr>
                    <th className="page-footer__contact-details__label">
                      KCVV Elewijt
                    </th>
                    <td className="page-footer__contact-details__value">
                      Driesstraat 30, 1982 Elewijt
                    </td>
                  </tr>
                  <tr>
                    <th className="page-footer__contact-details__label">
                      Voorzitter
                    </th>
                    <td className="page-footer__contact-details__value">
                      Rudy Bautmans
                    </td>
                  </tr>
                  <tr>
                    <th className="page-footer__contact-details__label">GC</th>
                    <td className="page-footer__contact-details__value">
                      John De Ron
                    </td>
                  </tr>
                  <tr>
                    <th className="page-footer__contact-details__label">
                      Algemeen contact
                    </th>
                    <td className="page-footer__contact-details__value">
                      <a href="mailto:info@kcvvelewijt.be">
                        info@kcvvelewijt.be
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="page-footer__contact-details__label">
                      Jeugdwerking
                    </th>
                    <td className="page-footer__contact-details__value">
                      <a href="mailto:jeugd@kcvvelewijt.be">
                        jeugd@kcvvelewijt.be
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="page-footer__contact-details__label">
                      Verhuur kantine
                    </th>
                    <td className="page-footer__contact-details__value">
                      <a href="mailto:verhuur@kcvvelewijt.be">Ann Walgraef</a>
                    </td>
                  </tr>
                  <tr>
                    <th className="page-footer__contact-details__label">
                      Website
                    </th>
                    <td className="page-footer__contact-details__value">
                      <a href="mailto:kevin@kcvvelewijt.be">
                        Kevin Van Ransbeeck
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="small-12 large-6 cell">
            // SPONSORS //
            {/* <FooterSocialMedia /> */}
          </div>
        </div>
      </footer>
    )
  }
}

export default PageFooter
