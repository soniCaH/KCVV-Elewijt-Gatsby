import { graphql } from "gatsby"

export const KCVVFluid960 = graphql`
  fragment KCVVFluid960 on File {
    childImageSharp {
      fluid(maxWidth: 960) {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
`

export const KCVVFluid480 = graphql`
  fragment KCVVFluid480 on File {
    childImageSharp {
      fluid(maxWidth: 480) {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
`

export const KCVVFluid240 = graphql`
  fragment KCVVFluid240 on File {
    childImageSharp {
      fluid(maxWidth: 240) {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
`

export const KCVVFluid1280 = graphql`
  fragment KCVVFluid1280 on File {
    childImageSharp {
      fluid(maxWidth: 1280, quality: 75) {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
`

export const KCVVFluidPlayerTeaser = graphql`
  fragment KCVVFluidPlayerTeaser on File {
    childImageSharp {
      fluid(maxWidth: 615) {
        tracedSVG
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
`

export const KCVVFixedPlayerTeaser = graphql`
  fragment KCVVFixedPlayerTeaser on File {
    childImageSharp {
      fixed(height: 480) {
        tracedSVG
        width
        height
        src
        srcSet
      }
    }
  }
`
