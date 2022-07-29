import { getImage } from "gatsby-plugin-image"
import React, { FunctionComponent } from "react"

import { CardTeaserProps } from "../Types/Card"

export const CardTeaser: FunctionComponent<CardTeaserProps> = ({ title }) => {
  // const image = getImage(picture)

  return <article className={`cardItem`}>{title}</article>
}

CardTeaser.defaultProps = {
  icon: undefined,
  body: undefined,
  metadata: false,
  tags: [],
  createTime: undefined,
}
