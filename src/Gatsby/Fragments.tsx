import { graphql } from "gatsby"

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

export const KCVVFluid480AR = graphql`
  fragment KCVVFluid480AR on File {
    childImageSharp {
      gatsbyImageData(
        width: 480
        placeholder: DOMINANT_COLOR
        layout: CONSTRAINED
        aspectRatio: 1.5
        transformOptions: { cropFocus: ENTROPY }
      )
    }
  }
`

export const KCVVFullWidth = graphql`
  fragment KCVVFullWidth on File {
    childImageSharp {
      gatsbyImageData(
        placeholder: DOMINANT_COLOR
        layout: FULL_WIDTH
        aspectRatio: 1.7777
        transformOptions: { cropFocus: ATTENTION }
      )
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

export const KCVVMaxWidth = graphql`
  fragment KCVVMaxWidth on File {
    childImageSharp {
      gatsbyImageData(width: 1440, placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
    }
  }
`

export const KCVVFluidPlayerTeaser = graphql`
  fragment KCVVFluidPlayerTeaser on File {
    childImageSharp {
      gatsbyImageData(width: 615, placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
`

export const KCVVFixedPlayerTeaser = graphql`
  fragment KCVVFixedPlayerTeaser on File {
    childImageSharp {
      gatsbyImageData(height: 480, placeholder: BLURRED, layout: FIXED)
    }
  }
`

export const KCVVFixedPlayerTeaserShare = graphql`
  fragment KCVVFixedPlayerTeaserShare on File {
    childImageSharp {
      gatsbyImageData(height: 1000, placeholder: BLURRED, layout: FIXED)
    }
  }
`

export const query = graphql`
  fragment ArticleImage on media__image {
    relationships {
      field_media_image {
        localFile {
          ...KCVVFluid480AR
        }
      }
    }
  }

  fragment ArticleImageLarge on media__image {
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

  fragment MaxWidth on media__image {
    relationships {
      field_media_image {
        localFile {
          ...KCVVMaxWidth
        }
      }
    }
  }

  fragment FullImage on media__image {
    relationships {
      field_media_image {
        localFile {
          ...KCVVFullWidth
        }
      }
    }
  }
`
