import { graphql } from "gatsby"

export const KCVVFluid1280 = graphql`
  fragment KCVVFluid1280 on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
    }
  }
`
