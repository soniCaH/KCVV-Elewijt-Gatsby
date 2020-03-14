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
