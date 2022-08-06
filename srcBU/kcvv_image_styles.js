import { graphql } from "gatsby"

export const KCVVFullWidth = graphql`
  fragment KCVVFullWidth on File {
    childImageSharp {
      gatsbyImageData(
        placeholder: DOMINANT_COLOR
        layout: FULL_WIDTH
        aspectRatio: 1.7777
        transformOptions: { cropFocus: ENTROPY }
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
      gatsbyImageData(width: 615, placeholder: TRACED_SVG, layout: CONSTRAINED)
    }
  }
`

export const KCVVFixedPlayerTeaser = graphql`
  fragment KCVVFixedPlayerTeaser on File {
    childImageSharp {
      gatsbyImageData(height: 480, placeholder: TRACED_SVG, layout: FIXED, tracedSVGOptions: { color: "#2d2d2d" })
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
