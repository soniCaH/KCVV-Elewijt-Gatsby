import React from "react"
import { Seo } from "../../components/Seo"
import Layout from "../../layouts"

import downloadOngevalAangifte from "../../downloads/insurance_medical_attest_template_nl.pdf"
import downloadRules from "../../downloads/reglement_inwendige_orde_2022.pdf"
import downloadVoetbalouders from "../../downloads/2022-2023_-_De_ideale_voetbalgrootouder.pdf"
import { CardHorizontal } from "../../components/Card"
import { getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { DownloadsPageProps } from "../../Types/PageProps"

import "./downloads.scss"

const DownloadsPage = ({ data: { medicalattest, rules, voetbalouders } }: DownloadsPageProps) => {
  const pictureOngevalAangifte =
    medicalattest?.childImageSharp?.gatsbyImageData && getImage(medicalattest?.childImageSharp?.gatsbyImageData)
  const pictureReglement = rules?.childImageSharp?.gatsbyImageData && getImage(rules?.childImageSharp?.gatsbyImageData)
  const pictureVoetbalouders =
    voetbalouders?.childImageSharp?.gatsbyImageData && getImage(voetbalouders?.childImageSharp?.gatsbyImageData)
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
              body="<span class='label label--download'>DOWNLOAD</span><br/> Vanaf 1 september worden enkel nog digitale ongevalsaangiftes aanvaard. Gelieve bijgevoegd document ingevuld — digitaal – aan de GC te bezorgen."
            />
          )}
        </section>
        <h2 className="featured-border">Reglementen</h2>
        <section>
          {pictureReglement && (
            <CardHorizontal
              title="Reglement van Inwendige Orde"
              link={downloadRules}
              picture={pictureReglement}
              body="<span class='label label--download'>DOWNLOAD</span><br/> Elke persoon die het complex betreedt, wordt verwacht kennis te namen van (de bepalingen van) dit reglement, deze te aanvaarden en vooral na te leven."
            />
          )}
          {pictureVoetbalouders && (
            <CardHorizontal
              title="De 'ideale' voetbal(groot)ouders"
              link={downloadVoetbalouders}
              picture={pictureVoetbalouders}
              body="<span class='label label--download'>DOWNLOAD</span><br/> Het is fantastisch om te zien hoe trots u op uw (klein)kind bent en hoe u hen wilt aanmoedigen om het beste uit zichzelf te halen. In deze boodschap willen we u echter ook waarschuwen voor overmatig druk zetten op uw, maar ook andere, kinderen."
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
      childImageSharp {
        gatsbyImageData(
          width: 480
          placeholder: DOMINANT_COLOR
          layout: CONSTRAINED
          aspectRatio: 1.77
          transformOptions: { cropFocus: ENTROPY }
        )
      }
    }
    rules: file(name: { eq: "pexels-joshua-miranda-4027658" }) {
      childImageSharp {
        gatsbyImageData(
          width: 480
          placeholder: DOMINANT_COLOR
          layout: CONSTRAINED
          aspectRatio: 1.77
          transformOptions: { cropFocus: ENTROPY }
        )
      }
    }
    voetbalouders: file(name: { eq: "download-voetbalouder" }) {
      childImageSharp {
        gatsbyImageData(
          width: 480
          placeholder: DOMINANT_COLOR
          layout: CONSTRAINED
          aspectRatio: 1.77
          transformOptions: { cropFocus: ENTROPY }
        )
      }
    }
  }
`

export default DownloadsPage
