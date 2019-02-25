import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

// https://www.wildsmithstudio.com/blog/remote-images-with-gatsby/

class FacebookPost extends React.Component {
  render() {

    let { post } = this.props
    let postPicture = post.full_picture
    let postText = post.message
      ? post.message.length > 200
        ? `${post.message.substring(0, 150)}...`
        : post.message
      : ''
    return postPicture ? (
      <article className="facebook-stream--item small-4 columns">
        <img
          src={postPicture.childImageSharp.fluid}
          onError={e => {
            e.target.onerror = null
            e.target.src = post.picture
          }}
          alt={postText}
        />
      </article>
    ) : ''
  }
}

class Facebook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: true,
    }

    this.baseUrl = 'https://graph.facebook.com/v2.11/'
    this.fbAccessToken = props.config.site.siteMetadata.fbAccessToken
    this.refreshRate = props.config.site.siteMetadata.refreshRate
    this.timeout = {}
  }

  updateData() {
    let { page } = this.props

    console.log(`Fetching facebook for ${page}`)

    fetch(
      `${this.baseUrl +
        page}/posts?fields=full_picture,updated_time&limit=12&access_token=${
        this.fbAccessToken
      }`
    )
      .then(response => response.json())
      .then(json => this.setState({ data: json, loading: false }))

    this.timeout = setTimeout(() => {
      this.updateData(() => {
        console.log('Updating facebook.')
      })
    }, this.refreshRate)
  }

  componentDidMount() {
    this.updateData()

    // let streamClass = '.facebook-stream--' + this.props.page

    // setTimeout(function() {
    //   var elem = document.querySelector(streamClass)

    //   console.log(elem)

    //   var msnry = new Masonry(elem, {
    //     // options
    //     itemSelector: '.facebook-stream--item',
    //     columnWidth: '.facebook-stream--item',
    //     percentPosition: true,
    //   })
    // }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.timeout)
  }

  render() {
    if (this.state.loading === false && this.state.data) {
      return (
        <div className={`facebook-stream facebook-stream--${this.props.page} grid-x`}>
          {this.state.data.data.map((post, i) => (
            <FacebookPost post={post} key={i} />
          ))}
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const query = graphql`
  query {
    site {
      siteMetadata {
        refreshRate
        fbAccessToken
      }
    }
  }
`

export default ({ page = 'KCVVElewijt' }) => (
  <StaticQuery
    query={query}
    render={data => <Facebook config={data} page={page} />}
  />
)
