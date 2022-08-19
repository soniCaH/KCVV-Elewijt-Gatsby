import { graphql } from "gatsby"

export const KCVVFluid1280 = graphql`
  fragment KCVVFluid1280 on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
    }
  }
`

export const KCVVFixedPlayerTeaserShare = graphql`
  fragment KCVVFixedPlayerTeaserShare on File {
    childImageSharp {
      gatsbyImageData(height: 1000, placeholder: TRACED_SVG, layout: FIXED, tracedSVGOptions: { color: "#2d2d2d" })
    }
  }
`
