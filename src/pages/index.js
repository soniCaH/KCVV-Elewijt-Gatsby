import React, { Component, Fragment } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/index"

import SEO from "../components/seo"
import MatchesOverview from "../components/MatchesOverview"
import MatchesSlider from "../components/MatchesSlider"
import MatchesTabs from "../components/MatchesTabs"
import { NewsItemFeatured, NewsItemCardRatio, KcvvTvCard } from "../components/news-item"
import { CardImage } from "../components/Card"
import UpcomingEvent from "../components/UpcomingEvent.tsx"
import PlayerFeatured from "../components/player--featured"

import MyMakro from "../images/tag-mymakro.png"
import Trooper from "../images/tag-trooper.png"
import Card from "../components/Card"
import { StaticImage } from "gatsby-plugin-image"

class IndexPage extends Component {
  renderMatchSlider = () => (
    <section className={`grid-container full`}>
      <MatchesSlider />
    </section>
  )
  renderSocialMediaArticle = () => (
    <article className={`medium-6 large-12 cell social`}>
      <div className={`social-sidebar__wrapper`}>
        <a
          href="https://facebook.com/KCVVElewijt"
          className="btn-social-counter btn-social-counter--fb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="btn-social-counter__icon">
            <i className="fa fa-facebook"></i>
          </div>
          <h5 className="btn-social-counter__title">Volg onze Facebook pagina</h5>
        </a>
        <a
          href="https://twitter.com/kcvve"
          className="btn-social-counter btn-social-counter--twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="btn-social-counter__icon">
            <i className="fa fa-twitter"></i>
          </div>
          <h5 className="btn-social-counter__title">Volg ons op Twitter</h5>
        </a>
        <a
          href="http://www.instagram.com/kcvve"
          className="btn-social-counter btn-social-counter--instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="btn-social-counter__icon">
            <i className="fa fa-instagram"></i>
          </div>
          <h5 className="btn-social-counter__title">Volg ons op Instagram</h5>
        </a>
      </div>
    </article>
  )
  renderBBQ = () => (
    <Card className={`medium-6 large-12 cell`} title="BBQ">
      <Link to="/bbq">
        <StaticImage src="../images/bbq2021-square.jpg" alt="BBQ" />
      </Link>
    </Card>
  )
  renderMakroArticle = () => (
    <Card className={`medium-6 large-12 cell card`} title="MyMakro">
      <p>
        Link nu jouw Makro voordeelkaart aan onze vereniging. Bij elke aankoop bij Makro en partners steun je KCVV
        Elewijt!
      </p>
      <p>
        <img src={MyMakro} alt="QR Code MyMakro" style={{ width: `100%` }} />
      </p>
      <p>
        Scan bovenstaande QR-code met je camera op GSM, of surf naar{` `}
        <a
          href="https://my.makro.be/nl/link-vereniging/02277464"
          target="_blank"
          rel="noopener noreferrer"
          title="MyMakro link voor KCVV Elewijt"
          className={`rich-link`}
        >
          https://my.makro.be/nl/link-vereniging/02277464
        </a>
        .
      </p>
      <p>Onze vereniging dankt jullie van harte!</p>
    </Card>
  )
  renderTrooperArticle = () => (
    <Card className={`medium-6 large-12 cell card`} title="Trooper">
      <p>
        Trooper werkt samen met een groot aantal webshops die zich in de kijker willen zetten. In ruil voor een extra
        klik via Trooper krijgen wij een percentje op jouw volgende bestelling.
      </p>
      <p>
        <img src={Trooper} alt="QR Code Trooper" style={{ width: `100%` }} />
      </p>
      <p>
        Scan bovenstaande QR-code met je camera op GSM, of surf naar{` `}
        <a
          href="https://trooper.be/kcvvelewijt"
          target="_blank"
          rel="noopener noreferrer"
          title="Trooper link voor KCVV Elewijt"
          className={`rich-link`}
        >
          https://trooper.be/kcvvelewijt
        </a>
        .
      </p>
      <p>
        <a href="/news/2020-04-12-steun-kcvv-elewijt-trooper-mymakro" className={`rich-link`}>
          Lees er hier meer over!
        </a>
      </p>
    </Card>
  )
  renderYouthCalendarArticle = () => (
    <Card className={`medium-6 large-12 cell`} title="Jeugdploegen" hasTable={true}>
      <MatchesOverview exclude={[`1`, `2`]} action="next" />
    </Card>
  )

  renderBTeamCalendarArticle = () => (
    <Card className={`medium-6 large-12 cell`} title="The B-Team" hasTable={true}>
      <MatchesTabs teamId="2" />
    </Card>
  )
  renderATeamCalendarArticle = () => (
    <Card className={`medium-6 large-12 cell`} title="The A-Team" hasTable={true}>
      <MatchesTabs teamId="1" />
    </Card>
  )

  renderTablebooker = () => (
    <>
      <Card className={`medium-6 large-12 cell card`} title="Mosselfestijn" titleIcon="fa-cutlery">
        <p>
          Op vrijdag 9, zaterdag 10 en zondag 11 oktober 2020 vindt ons jaarlijkse Mosselfestijn weer plaats. Om de
          spreiding te kunnen garanderen en wachttijden aan de ingang zoveel mogelijk te beperken werken we dit jaar met
          een reservatiesysteem. Hieronder kan je zelf jouw gewenste tijdstip en gezelschap selecteren en een tafel
          boeken (voor 07/10/2020).
        </p>
        <p>
          Telefonisch reserveren kan dagelijks tussen 18u en 21u op het nummer
          {` `}
          <a href="tel:+32498735984">0498.73.59.84</a>
        </p>
        <p>
          Ter plaatse een tafel vragen kan, naargelang de beschikbaarheid op dat moment, maar hou er rekening mee dat we
          onze capaciteit hebben moeten verlagen om aan de regelgeving te kunnen voldoen. Wie zeker wil zijn van zijn
          plek kan beter reserveren.
        </p>
      </Card>
      <article className={`medium-6 large-12 cell tablebooker`}>
        <tbkr-bm-widget
          restaurant-id="34742560"
          source="website"
          use-modal="0"
          lang="nl"
          theme="light"
        ></tbkr-bm-widget>
        <script src="https://reservations.tablebooker.com/tbkr-widget-import.min.js"></script>
      </article>
    </>
  )

  renderWebsiteFeedbackArticle = () => (
    <Card className={`medium-6 large-12 cell card`} title="Website feedback" titleIcon="fa-commenting-o">
      <p>
        Na lang zwoegen is onze nieuwe website eíndelijk online geraakt! We zijn heel benieuwd naar jullie mening of
        feedback. Als jullie vinden dat er iets ontbreekt, of als je bepaalde fouten tegenkomt, zouden we het ten
        zeerste appreciëren als je ons even iets laat weten op{` `}
        <a href="mailto:website@kcvvelewijt.be" className={`rich-link`}>
          website@kcvvelewijt.be
        </a>
        !
      </p>
    </Card>
  )
  renderExtraContentFooter = (preseason) => (
    <section className="grid-container site-content">
      <div className="grid-x grid-margin-x">
        <section className={`cell large-12 featured-article`}>
          <CardImage title="Update voorbereiding 2020-2021" picture={preseason} link="/games" metadata={false} />
        </section>
      </div>
    </section>
  )

  // convertGraphqlToPlayerObject = (player) => {
  //   return {
  //     nameFirst: player.field_firstname,
  //     nameLast: player.field_lastname,
  //     shirtNr: player.field_shirtnumber,
  //     position: player.field_position,
  //     imageSrc:
  //       player.relationships.field_image.localFile.childImageSharp.fixed.src,
  //     link: player.path.alias,
  //   }
  // }

  // renderPlayerOfTheWeek = (featuredPlayer) =>
  //   featuredPlayer.edges.map(
  //     ({ node: potw }) =>
  //       potw.relationships.field_player && (
  //         <article
  //           className={"medium-6 large-12 cell card"}
  //           key={potw.relationships.field_player.field_firstname}
  //         >
  //           <header className={"card__header"}>
  //             <h4>Speler van de week</h4>
  //           </header>
  //           <PlayerFeatured
  //             player={this.convertGraphqlToPlayerObject(
  //               potw.relationships.field_player
  //             )}
  //           />
  //         </article>
  //       )
  //   )

  renderPosts = (posts) => {
    let articleCount = 0
    let kcvvTvCount = 0

    return posts.map(({ node }, i) => {
      switch (node.internal.type) {
        case `node__article`:
          node.field_featured && (articleCount = articleCount + 2)
          !node.field_featured && articleCount++
          return (
            <Fragment key={i}>
              {node.field_featured && <NewsItemFeatured node={node} />}
              {!node.field_featured && <NewsItemCardRatio node={node} teaser={true} />}
            </Fragment>
          )
        case `node__kcvv_tv`:
          if (kcvvTvCount === 0) {
            articleCount = articleCount + 2
            kcvvTvCount++
            return (
              <CardImage
                title={node.title}
                picture={node.relationships.field_media_article_image.relationships.field_media_image.localFile}
                link={node.field_website.uri}
                metadata={false}
                key={i}
              />
            )
          } else {
            articleCount = articleCount + 2
            kcvvTvCount++
            return <KcvvTvCard node={node} teaser={true} key={i} />
          }

        default:
          return ``
      }
    })
  }

  combineAndSortPosts = (featuredPosts, kcvvTv) => {
    return [...featuredPosts.edges, ...kcvvTv.edges].sort((a, b) =>
      a.node.timestamp < b.node.timestamp ? 1 : b.node.timestamp < a.node.timestamp ? -1 : 0
    )
  }

  renderLayoutSidebar = () => {
    const { featuredPlayer } = this.props.data
    return (
      <>
        {/* TABLEBOOKER WIDGET */}
        {/* { this.renderTablebooker() } */}
        {this.renderBBQ()}

        {/* A TEAM OVERVIEW - SUMMARY OF MATCHES AND RANKING*/}
        {this.renderATeamCalendarArticle()}

        {/* B TEAM OVERVIEW - SUMMARY OF MATCHES AND RANKING */}
        {this.renderBTeamCalendarArticle()}

        {/* YOUTH TEAMS OVERVIEW - SUMMARY OF UPCOMING MATCHES */}
        {this.renderYouthCalendarArticle()}

        {/* PLAYER OF THE WEEK ARTICLE IF ANY */}
        {/* {featuredPlayer && this.renderPlayerOfTheWeek(featuredPlayer)} */}

        {/* INFO ARTICLE WITH SOCIAL MEDIA LINKS */}
        {this.renderSocialMediaArticle()}

        {/* INFO ARTICLE WITH REQUEST FOR WEBSITE FEEDBACK */}
        {this.renderWebsiteFeedbackArticle()}

        {/* INFO ARTICLE WITH "TROOPER" CONTENT */}
        {this.renderTrooperArticle()}

        {/* INFO ARTICLE WITH "MYMAKRO" CONTENT */}
        {this.renderMakroArticle()}
      </>
    )
  }

  renderLayoutMain = () => {
    const { featuredPosts, kcvvTv } = this.props.data
    const posts = this.combineAndSortPosts(featuredPosts, kcvvTv)

    return (
      <>
        <UpcomingEvent />

        {posts && this.renderPosts(posts)}
      </>
    )
  }

  render() {
    return (
      <Layout>
        <SEO
          lang="nl-BE"
          title="Er is maar één plezante compagnie"
          description="Startpagina van stamnummer 00055: KCVV Elewijt."
        />
        {/* {this.renderExtraContentFooter(this.props.data.preseason)} */}

        <section className="grid-container site-content">
          {/* LIMITED-WIDTH CONTAINER WITH EXTRA (STICKY) CONTENT, IF ANY */}

          <div className="grid-x grid-margin-x">
            <section className="cell large-8 news_overview__wrapper">
              {/* MAIN CONTENT AREA */}
              {this.renderLayoutMain()}
            </section>
            <aside className="cell large-4">
              <section className="grid-x featured__matches grid-margin-x">
                {/* SIDEBAR CONTENT */}
                {this.renderLayoutSidebar()}
              </section>
            </aside>
          </div>
        </section>

        {/* FULL-WIDTH SLICK SLIDER WITH UPCOMING MATCHES */}
        {this.renderMatchSlider()}
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    featuredPosts: allNodeArticle(
      filter: { status: { eq: true }, promote: { eq: true } }
      sort: { fields: created, order: DESC }
      limit: 10
    ) {
      edges {
        node {
          id
          path {
            alias
          }
          created(formatString: "D/M/YYYY")
          changed(formatString: "D/M/YYYY")
          timestamp: changed(formatString: "x")
          title
          promote
          status
          field_featured
          body {
            value
            format
            processed
            summary
          }
          relationships {
            field_media_article_image {
              ...ArticleImage
            }
            field_tags {
              name
              path {
                alias
              }
            }
          }
          internal {
            type
          }
        }
      }
    }
    preseason: file(name: { eq: "preseason2020-2021" }) {
      ...KCVVFluid960
    }
    kcvvTv: allNodeKcvvTv(
      filter: { status: { eq: true }, promote: { eq: true } }
      sort: { fields: created, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          created(formatString: "D/M/YYYY")
          title
          timestamp: created(formatString: "x")
          relationships {
            field_media_article_image {
              ...ArticleImage
            }
          }
          field_website {
            uri
          }
          internal {
            type
          }
        }
      }
    }
    featuredPlayer: allNodePotw(sort: { fields: created, order: DESC }, filter: { status: { eq: true } }, limit: 1) {
      edges {
        node {
          relationships {
            field_player {
              field_firstname
              field_lastname
              field_shirtnumber
              field_position
              relationships {
                field_image {
                  localFile {
                    ...KCVVFixedPlayerTeaser
                  }
                }
              }
              path {
                alias
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
