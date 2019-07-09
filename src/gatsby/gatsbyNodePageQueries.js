const gatsbyNodePageQueries = `
articles: allNodeArticle(sort: {fields: created, order: DESC}) {
    edges {
        node {
            title
            created(formatString: "DD/MM/YYYY")
            body {
                processed
            }
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
`

module.exports = gatsbyNodePageQueries
