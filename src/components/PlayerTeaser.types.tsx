import { IGatsbyImageData } from "gatsby-plugin-image"

export interface PlayerTeaserProps {
  url: string
  position: string
  first_name: string
  last_name: string
  picture?: IGatsbyImageData
}
