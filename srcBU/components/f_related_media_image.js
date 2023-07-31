import { graphql } from "gatsby";

export const query = graphql`
  fragment ArticleImage on media__image {
    relationships {
      field_media_image {
        localFile {
          ...KCVVFluid960
        }
      }
    }
  }

  fragment ArticleImageSmall on media__image {
    relationships {
      field_media_image {
        localFile {
          ...KCVVFluid240
        }
      }
    }
  }

  fragment HeroImage on media__image {
    relationships {
      field_media_image {
        localFile {
          ...KCVVHeroImage
        }
      }
    }
  }
`;
