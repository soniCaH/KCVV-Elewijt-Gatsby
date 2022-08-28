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
            ) of de jeugdsverantwoordelijken.
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
          <a href="https://kcvv.prosoccerdata.com/" target="_blank" className="rich-link">
            https://kcvv.prosoccerdata.com/
          </a>
        </section>
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
