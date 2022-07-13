import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { FunctionComponent } from "react"

import { HeroSection2 } from "../components/Hero"
import { Seo } from "../components/Seo"
import Layout from "../layouts"
import "./index.scss"

const IndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <Seo
        title="Er is maar één plezante compagnie"
        description="Startpagina van stamnummer 00055: KCVV Elewijt."
        path={`/`}
      />

      <section className="frontpage__wrapper">
        <div className="frontpage__hero">
          <div className="frontpage__hero__inner">
            <div className="frontpage__hero__container">
              <div className="frontpage__hero__content">
                <article className="frontpage__hero__article">
                  <a href="#" id="href">
                    <div className="frontpage__hero__article__inner">
                      <header>
                        <h3>A-Ploeg</h3>
                        <div className="frontpage__hero__article__title">
                          <h2>Geert Deferm nieuwe T1 van KCVV Elewijt</h2>
                        </div>
                      </header>
                      <StaticImage
                        src="https://www.kcvvelewijt.be/static/eea1218830f016dde0c90f688a629144/f067c/IMG_3322.webp"
                        alt="Geert Deferm"
                      ></StaticImage>
                    </div>
                  </a>
                </article>
                <div>
                  <StaticImage
                    src="../images/rbfa-lukaku.jpg"
                    alt="RBFA VVF - Romelu Lukaku"
                    placeholder="blurred"
                    layout="constrained"
                    aspectRatio={0.7063758}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="frontpage__matches_carousel">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia.
      </section>
      <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia.</section>
      <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia.</section>
      <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia.</section>
    </Layout>
  )
}

export default IndexPage
