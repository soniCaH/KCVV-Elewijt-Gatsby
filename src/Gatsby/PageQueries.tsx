export const gatsbyNodePageQueries = `
articles: allNodeArticle(sort: { created: DESC }, filter: { status: { eq: true } }) {
  edges {
    node {
      title
      created(formatString: "DD/MM/YYYY")
      path {
        alias
      }
      relationships {
        field_media_article_image {
          relationships {
            field_media_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 960
                    placeholder: DOMINANT_COLOR
                    layout: CONSTRAINED
                    aspectRatio: 1.5
                    transformOptions: { cropFocus: ATTENTION }
                  )
                }
              }
            }
          }
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
pages: allNodePage(filter: { status: { eq: true } }) {
  edges {
    node {
      title
      path {
        alias
      }
    }
  }
}
teams: allNodeTeam(filter: { status: { eq: true } }) {
  edges {
    node {
      title
      path {
        alias
      }
    }
  }
}
players: allNodePlayer(filter: { status: { eq: true } }) {
  edges {
    node {
      title
      path {
        alias
      }
    }
  }
}
staff: allNodeStaff(filter: { status: { eq: true } }) {
  edges {
    node {
      title
      path {
        alias
      }
    }
  }
}
categories: allTaxonomyTermCategory(filter: { status: { eq: true } }) {
  edges {
    node {
      name
      path {
        alias
      }
    }
  }
}
`
