import "./categoryPage.scss"

import { Link, graphql } from "gatsby"

import Layout from "../layouts/index"
import { NewsItemCardRatio } from "../components/news-item"
import React from "react"
import SEO from "../components/seo"

// eslint-disable-next-line
String.prototype.replaceAll = function (search, replacement) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const target = this
  return target.replace(new RegExp(search, `g`), replacement)
}

const CategoryPageTemplate = ({ data }) => {
  const { articles, term, categoryTags } = data
  const pathUrl = term.path.alias

  return (
    <Layout>
      <SEO lang="nl-BE" title={term.name} path={pathUrl} />

      <div className="grid-container site-content">
        <div className="grid-x grid-margin-x">
          <h2>KCVV Elewijt #{term.name}</h2>
          <header className={`archive__filter_wrapper`}>
            <h5>Filter op categorie</h5>
            <section className={`archive__filter_filters`}>
              <Link to={`/news/`} className={`btn btn--small`}>
                Alles
              </Link>
              {categoryTags.edges.map(({ node, i }) => {
                return (
                  <Link to={node.path.alias} className={`btn btn--small`} key={i}>
                    {node.name}
                  </Link>
                )
              })}
            </section>
          </header>

          <main className={`news_overview__wrapper news_overview__wrapper--archive`}>
            {articles &&
              articles.edges.map(({ node }, i) => {
                return <NewsItemCardRatio node={node} teaser={false} key={i} />
              })}
          </main>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    articles: allNodeArticle(
      sort: { fields: changed, order: DESC }
      limit: 20
      filter: { relationships: { field_tags: { elemMatch: { path: { alias: { eq: $slug } } } } } }
    ) {
      edges {
        node {
          created(formatString: "DD/MM/YYYY")
          changed(formatString: "DD/MM/YYYY")
          title
          body {
            summary
          }
          path {
            alias
          }
          relationships {
            field_media_article_image {
              ...ArticleImage
            }
            field_tags {
              name
              path {
                alias
              }
            }
          }
        }
      }
    }
    term: taxonomyTermCategory(path: { alias: { eq: $slug } }) {
      name
      path {
        alias
      }
    }
    categoryTags: allTaxonomyTermCategory(
      sort: { fields: name, order: ASC }
      filter: {
        status: { eq: true }
        relationships: { node__article: { elemMatch: { drupal_internal__nid: { gte: 1 } } } }
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

export default CategoryPageTemplate
