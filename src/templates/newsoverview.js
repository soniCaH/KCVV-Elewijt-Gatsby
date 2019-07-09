import React, { Component } from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/index'
import SEO from '../components/seo'

import './newsoverview.scss';

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
    previousUrl = pathPrefix + '/' + previousUrl
    nextUrl = pathPrefix + '/' + nextUrl
  }

  return (
    <Layout>
      <SEO lang="nl-BE" title={`Nieuwsarchief - Pagina ${index}`} />

      <div className="grid-container site-content">
        <h2>Nieuwsarchief KCVV Elewijt.be</h2>
        <div className="grid-x grid-margin-x">
          {group.map(({ node }) => {
            const relatedTags = node.relationships.field_tags || []
            return (
              <div key={node.id} className="archive__wrapper cell">
                <div className="date">{node.created}</div>
                <Link className="blogUrl" to={node.path.alias}>
                  {node.title}
                </Link>
                {/* {relatedTags.length > 0 && (
                  <span className={'tag__wrapper'}>
                    <i class="fa fa-tags" aria-hidden="true"></i>{' '}
                    {relatedTags.map(({ path, name }, i) => (
                      <Link to={node.path.alias}>
                        <span key={i} className={'tag__label'}>
                          #{name}
                        </span>
                      </Link>
                    ))}
                  </span>
                )} */}
              </div>
            )
          })}
          <footer className={"archive__navigation_wrapper cell"}>
          <div className={"archive__navigation--previous"}>
            <NavLink test={first} url={previousUrl} text="&laquo; Vorige" />
          </div>
          <div className={"archive__navigation--next"}>
            <NavLink test={last} url={nextUrl} text="Volgende &raquo;" />
          </div></footer>
        </div>
      </div>
    </Layout>
  )
}
export default NewsOverviewPage
