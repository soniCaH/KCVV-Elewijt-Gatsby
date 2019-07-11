const gatsbyNodePageQueries = `
articles: allNodeArticle(sort: {fields: created, order: DESC}) {
    edges {
        node {
            title
            created(formatString: "DD/MM/YYYY")
            path {
                alias
            }
            relationships {
                field_tags {
                    name
                }
            }
        }
    }
}

players: allNodePlayer {
    edges {
        node {
            title
            path {
                alias
            }
        }
    }
}

staff: allNodeStaff {
    edges {
        node {
            title
            path {
                alias
            }
        }
    }
}

categories: allTaxonomyTermCategory {
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

export default gatsbyNodePageQueries
