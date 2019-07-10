import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layouts/index'
import SEO from '../components/seo'
import Img from 'gatsby-image'

import './article.scss'

String.prototype.replaceAll = function(search, replacement) {
  var target = this
  return target.replace(new RegExp(search, 'g'), replacement)
}

export default ({ data }) => {
  const info = data.allTaxonomyTermCategory.group
  const post = data.allTaxonomyTermCategory.edges[0].node

  console.log({ info, post })

  return (
    <Layout>
      <SEO lang="nl-BE" title={info.name} />

      <article className={'category__wrapper'}>
        <header className={'player-detail__header'}>
          <h1 className={'player-detail__name'}>{info[0].fieldValue}</h1>

          <div className={'bg-green-mask'}>
            <div className={'bg-white-end'} />
          </div>
        </header>

        <header className={'article__header'}>
          <h3 className={'article__header__heading'}>
            <span>{info.name}</span>
          </h3>
        </header>

        <div className={'player-break'}></div>
        <main className={'category__content_wrapper'}>
          Lorem Ipsum enz Lorem Ipsum enz Lorem Ipsum enz Lorem Ipsum enz Lorem
          Ipsum enz
        </main>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allTaxonomyTermCategory(
      sort: { fields: relationships___node__article___created, order: DESC }
      filter: { path: { alias: { eq: $slug } } }
    ) {
      edges {
        node {
          name
          relationships {
            node__article {
              created
              title
              path {
                alias
              }
            }
          }
        }
      }
      group(field: name) {
        fieldValue
      }
    }
  }
`
