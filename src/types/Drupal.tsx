import { IGatsbyImageData } from "gatsby-plugin-image"

export interface Pathalias {
  alias: string
}

interface Tags {
  name: string
  path: Pathalias
}

interface DaterangeField {
  value: string
  end_value: string
}

interface RelatedArticle {
  title: string
  path: Pathalias
  internal: { type: string }
}

export interface Article {
  path: Pathalias
  created: string
  body: { processed: string; summary: string }
  title: string
  relationships: {
    uid: { display_name: string }
    field_related_content: RelatedArticle[]
    field_media_article_image: {
      relationships: {
        field_media_image: {
          localFile: {
            childImageSharp: { gatsbyImageData: IGatsbyImageData }
          }
        }
      }
    }
    field_tags: Tags[]
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
