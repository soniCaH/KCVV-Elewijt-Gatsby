import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Icon from "../../components/Icon"
import { Seo } from "../../components/Seo"
import ogImage from "../../images/header-ultras.jpg"
import Layout from "../../layouts"
import "./ultras.scss"

export const Head = () => {
  return (
    <Seo
      title="KCVV Ultra's 55"
      description="Supportersclub van KCVV Elewijt: De Ultra's!"
      path="/club/ultras"
      image={{ src: ogImage, width: 1949, height: 863 }}
    />
  )
}

const UltrasPage = () => {
  return (
    <Layout>
      <header className="page_header__wrapper">
        <div className="page_header">
          <h1>KCVV Ultras</h1>
        </div>
      </header>
      <div className="page__header__image__wrapper">
        <div className="page__header__image__bg">
          <StaticImage src="../../images/header-ultras.jpg" alt="" layout="fullWidth" />
        </div>
        <div className="page__header__image__hero page__header__image__hero--small">
          <StaticImage src="../../images/header-ultras.jpg" alt="KCVV Ultra's" layout="fullWidth" />
        </div>
      </div>
      <main className="page__wrapper page__wrapper--limited">
        <section>
          <h2 className="featured-border">Wie zijn we</h2>
          <p>
            De naam KCVV Ultras werd enkele jaren geleden op facebook in het leven geroepen door een bende supporters
            die elke week trouw op post stonden. Na verloop van tijd werd de pagina echter minder en minder actief, en
            de term "Ultras" verdween langzaamaan.
          </p>
          <p>
            Tot het seizoen 2018 - 2019. In de zoektocht naar de kampioenstitel konden de spelers elke vorm van steun
            gebruiken, en wat is er beter dan de KCVV Ultras hiervoor terug nieuw leven in te blazen? Enkele nieuwe
            voortrekkers stonden op en plaatsten hun schouders onder de eerste sfeeracties. Bengaals vuur en rookpotten
            werden aangekocht, trommels en spandoeken naast het veld geposteerd en we konden knallen!
          </p>

          <StaticImage
            src="../../images/ultras-kampioen.jpeg"
            alt="KCVV Ultra's op de kampioenenmatch in 3e provinciale"
            layout="constrained"
            width={1440}
          />

          <p>
            Het enthousiasme, gekoppeld aan de goede resultaten, werkte aanstekelijk en de bende groeide al snel. De
            sfeeracties volgden in de tweede helft van het seizoen elkaar dan ook snel op en kregen uitbreiding op
            verplaatsing: met de bierfiets de ploeg over de streep gaan trekken op FC Zemst, met de bus naar Mollem
            enz...
          </p>
          <p>
            Of het nu aan de steun van de Ultras lag of niet, het seizoen werd bezegeld met een prachtige
            kampioenstitel, en volgend jaar kunnen de Ultras hun ding doen in 2e provinciale!
          </p>
        </section>
        <section>
          <h2 className="featured-border">Wat doen we</h2>
          <blockquote>
            Positief aanmoedigen van de eigen ploeg; vocaal, met trommels, met sfeermateriaal, met bussen enz...
          </blockquote>
          <p>
            Het doel van de KCVV Ultras is om onze eigen ploeg positief aan te moedigen! Agressie of negatief gedrag
            naar de tegenstanders/wedstrijdleiding zal op geen enkel moment getolereerd worden!
          </p>
          <p>
            Met sfeermateriaal (bengaals vuur, rookpotten, trommels) en vocale steun proberen we zo vaak mogelijk
            aanwezig te zijn op wedstrijden.
          </p>
          <p>
            Indien de tegenstander zich hiertoe leent, zullen er ook enkele bussen of andere vervoersmiddelen ingelegd
            worden om samen de verplaatsing te maken.
          </p>
          <p>
            Op het einde van het seizoen 2018-2019 werd ook voor het eerst een volledig eigen evenement georganiseerd:
            een afterwork party gecombineerd met een "Schijt je rijk", waarbij maar liefst{` `}
            <strong>ALLE 500 lotjes</strong> verkocht werden aan sympathisanten!{` `}
            <strong>De winnaar kreeg een cheque uitgereikt van 750 euro!</strong>
          </p>
          <StaticImage
            src="../../images/ultras-sjr.jpg"
            alt="KCVV Ultra's schijt-je-rijk affiche"
            layout="constrained"
            width={1440}
          />
        </section>
        <section>
          <h2 className="featured-border">Lid worden</h2>
          <p>
            De makkelijkste manier om op de hoogte te blijven van acties, busritten, evenementen... is via onze
            vernieuwde facebookpagina:
            <br />
            <a
              className={`btn btn--arrow`}
              href="https://www.facebook.com/KCVV.ULTRAS.55/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="fa-facebook-square" /> facebook.com/KCVV.ULTRAS.55
            </a>
          </p>
        </section>
      </main>
    </Layout>
  )
}

export default UltrasPage
