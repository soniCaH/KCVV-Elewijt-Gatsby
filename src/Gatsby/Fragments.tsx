import { graphql } from "gatsby"

export const KCVVFluid960 = graphql`
  fragment KCVVFluid960 on File {
    childImageSharp {
      gatsbyImageData(
        width: 960
        placeholder: DOMINANT_COLOR
        layout: CONSTRAINED
        aspectRatio: 1.5
        transformOptions: { cropFocus: ENTROPY }
      )
    }
  }
`

export const KCVVFluid240 = graphql`
  fragment KCVVFluid240 on File {
    childImageSharp {
      gatsbyImageData(width: 240, placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
`

export const KCVVFluid480 = graphql`
  fragment KCVVFluid480 on File {
    childImageSharp {
      gatsbyImageData(width: 480, placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
`

export const KCVVHeroImage = graphql`
  fragment KCVVHeroImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
    }
  }
`

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

  fragment SponsorImage on media__image {
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
`
