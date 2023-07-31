import { graphql, Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import { CardHorizontal } from "../components/Card"
import { MatchesOverview } from "../components/MatchesOverview"
import { Seo } from "../components/Seo"
import Layout from "../layouts"
import { JeugdPageProps } from "../Types/PageProps"
import "./jeugd.scss"

const JeugdPage = ({ data: { leerplan, allNodeTeam } }: JeugdPageProps) => {
  return (
    <Layout>
      <header className="page_header__wrapper">
        <div className="page_header">
          <h1>Jeugdwerking KCVV Elewijt</h1>
        </div>
      </header>
      <div className="page__wrapper page__wrapper--limited page__section page__youth">
        <h2 className="featured-border">Jeugdploegen</h2>
        <section className="youth__teams_list">
          {allNodeTeam.edges.map(({ node }) => {
            const heroImage = node?.relationships?.field_media_article_image
            const teamPicture = heroImage?.relationships?.field_media_image?.localFile?.childImageSharp
              ?.gatsbyImageData && (
              <GatsbyImage
                image={heroImage.relationships?.field_media_image?.localFile?.childImageSharp?.gatsbyImageData}
                alt={heroImage?.field_media_image?.alt || ``}
                className={`team-detail__team-picture`}
                objectFit="cover"
              />
            )
            return (
              <div className="youth__teams_list__item">
                <h3 className="after-border">{node.title}</h3>
                <Link to={node?.path?.alias || ``}>
                  {teamPicture || (
                    <StaticImage
                      layout="fullWidth"
                      src={`../images/empty-lineup.jpg`}
                      alt={`${node.title}`}
                      placeholder={`blurred`}
                      objectFit="cover"
                      aspectRatio={1.777777777}
                      transformOptions={{ cropFocus: `attention` }}
                    />
                  )}
                </Link>
              </div>
            )
          })}
        </section>

        {leerplan?.childImageSharp?.gatsbyImageData && (
          <>
            <h2 className="featured-border">Meer info</h2>
            <section>
              <CardHorizontal
                title="Leerplannen voor de jeugdwerking"
                picture={leerplan?.childImageSharp?.gatsbyImageData}
                link="/news/2019-08-08-leerplan-kcvv-elewijt-jeugd"
                body="Het jeugdbestuur legt aan de hand van dit document uit waar onze jeugdwerking voor staat en hoe de aanpak zal verlopen."
              />
            </section>
          </>
        )}
        <section>
          <h2 className="featured-border">Volgende wedstrijden</h2>
          <MatchesOverview exclude={[`1`, `2`]} />
        </section>
      </div>
    </Layout>
  )
}

export const Head = () => {
  return <Seo title="Jeugdwerking" description="Jeugdwerking van KCVV Elewijt" path="/jeugd/" />
}

export const pageQuery = graphql`
  query JeugdPage {
    leerplan: file(name: { eq: "leerplan_header" }) {
      ...KCVVFullWidth
    }
    allNodeTeam(filter: { field_vv_id: { ne: null, nin: ["1", "2"] } }, sort: { field_fb_id_2: ASC }) {
      edges {
        node {
          path {
            alias
          }
          field_vv_id
          title
          relationships {
            field_media_article_image {
              ...FullImage
              field_media_image {
                alt
              }
            }
          }
        }
      }
    }
  }
`

export default JeugdPage
