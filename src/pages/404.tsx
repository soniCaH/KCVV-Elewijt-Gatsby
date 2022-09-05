import { Link } from "gatsby"
import React from "react"
import { Seo } from "../components/Seo"
import Layout from "../layouts"

const PageNotFoundPage = () => {
  return (
    <Layout>
      <header className="page_header__wrapper">
        <div className="page_header">
          <h1>Pagina niet gevonden</h1>
        </div>
      </header>
      <main className="page__wrapper page__wrapper--limited">
        <section>
          <h2>Oeps!</h2>

          <h3>De pagina die u zocht bestaat niet (meer)</h3>

          <p>De opgevraagde pagina werd niet teruggevonden. </p>
          <p>
            Als u op deze pagina terecht bent gekomen door ergens op een link te klikken, <br />
            mag je ons dat zeker laten weten via{` `}
            <a href="mailto:website@kcvvelewijt.be"> website@kcvvelewijt.be </a>
            <br />
            dan kunnen we dit nakijken en hopelijk oplossen!
          </p>
          <h3>Wegwijs</h3>
          <p>
            <Link to={`/`} className={`btn btn--arrow`}>
              Ga terug naar start
            </Link>
            <Link to={`/search`} className={`btn btn--alt btn--arrow`}>
              Ga naar de zoekpagina
            </Link>
          </p>
        </section>
      </main>
    </Layout>
  )
}
export const Head = () => {
  return (
    <Seo title="Pagina niet gevonden" description="Deze pagina werd niet gevonden op kcvvelewijt.be" path="/404/" />
  )
}
export default PageNotFoundPage
