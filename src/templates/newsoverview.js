import React from "react"
import Link from "gatsby-link"
import Layout from "../layouts/index"
import SEO from "../components/seo"

import { graphql } from "gatsby"

import "./newsoverview.scss"
import { NewsItemCardRatio } from "../components/news-item"

const NavLink = ({ test, url, text }) => {
  if (!test) {
    return <Link to={url}>{text}</Link>
  } else {
    return <span>{text}</span>
  }
}

const NewsOverviewPage = ({ pageContext, data }) => {
  const { group, index, first, last, pathPrefix } = pageContext
  let previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  let nextUrl = (index + 1).toString()
  if (pathPrefix) {
    previousUrl = `${pathPrefix}/${previousUrl}`
    nextUrl = `${pathPrefix}/${nextUrl}`
  }

  const { categoryTags } = data

  return (
    <Layout>
      <SEO lang="nl-BE" title={`Nieuwsarchief - Pagina ${index}`} />

      <div className="grid-container site-content">
        <div className="grid-x grid-margin-x">
          <h2>Nieuwsarchief KCVV Elewijt</h2>
          <header className={"archive__filter_wrapper"}>
            <h5>Filter op categorie</h5>
            <section className={"archive__filter_filters"}>
              <Link to={"/news/"} className={"btn btn--small"}>
                Alles
              </Link>
              {categoryTags.edges.map(({ node, i }) => (
                <Link to={node.path.alias} className={"btn btn--small"} key={i}>
                  {node.name}
                </Link>
              ))}
            </section>
          </header>

          <main
            className={"news_overview__wrapper news_overview__wrapper--archive"}
          >
            {group.map(({ node, i }) => (
              <NewsItemCardRatio node={node} teaser={false} key={i} />
            ))}
          </main>
          <footer className={"archive__navigation_wrapper cell"}>
            <div className={"archive__navigation--previous"}>
              <NavLink test={first} url={previousUrl} text="&laquo; Vorige" />
            </div>
            <div className={"archive__navigation--next"}>
              <NavLink test={last} url={nextUrl} text="Volgende &raquo;" />
            </div>
          </footer>
        </div>
      </div>
    </Layout>
  )
}
export default NewsOverviewPage

export const query = graphql`
  query {
    categoryTags: allTaxonomyTermCategory(
      sort: { fields: name, order: ASC }
      filter: {
        status: { eq: true }
        relationships: {
          node__article: { elemMatch: { drupal_internal__nid: { gte: 1 } } }
        }
      }
    ) {
      edges {
        node {
          path {
            alias
          }
          name
          relationships {
            node__article {
              drupal_internal__nid
            }
          }
        }
      }
    }
  }
`
