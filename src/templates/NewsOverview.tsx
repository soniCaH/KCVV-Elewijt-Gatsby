import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { CardTeaser } from "../components/Card"
import { Seo } from "../components/Seo"
import Layout from "../layouts"
import { NewsOverviewCategoryResponsePropsApi, NewsOverviewQuery } from "../Types/Article"
import "./NewsOverview.scss"

const NewsOverviewPage = ({ pageContext }: NewsOverviewQuery) => {
  const { group, index, first, last, pathPrefix } = pageContext
  const { categoryTags }: NewsOverviewCategoryResponsePropsApi = useStaticQuery(graphql`
    query {
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
  `)

  const previousUrl = index - 1 === 1 ? `/${pathPrefix}/` : `/${pathPrefix}/${(index - 1).toString()}`
  const nextUrl = `/${pathPrefix}/${(index + 1).toString()}`

  return (
    <Layout>
      <header className="page_header__wrapper">
        <div className="page_header">
          <h1>Nieuwsarchief KCVV Elewijt</h1>
        </div>
      </header>

      <div className="newsoverview__wrapper page__wrapper">
        <section className={`archive__filter_wrapper`}>
          <h5>Filter op categorie</h5>
          <section className={`archive__filter_filters`}>
            <Link to={`/news/`} className={`btn btn--small`}>
              Alles
            </Link>
            {categoryTags.edges.map(({ node }) => (
              <Link to={node.path.alias} className={`btn btn--small`} key={node.name}>
                {node.name}
              </Link>
            ))}
          </section>
        </section>
        <main className={`newsoverview__content__wrapper newsoverview__content__wrapper--archive`}>
          {group.map(({ node }) => (
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
        <footer className={`archive__navigation_wrapper cell`}>
          <div className={`archive__navigation--previous`}>
            <NavLink test={first} url={previousUrl} text="&laquo; Vorige" />
          </div>
          <div className={`archive__navigation--next`}>
            <NavLink test={last} url={nextUrl} text="Volgende &raquo;" />
          </div>
        </footer>
      </div>
    </Layout>
  )
}

export default NewsOverviewPage

export const Head = ({ pageContext }: NewsOverviewQuery) => {
  const { index, pathPrefix } = pageContext
  const pathName = `/${pathPrefix}/${index}`
  return <Seo title={`Nieuwsarchief - Pagina ${index}`} path={pathName} />
}

interface NavLinkProps {
  test: boolean
  url: string
  text: string
}

const NavLink = ({ test, url, text }: NavLinkProps) => {
  if (!test) {
    return (
      <Link to={url} className="rich-link-center">
        {text}
      </Link>
    )
  } else {
    return <span>{text}</span>
  }
}
