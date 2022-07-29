import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { FunctionComponent } from "react"

import { AltTitle } from "../components/AltTitle"
import { CardTeaser } from "../components/Card"
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
                <div className="frontpage__hero__sponsor">
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
      <section className="frontpage__main_content">
        <article>ARTIKEL 1</article>
        <article>ARTIKEL 2</article>
        <article className="frontpage__main_content__youth">
          <header className="frontpage__matches_carousel_item__header">Jeugd</header>
          <MatchesOverview exclude={[`1`, `2`]} action="next" />
        </article>
        <article>ARTIKEL 3</article>
        <article>ARTIKEL 4</article>
      </section>
      <section className="frontpage__kcvvtv">
        <div className="frontpage__kcvvtv__content">
          <AltTitle title="KCVV TV" variant="black" />
          <article>TV 1</article>
        </div>
      </section>

      <section className="frontpage__main_content">
        <article>
          <CardTeaser title="Article1" picture={undefined} link={``} />
        </article>
        <article>ARTIKEL 6</article>
        <article>ARTIKEL 7</article>
      </section>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    featuredPosts: allNodeArticle(
      filter: { status: { eq: true }, promote: { eq: true } }
      sort: { fields: created, order: DESC }
      limit: 12
    ) {
      edges {
        node {
          id
          path {
            alias
          }
          created(formatString: "D/M/YYYY")
          changed(formatString: "D/M/YYYY")
          timestamp: changed(formatString: "x")
          title
        }
      }
    }
  }
`

export default IndexPage
