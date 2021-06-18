import { IGatsbyImageData } from "gatsby-plugin-image"
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

export interface CardTeaserBodyProps {
  title: string
  icon?: string
  body?: string
}

export interface CardTeaserHeaderProps {
  title: string
  image: IGatsbyImageData
}

export interface CardTeaserFooterProps {
  tags: CardTags[]
  createTime: string
}

export interface CardImageProps {
  title: string
  picture: IGatsbyImageData
  link: string
  body?: string
}

export interface CardImageHeaderProps {
  title: string
  image: IGatsbyImageData
  body?: string
}

export interface CardImageOnlyProps {
  picture: IGatsbyImageData
  link: string
}

export interface CardTeaserVerticalProps {
  title: string
  picture: IGatsbyImageData
  link: string
}

interface CardTags {
  path: Pathalias
  name: string
}

interface Pathalias {
  alias: string
}
