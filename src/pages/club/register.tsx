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
        <section>Lalalala</section>
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
