import React from "react"
import { Seo } from "../../components/Seo"
import Layout from "../../layouts"

import downloadOngevalAangifte from "../../downloads/insurance_medical_attest_template_nl.pdf"
import { CardHorizontal } from "../../components/Card"
import { getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { DownloadsPageProps } from "../../Types/PageProps"

import "./downloads.scss"

const DownloadsPage = ({ data: { medicalattest } }: DownloadsPageProps) => {
  const pictureOngevalAangifte =
    medicalattest?.childImageSharp?.gatsbyImageData && getImage(medicalattest?.childImageSharp?.gatsbyImageData)
  return (
    <Layout>
      <header className="page_header__wrapper">
        <div className="page_header">
          <h1>Digitale documenten - downloads</h1>
        </div>
      </header>
      <div className="page__wrapper page__wrapper--limited page__section page__downloads">
        <h2 className="featured-border">Aangiftes</h2>
        <section>
          {pictureOngevalAangifte && (
            <CardHorizontal
              title="Ongevalsaangifte"
              link={downloadOngevalAangifte}
              picture={pictureOngevalAangifte}
              body="<span class='label label--download'>DOWNLOAD</span><br/> Vanaf 1 september worden enkel nog digitale ongevalsaangiftes aanvaard. Gelieve bijgevoegd document ingevuld — digitaal – aan de GC te bezorgen"
            />
          )}
        </section>
      </div>
    </Layout>
  )
}

export const Head = () => {
  return <Seo title="Downloads" description="Download digitale documenten" path="/downloads/" />
}

export const pageQuery = graphql`
  query DownloadsPage {
    medicalattest: file(name: { eq: "insurance_medical_attest_template_nl" }) {
      ...KCVVFullWidth
    }
  }
`

export default DownloadsPage
