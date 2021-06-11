import { graphql } from "gatsby"

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
      gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
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
        transformOptions: { cropFocus: ATTENTION }
      )
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

export const KCVVFluid240 = graphql`
  fragment KCVVFluid240 on File {
    childImageSharp {
      gatsbyImageData(width: 240, placeholder: BLURRED, layout: CONSTRAINED)
    }
  }
`

export const KCVVFluid1280 = graphql`
  fragment KCVVFluid1280 on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
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
