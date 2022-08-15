import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Seo } from "../../components/Seo"
import ogImage from "../../images/header-contact.jpg"
import Layout from "../../layouts"
import "./contact.scss"

export const Head = () => {
  return (
    <Seo
      title="Contact"
      description="Overzicht van de contactmogelijkheden."
      path="/club/contact"
      image={{ src: ogImage, width: 2048, height: 546 }}
    />
  )
}

const ContactPage = () => {
  return (
    <Layout>
      <header className="page_header__wrapper">
        <div className="page_header">
          <h1>Contacteer ons</h1>
        </div>
      </header>
      <div className="page__header__image__wrapper">
        <div className="page__header__image__bg">
          <StaticImage src="../../images/header-contact.jpg" alt="" layout="fullWidth" />
        </div>
        <div className="page__header__image__hero page__header__image__hero--small">
          <StaticImage src="../../images/header-contact.jpg" alt="Contact KCVV" layout="fullWidth" />
        </div>
      </div>
      <main className="page__wrapper page__wrapper--limited">
        <table className="page__contact-details">
          <tbody>
            <tr>
              <th className="page__contact-details__label">KCVV Elewijt</th>
              <td className="page__contact-details__value">Driesstraat 30, 1982 Elewijt</td>
            </tr>
            <tr>
              <th className="page__contact-details__label">Voorzitter</th>
              <td className="page__contact-details__value">Rudy Bautmans</td>
            </tr>
            <tr>
              <th className="page__contact-details__label">GC</th>
              <td className="page__contact-details__value">
                <a href="mailto:gc@kcvvelewijt.be" className={`rich-link-center`}>
                  John De Ron
                </a>
              </td>
            </tr>
            <tr>
              <th className="page__contact-details__label">Algemeen contact</th>
              <td className="page__contact-details__value">
                <a href="mailto:info@kcvvelewijt.be" className={`rich-link-center`}>
                  info@kcvvelewijt.be
                </a>
              </td>
            </tr>
            <tr>
              <th className="page__contact-details__label">Jeugdwerking</th>
              <td className="page__contact-details__value">
                <a href="mailto:jeugd@kcvvelewijt.be" className={`rich-link-center`}>
                  jeugd@kcvvelewijt.be
                </a>
              </td>
            </tr>
            <tr>
              <th className="page__contact-details__label">Sponsoring</th>
              <td className="page__contact-details__value">
                <a href="mailto:sponsoring@kcvvelewijt.be" className={`rich-link-center`}>
                  sponsoring@kcvvelewijt.be
                </a>
              </td>
            </tr>
            <tr>
              <th className="page__contact-details__label">Verhuur kantine</th>
              <td className="page__contact-details__value">
                <a href="mailto:verhuur@kcvvelewijt.be" className={`rich-link-center`}>
                  Ann Walgraef
                </a>
              </td>
            </tr>
            <tr>
              <th className="page__contact-details__label">Website</th>
              <td className="page__contact-details__value">
                <a href="mailto:kevin@kcvvelewijt.be" className={`rich-link-center`}>
                  Kevin Van Ransbeeck
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </Layout>
  )
}
export default ContactPage
