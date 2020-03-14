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
