import { IGatsbyImageData } from "gatsby-plugin-image"

export interface SponsorNode {
  node: Sponsor
}

export interface Sponsor {
  title: string
  field_type: string
  field_website: {
    uri: string
  }
  relationships: {
    field_media_image: {
      field_media_image: {
        alt: string
      }
      relationships: {
        field_media_image: {
          localFile: {
            childImageSharp: { gatsbyImageData: IGatsbyImageData }
          }
        }
      }
    }
  }
}
