import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Masonry, MasonryItem } from 'react-masonry-responsive'
import Img from 'gatsby-image'

class Gallery extends React.Component {
  render() {
    const { images } = this.props.data
    const imagesRendered = images.edges.map(image => { 
        console.log(image.node);
        const img = {
            key: image.node.childImageSharp.src,
            node: <Img fluid={image.node.childImageSharp.fluid} />
        }
        
        return img
    });

    return (
      <div>
        <h1>HALLO</h1>

        <Masonry items={imagesRendered} minColumnWidth={128} />
      </div>
    )
  }
}

const query = graphql`
  query GalleryQuery {
    images: allFile(
      filter: { fields: { SocialMedia: { eq: "true" }, type: { ne: "video" } } }
      sort: { fields: [fields___created], order: DESC }
      limit: 20
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
        }
      }
    }
  }
`

export default () => (
  <StaticQuery query={query} render={data => <Gallery data={data} />} />
)
