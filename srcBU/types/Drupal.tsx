import { IGatsbyImageData } from "gatsby-plugin-image"



interface DaterangeField {
  value: string
  end_value: string
}

export interface KcvvTv {
  created: string
  title: string
  timestamp: string
  relationships: {
    field_media_article_image: {
      relationships: {
        field_media_image: {
          localFile: {
            childImageSharp: { gatsbyImageData: IGatsbyImageData }
          }
        }
      }
    }
  }
  field_website: {
    uri: string
  }
}

export interface Event {
  field_daterange: DaterangeField
  field_event_link: { uri: string }
  title: string
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

export interface Player {
  path: Pathalias
  body: {
    processed: string
  }
  title: string
  field_join_date?: string
  field_date_leave?: string
  field_lastname: string
  field_position: string
  field_firstname: string
  field_birth_date?: string
  field_shirtnumber?: number
  field_vv_id?: string
  relationships?: {
    node__article?: {
      title: string
      timestamp: number
      path: Pathalias
      relationships?: {
        field_media_article_image: {
          localFile: {
            childImageSharp: { gatsbyImageData: IGatsbyImageData }
          }
        }
      }
    }
    node__team?: {
      title: string
      relationships: {
        field_media_article_image: {
          localFile: {
            childImageSharp: { gatsbyImageData: IGatsbyImageData }
          }
        }
      }
      path: Pathalias
    }
    field_image: {
      localFile: {
        childImageSharp: { gatsbyImageData: IGatsbyImageData }
      }
    }
    field_image_celebrate?: {
      localFile?: {
        childImageSharp: { gatsbyImageData: IGatsbyImageData }
      }
    }
  }
}

export interface TeamShort {
  field_division_full?: string
  field_vv_id: string
  title: string
}

export interface PlayerShort {
  field_vv_id?: string
  field_firstname: string
  field_lastname: string
  path: Pathalias
}
