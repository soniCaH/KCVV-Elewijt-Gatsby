const gatsbyNodePageQueries = `
articles: allNodeArticle {
    edges {
        node {
            title
            created(formatString: "d/m/Y")
            body {
                processed
            }
            path {
                alias
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
