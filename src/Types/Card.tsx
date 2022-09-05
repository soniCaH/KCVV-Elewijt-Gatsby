import { IGatsbyImageData } from "gatsby-plugin-image"

import { Pathalias } from "./Drupal"

export interface CardProps {
  title: string
  className?: string
  hasTable?: boolean
  titleIcon?: string
}

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

export interface CardImageProps {
  title: string
  picture: IGatsbyImageData
  link?: string
  body?: string
}

export interface CardImageOnlyProps {
  picture: IGatsbyImageData
  link: string
}

interface CardTags {
  path: Pathalias
  name: string
}
