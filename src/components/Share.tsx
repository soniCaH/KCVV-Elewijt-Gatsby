import React from "react"
import { FacebookShareButton, TwitterShareButton } from "react-share"

import { ShareProps } from "../Types/ShareProps"
import "./Share.scss"

export const Share = ({ socialConfig, tags }: ShareProps) => (
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
      hashtags={tags.map(({ name }) => name)}
    >
      <i className={`fa fa-twitter`} /> Twitter
    </TwitterShareButton>
  </>
)
