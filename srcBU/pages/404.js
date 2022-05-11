import { Link } from "gatsby"
import React, { Component } from "react"

import HeaderBgTitle from "../components/header-bg-title"
import SEO from "../components/seo"
import ogImage from "../images/header-404.jpg"
import Layout from "../layouts/index"

class PageNotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          lang="nl-BE"
          title="Pagina niet gevonden"
          description="Deze pagina werd niet gevonden op kcvvelewijt.be"
          path="/404/"
          image={{ src: ogImage, width: 1989, height: 437 }}
        />

        <HeaderBgTitle title="Pagina" highlight="niet gevonden" classes={`error-page--404 error-page`} />

        <div className={`grid-container site-content`}>
          <div className={`grid-x grid-margin-x`}>
            <div className={`cell large-12 center`}>
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
                <Link to={`/search`} className={`btn btn--arrow`}>
                  Ga terug naar start
                </Link>
                <Link to={`/search`} className={`btn btn--alt btn--arrow`}>
                  Ga naar de zoekpagina
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PageNotFoundPage
