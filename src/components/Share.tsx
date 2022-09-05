import { ShareProps } from "../Types/ShareProps"
import Icon from "./Icon"
import "./Share.scss"
import React from "react"
import { FacebookShareButton, TwitterShareButton } from "react-share"

export const Share = ({ socialConfig, tags }: ShareProps) => (
  <>
    <span className={`social-share-title`}>Delen op: </span>
    <FacebookShareButton url={socialConfig.config.url} className="social-share-btn is-outlined is-rounded facebook">
      <Icon icon="fa-facebook-f" /> Facebook
    </FacebookShareButton>
    <TwitterShareButton
      url={socialConfig.config.url}
      className="social-share-btn is-outlined is-rounded twitter"
      title={socialConfig.config.title}
      via={socialConfig.twitterHandle.split(`@`).join(``)}
      hashtags={tags.map(({ name }) => name)}
    >
      <Icon icon="fa-twitter" /> Twitter
    </TwitterShareButton>
  </>
)
