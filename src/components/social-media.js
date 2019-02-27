import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

class Instagram extends React.Component {
  _renderImages = () => {
    const { images } = this.props.data

    return images.edges.map(image => {
      let link = image.node.fields.link ? image.node.fields.link : '/index.html'

      return (
        <div key={image.node.id} className="small-4 columns">
          <a href={link}>
            <Img fluid={image.node.childImageSharp.fluid} />
          </a>
        </div>
      )
    })
  }

  render() {
    return <div className="InstaFeed">{this._renderImages()}</div>
  }
}


const query = graphql`
  query SocialMediaImage {
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
          id
          fields {
            link
            caption
          }
        }
      }
    }
  }
`

export default () => (
  <StaticQuery query={query} render={data => <Instagram data={data} />} />
)
