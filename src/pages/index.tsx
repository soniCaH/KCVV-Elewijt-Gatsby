import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { FunctionComponent } from "react"

import Layout from "../layouts"
import "./index.scss"

const IndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <section className="frontpage__hero grid-container site-content">
        <div className="grid-x grid-margin-x" data-equalizer data-equalize-on="large">
          <article className="frontpage__hero__article cell large-8">
            <StaticImage
              src="https://www.kcvvelewijt.be/static/eea1218830f016dde0c90f688a629144/f067c/IMG_3322.webp"
              alt="Geert Deferm"
            ></StaticImage>
            <header>
              <h3>Geert Deferm nieuwe T1 van KCVV Elewijt</h3>
            </header>
          </article>
          <article className="frontpage__hero__article cell large-4">
            <header>
              <h3>KCVV TV</h3>
            </header>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
