import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { FunctionComponent } from "react"

import { AltTitle } from "../components/AltTitle"
import { HeroSection2 } from "../components/Hero"
import { MatchesOverview } from "../components/MatchesOverview"
import { MatchesTabs } from "../components/MatchesTabs"
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
                        <h3>#A-Ploeg</h3>
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
        <AltTitle title="matches" variant="black" />
        <main className="frontpage__matches_carousel__content">
          <article className="frontpage__matches_carousel_item frontpage__matches_carousel_item--a">
            <header className="frontpage__matches_carousel_item__header">A Team</header>
            <MatchesTabs teamId={1} />
          </article>
          <article className="frontpage__matches_carousel_item frontpage__matches_carousel_item--b">
            <header className="frontpage__matches_carousel_item__header">B Team</header>
            <MatchesTabs teamId={2} />
          </article>
          {/* <article className="frontpage__matches_carousel_item frontpage__matches_carousel_item--youth">
            <header className="frontpage__matches_carousel_item__header">Jeugd</header>
            <MatchesOverview exclude={[`1`, `2`]} action="next" />
          </article> */}
        </main>
      </section>
      <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia.</section>
      <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, mollitia.</section>
      <section>
        <AltTitle title="EXTRA" variant="white" />
      </section>
    </Layout>
  )
}

export default IndexPage
