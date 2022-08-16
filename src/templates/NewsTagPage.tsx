import { graphql, Link } from "gatsby"
import React from "react"
import { CardTeaser } from "../components/Card"
import { Seo } from "../components/Seo"
import Layout from "../layouts"
import { NewsTagPageQuery } from "../Types/Article"
import "./NewsOverview.scss"

const NewsTagPage = ({ data }: NewsTagPageQuery) => {
  const { articles, term, categoryTags } = data
  const pathUrl = term.path.alias

  return (
    <Layout>
      <Seo title={term.name} path={pathUrl} />

      <header className="page_header__wrapper">
        <div className="page_header">
          <h1>KCVV Elewijt - #{term.name}</h1>
        </div>
      </header>
      <div className="newsoverview__wrapper page__wrapper">
        <section className={`archive__filter_wrapper`}>
          <h5>Filter op categorie</h5>
          <section className={`archive__filter_filters`}>
            <Link to={`/news/`}>Alles</Link>
            {categoryTags.edges.map(({ node }) => (
              <Link to={node.path.alias} key={node.name}>
                {node.name}
              </Link>
            ))}
          </section>
        </section>
        <main className={`newsoverview__content__wrapper newsoverview__content__wrapper--archive`}>
          {articles &&
            articles.edges.map(({ node }) => (
              <CardTeaser
                key={node.id}
                title={node.title}
                picture={
                  node.relationships.field_media_article_image.relationships.field_media_image.localFile.childImageSharp
                    .gatsbyImageData
                }
                link={node.path.alias}
                tags={node.relationships?.field_tags}
                createTime={node.created}
              />
            ))}
        </main>
      </div>
    </Layout>
  )
}

export default NewsTagPage

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
        }
      }
    }
  }
`
