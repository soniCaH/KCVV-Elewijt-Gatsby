import { graphql } from "gatsby";
import React, { Component, Fragment } from "react";

import { CardImage } from "../components/Card";
import Card from "../components/Card";
import KcvvTvOverview from "../components/KcvvTvOverview";
import MatchesOverview from "../components/MatchesOverview";
import MatchesSlider from "../components/MatchesSlider";
import MatchesTabs from "../components/MatchesTabs";
import UpcomingEvent from "../components/UpcomingEvent.tsx";
import { NewsItemFeatured, NewsItemCardRatio } from "../components/news-item";
import SEO from "../components/seo";
import MyMakro from "../images/tag-mymakro.png";
import Trooper from "../images/tag-trooper.png";
import Layout from "../layouts/index";

class IndexPage extends Component {
  renderMatchSlider = () => (
    <section className={`grid-container full`}>
      <MatchesSlider />
    </section>
  );

  renderMakroArticle = () => (
    <Card className={`medium-6 large-12 cell card`} title="MyMakro">
      <p>
        Link nu jouw Makro voordeelkaart aan onze vereniging. Bij elke aankoop
        bij Makro en partners steun je KCVV Elewijt!
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
  );

  renderWebsiteFeedbackArticle = () => (
    <Card
      className={`medium-6 large-12 cell card`}
      title="Website feedback"
      titleIcon="fa-commenting-o"
    >
      <p>
        Na lang zwoegen is onze nieuwe website eíndelijk online geraakt! We zijn
        heel benieuwd naar jullie mening of feedback. Als jullie vinden dat er
        iets ontbreekt, of als je bepaalde fouten tegenkomt, zouden we het ten
        zeerste appreciëren als je ons even iets laat weten op{` `}
        <a href="mailto:website@kcvvelewijt.be" className={`rich-link`}>
          website@kcvvelewijt.be
        </a>
        !
      </p>
    </Card>
  );
}

export const pageQuery = graphql`
  query {
    featuredPosts: allNodeArticle(
      filter: { status: { eq: true }, promote: { eq: true } }
      sort: { fields: created, order: DESC }
      limit: 12
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
    featuredPlayer: allNodePotw(
      sort: { fields: created, order: DESC }
      filter: { status: { eq: true } }
      limit: 1
    ) {
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
`;

export default IndexPage;
