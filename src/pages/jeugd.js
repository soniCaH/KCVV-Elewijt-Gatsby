import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/index"

import SEO from "../components/seo"
import { CardImage } from "../components/Card"
import MatchesOverview from "../components/MatchesOverview"

class JeugdPage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO
          lang="nl-BE"
          title="Jeugdwerking"
          description="Jeugdwerking van KCVV Elewijt"
          path={this.props.location.pathname}
        />

        <section className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className={`cell large-12 youth_teams__overview`}>
              <Link to="/team/zondagsreserven/" className={`btn btn--arrow`}>
                Zondagsreserven
              </Link>
              <Link to="/team/veteranen/" className={`btn btn--arrow`}>
                Veteranen
              </Link>
            </section>
            <section className={`cell large-12 youth_teams__overview`}>
              <Link to="/jeugd/u17/" className={`btn btn--arrow`}>
                U17
              </Link>
              <Link to="/jeugd/u15/" className={`btn btn--arrow`}>
                U15
              </Link>
              <Link to="/jeugd/u13/" className={`btn btn--arrow`}>
                U13
              </Link>
              <Link to="/jeugd/u12/" className={`btn btn--arrow`}>
                U12
              </Link>
              <Link to="/jeugd/u11/" className={`btn btn--arrow`}>
                U11
              </Link>
              <Link to="/jeugd/u10/" className={`btn btn--arrow`}>
                U10
              </Link>
              <Link to="/jeugd/u9/" className={`btn btn--arrow`}>
                U9
              </Link>
              <Link to="/jeugd/u8/" className={`btn btn--arrow`}>
                U8
              </Link>
              <Link to="/jeugd/u7/" className={`btn btn--arrow`}>
                U7
              </Link>
              <Link to="/jeugd/u6/" className={`btn btn--arrow`}>
                U6
              </Link>
            </section>
            <section className={`cell large-12 featured-article`}>
              <CardImage
                title="Leerplannen voor de jeugdwerking"
                picture={data.leerplan}
                link="/news/2019-08-08-leerplan-kcvv-elewijt-jeugd"
                metadata={false}
              />
            </section>
            <section className={`cell large-12 featured-article`}>
              <h2 style={{ marginTop: `${2}rem` }}>Volgende wedstrijden</h2>
              <MatchesOverview exclude={[`1`, `2`]} />
            </section>
          </div>
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    leerplan: file(name: { eq: "leerplan_header" }) {
      ...KCVVFullWidth
    }
  }
`

export default JeugdPage
