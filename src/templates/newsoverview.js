import React, { Component } from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/index'
import SEO from '../components/seo'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const NewsOverviewPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount, pathPrefix } = pageContext
  let previousUrl = index - 1 == 1 ? '/' : (index - 1).toString()
  let nextUrl = (index + 1).toString()
  if (pathPrefix) {
    previousUrl = pathPrefix + "/" + previousUrl;
    nextUrl = pathPrefix + "/" + nextUrl;
  }

  return (
    <Layout>
      <SEO lang="nl-BE" title={`Nieuwsarchief - Pagina ${index}`} />

      {group.map(({ node }) => (
        <div key={node.id} className="blogListing">
          <div className="date">{node.changed}</div>
          <Link className="blogUrl" to={node.path.alias}>
            {node.title}
          </Link>
        </div>
      ))}
      <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="&laquo; Vorige" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Volgende &raquo;" />
      </div>
    </Layout>
  )
}
export default NewsOverviewPage
