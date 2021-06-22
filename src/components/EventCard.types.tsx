import { IGatsbyImageData } from "gatsby-plugin-image"

export interface EventCardProps {
  title: string
  picture: IGatsbyImageData
  link: string
  datetimeStart: string
  datetimeEnd: string
}
