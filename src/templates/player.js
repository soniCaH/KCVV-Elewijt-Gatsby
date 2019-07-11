import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/index'
import SEO from '../components/seo'
import PlayerDetail from '../components/player'

// import './article.scss'

export default ({ data }) => {
  const node = data.nodePlayer

  return (
    <Layout>
      <SEO lang="nl-BE" title={node.title} />
      <PlayerDetail player={node} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    nodePlayer(path: { alias: { eq: $slug } }) {
      path {
        alias
      }
      body {
        processed
      }
      title
      field_join_date
      field_lastname
      field_position
      field_firstname
      field_birth_date
      field_shirtnumber
      relationships {
        field_image {
          localFile {
            url
          }
        }
      }
    }
  }
`
