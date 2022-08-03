import { IGatsbyImageData } from "gatsby-plugin-image"

import { Pathalias } from "./Drupal"

export interface CardTeaserProps {
  title: string
  icon?: string
  body?: string
  picture: IGatsbyImageData
  link: string
  metadata?: boolean
  tags?: CardTags[]
  createTime?: string
}

export interface CardImageOnlyProps {
  picture: IGatsbyImageData
  link: string
}

interface CardTags {
  path: Pathalias
  name: string
}
