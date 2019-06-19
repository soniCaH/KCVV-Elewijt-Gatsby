import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

/**
 * Render a feed of facebook images.
 *
 * Images will be retrieved from our graphql index.
 */
class Facebook extends React.Component {
  _renderImages = () => {
    // Result from our graphql query.
    const { images } = this.props.data

    return images.edges.map(image => (
      <div style={{ margin: 16 }} key={image.node.id}>
        <Img fluid={image.node.childImageSharp.fluid} />
      </div>
    ))
  }

  render() {
    return (
      <div
        className="InstaFeed"
      >
        {this._renderImages()}
      </div>
    )
  }
}

export const query = graphql`
  query FacebookImage {
    images: allFile(
      filter: { fields: { FacebookImage: { eq: "true" } } }
      sort: { fields: [fields___created], order: DESC }
    ) {
      edges {
        node {
          childImageSharp {
              fluid(maxWidth: 250) {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          id
          fields {
            link
            caption
            likes
          }
        }
      }
    }
  }
`

export default () => (
  <StaticQuery query={query} render={data => <Facebook data={data} />} />
)
