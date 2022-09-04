import { Link } from "gatsby"
import React from "react"
import { Seo } from "../../components/Seo"
import Layout from "../../layouts"

const RegisterPage = () => {
  return (
    <Layout>
      <header className="page_header__wrapper">
        <div className="page_header">
          <h1>Praktische Informatie</h1>
        </div>
      </header>
      <div className="page__wrapper page__wrapper--limited page__section page__registration">
        <h2 className="featured-border">Inschrijvingen</h2>
        <section>
          <p>
            Alle spelers en speelsters vanaf 4-5 jaar zijn welkom om een/enkele proeftrainingen af te werken voor
            definitief in te schrijven. Hiervoor kan je contact opnemen met de trainer (
            <Link to="/jeugd/" className="rich-link">
              overzicht
            </Link>
            ) of de jeugdverantwoordelijken.
          </p>
          <p>
            Overtuigd en wil je graag lid worden van KCVV Elewijt? Inschrijven kan wekelijks in onze kantine na afspraak
            met de GC via{` `}
            <a href="mailto:jeugd@kcvvelewijt.be" target="_blank" className="rich-link">
              jeugd@kcvvelewijt.be
            </a>
            .
          </p>
        </section>
      </div>
      <div className="page__wrapper page__wrapper--limited page__section page__registration">
        <h2 className="featured-border">ProSoccerData</h2>
        <section>
          <p>
            KCVV Elewijt gebruikt de tool "ProSoccerData" als primair en centraal communicatiemiddel tussen trainers,
            spelers, ouders... Via deze weg worden trainingen ingepland, wedstrijdselecties ingevuld, communicatie
            verzorgd, spelers en ouders op te hoogte gehouden van wijzigingen of evenementen enz...
          </p>
          <p>Elke speler of ouder krijgt toegang tot deze tool via een persoonlijke login.</p>
          <p>
            Website:{` `}
            <a href="https://kcvv.prosoccerdata.com/" target="_blank" className="rich-link">
              https://kcvv.prosoccerdata.com/
            </a>
          </p>
        </section>
      </div>

      <div className="page__wrapper page__wrapper--limited page__section page__social">
        <div className={`social__media__wrapper`}>
          <a
            href="https://facebook.com/KCVVElewijt"
            className="btn-social-counter btn-social-counter--fb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="btn-social-counter__icon">
              <i className="fa fa-facebook"></i>
            </div>
            <h5 className="btn-social-counter__title">Volg onze Facebook pagina</h5>
          </a>
          <a
            href="https://twitter.com/kcvve"
            className="btn-social-counter btn-social-counter--twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="btn-social-counter__icon">
              <i className="fa fa-twitter"></i>
            </div>
            <h5 className="btn-social-counter__title">Volg ons op Twitter</h5>
          </a>
          <a
            href="http://www.instagram.com/kcvve"
            className="btn-social-counter btn-social-counter--instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="btn-social-counter__icon">
              <i className="fa fa-instagram"></i>
            </div>
            <h5 className="btn-social-counter__title">Volg ons op Instagram</h5>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => {
  return (
    <Seo
      title="Praktische Informatie"
      description="Praktische Informatie rond inschrijvingen, trainingen e.d."
      path="/downloads/"
    />
  )
}

export default RegisterPage
