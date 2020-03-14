import React, { Component } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/index"

import SEO from "../components/seo"
import { CardImage } from "../components/cards"
import MatchesOverview from "../components/matches-overview"

class JeugdPage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO lang="nl-BE" title="Jeugd" />

        <section className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className={"cell large-12 youth_teams__overview"}>
              <Link to="/jeugd/u15/" className={"btn btn--arrow"}>
                U15
              </Link>
              <Link to="/jeugd/u13/" className={"btn btn--arrow"}>
                U13
              </Link>
              <Link to="/jeugd/u12/" className={"btn btn--arrow"}>
                U12
              </Link>
              <Link to="/jeugd/u11/" className={"btn btn--arrow"}>
                U11
              </Link>
              <Link to="/jeugd/u10/" className={"btn btn--arrow"}>
                U10
              </Link>
              <Link to="/jeugd/u9/" className={"btn btn--arrow"}>
                U9
              </Link>
              <Link to="/jeugd/u8/" className={"btn btn--arrow"}>
                U8
              </Link>
              <Link to="/jeugd/u7/" className={"btn btn--arrow"}>
                U7
              </Link>
              <Link to="/jeugd/u6/" className={"btn btn--arrow"}>
                U6
              </Link>
            </section>
            <section className={"cell large-12 featured-article"}>
              <CardImage
                title="Leerplannen voor de jeugdwerking"
                localFile={data.leerplan}
                link="/news/2019-08-08-leerplan-kcvv-elewijt-jeugd"
                metadata={false}
              />
            </section>
            <section className={"cell large-12 featured-article"}>
              <h2 style={{ marginTop: `${2}rem` }}>Volgende wedstrijden</h2>
              <MatchesOverview
                season="1920"
                regnumber="00055"
                exclude="['2A', '4D']"
              />
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
      childImageSharp {
        fluid(maxWidth: 960, quality: 75, cropFocus: ATTENTION) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default JeugdPage
