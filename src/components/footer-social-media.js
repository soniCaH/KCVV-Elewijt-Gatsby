import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import {truncate} from '../script/helper'
import './footer-social-media.scss'

class FooterSocialMedia extends React.Component {
  _renderPosts = () => {
    const { images } = this.props.data
    let key = 0;

    return images.edges.map(image => {
      const source = image.node.fields.InstagramImage ? 'instagram' : 'facebook'
      const title = truncate.apply(image.node.fields.caption, [150, true]);

      return (
        <li className={`posts__item--category--${source} posts__item`} key={key++}>
          <figure className={'posts__thumb'}>
            {image.node.fields.link ? (
              <a
                href={image.node.fields.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img fluid={image.node.childImageSharp.fluid} />
              </a>
            ) : (
              <Img fluid={image.node.childImageSharp.fluid} />
            )}
          </figure>
          <div className={"posts__inner"}>
            <div className={"posts__cat"}>
              <span className={"label posts__cat-label"}>{source}</span>
            </div>
            <h6 className={'posts__title'}>
              {image.node.fields.link ? (
                <a
                  href={image.node.fields.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
              ) : (
                { title }
              )}
            </h6>
          </div>
        </li>
      )
    })
  }

  render() {
    return <ul className={'posts posts--simple-list footer-social-media'}>{this._renderPosts()}</ul>
  }
}

const query = graphql`
  query SocialMediaPosts {
    images: allFile(
      filter: { fields: { SocialMedia: { eq: "true" }, type: { ne: "video" } } }
      sort: { fields: [fields___created], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 150) {
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
            created
            InstagramImage
            FacebookImage
            link
            caption
          }
        }
      }
    }
  }
`

export default () => (
  <StaticQuery
    query={query}
    render={data => <FooterSocialMedia data={data} />}
  />
)
