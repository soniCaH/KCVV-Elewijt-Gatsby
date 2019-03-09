import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { truncate } from '../script/helper'
import './footer-social-media.scss'

class FooterSocialMedia extends React.Component {
  _renderPosts = () => {
    const { images } = this.props.data

    return images.edges.map(({ node }, i) => {
      const source = node.fields.InstagramImage ? 'instagram' : 'facebook'
      const title = truncate
        .apply(node.fields.caption, [150, true])
        .replace(/[ ]*\n/g, '<br />\n')

      console.log(node)

      return (
        <li className={`posts__item--category--${source} posts__item`} key={i}>
          <figure className={'posts__thumb'}>
            {node.fields.link ? (
              <a
                href={node.fields.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img
                  fluid={{
                    ...node.childImageSharp.fluid,
                    aspectRatio: 4 / 3,
                  }}
                />
              </a>
            ) : (
              <Img
                fluid={{
                  ...node.featured_media.localFile.childImageSharp.fluid,
                  aspectRatio: 4 / 3,
                }}
              />
            )}
          </figure>
          <div className={'posts__inner'}>
            <div className={'posts__cat'}>
              <span className={'label posts__cat-label'}>{source}</span>
            </div>
            {node.fields.link ? (
              <h6 className={'posts__title'}>
                <a
                  href={node.fields.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </h6>
            ) : (
              <h6
                className={'posts__title'}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className={'posts posts--simple-list footer-social-media'}>
        {this._renderPosts()}
      </ul>
    )
  }
}

const query = graphql`
  query SocialMediaPosts {
    images: allFile(
      filter: { fields: { SocialMedia: { eq: "true" }, type: { ne: "video" } } }
      sort: { fields: [fields___created], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 615) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
