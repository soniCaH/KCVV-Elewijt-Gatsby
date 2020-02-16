import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/index'
import SEO from '../components/seo'
import PlayerDetail from '../components/player-staff'

export default ({ data }) => {
  const node = data.nodeStaff

  return (
    <Layout>
      <SEO lang="nl-BE" title={node.title} />
      <PlayerDetail player={node} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    nodeStaff(path: { alias: { eq: $slug } }) {
      path {
        alias
      }
      body {
        processed
      }
      title
      field_join_date
      field_lastname
      field_position_staff
      field_firstname
      field_birth_date
      field_position_short
      relationships {
        node__team {
          title
          path {
            alias
          }
        }
        field_image {
          localFile {
            childImageSharp {
              fixed(height: 460) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
`
