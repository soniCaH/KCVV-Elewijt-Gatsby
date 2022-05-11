import PropTypes from "prop-types"
import React from "react"
import { FacebookShareButton, TwitterShareButton } from "react-share"

import "./share.scss"

const Share = ({ socialConfig, tags }) => (
  <>
    <span className={`social-share-title`}>Delen op: </span>
    <FacebookShareButton url={socialConfig.config.url} className="social-share-btn is-outlined is-rounded facebook">
      <i className={`fa fa-facebook-f`} /> Facebook
    </FacebookShareButton>
    <TwitterShareButton
      url={socialConfig.config.url}
      className="social-share-btn is-outlined is-rounded twitter"
      title={socialConfig.config.title}
      via={socialConfig.twitterHandle.split(`@`).join(``)}
      hashtags={tags}
    >
      <i className={`fa fa-twitter`} /> Twitter
    </TwitterShareButton>
  </>
)

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterHandle: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
}
Share.defaultProps = {
  tags: [],
}

export default Share
