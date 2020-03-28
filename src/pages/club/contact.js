import React, { Component } from "react"

import Layout from "../../layouts/index"

import SEO from "../../components/seo"
import HeaderBgTitle from "../../components/header-bg-title"

import ogImage from "../../images/header-contact.jpg"

class ContactPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          lang="nl-BE"
          title="Contact"
          path={this.props.location.pathname}
          image={{ src: ogImage, width: 2048, height: 546 }}
        />

        <HeaderBgTitle title="Contact" classes={"contact-page"} />

        <div className={"limited-width_wrapper"}>
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
                  <a href="mailto:gc@kcvvelewijt.be">John De Ron</a>
                </td>
              </tr>
              <tr>
                <th className="page-footer__contact-details__label">
                  Algemeen contact
                </th>
                <td className="page-footer__contact-details__value">
                  <a href="mailto:info@kcvvelewijt.be">info@kcvvelewijt.be</a>
                </td>
              </tr>
              <tr>
                <th className="page-footer__contact-details__label">
                  Jeugdwerking
                </th>
                <td className="page-footer__contact-details__value">
                  <a href="mailto:jeugd@kcvvelewijt.be">jeugd@kcvvelewijt.be</a>
                </td>
              </tr>
              <tr>
                <th className="page-footer__contact-details__label">
                  Sponsoring
                </th>
                <td className="page-footer__contact-details__value">
                  <a href="mailto:sponsoring@kcvvelewijt.be">
                    sponsoring@kcvvelewijt.be
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
                <th className="page-footer__contact-details__label">Website</th>
                <td className="page-footer__contact-details__value">
                  <a href="mailto:kevin@kcvvelewijt.be">Kevin Van Ransbeeck</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    )
  }
}

export default ContactPage
