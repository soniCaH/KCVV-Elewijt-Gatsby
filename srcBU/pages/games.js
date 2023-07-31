import React, { Component } from "react";

import MatchesOverview from "../components/MatchesPreseason";
import SEO from "../components/seo";
import Layout from "../layouts/index";

class GamesPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          lang="nl-BE"
          title="Matchoverzicht voorbereiding"
          description="Overzicht van alle gespeelde en toekomstige wedstrijden tijdens de voorbereiding van het nieuwe seizoen."
          path={this.props.location.pathname}
        />
        <div className={`games__template`}>
          <MatchesOverview />
        </div>
      </Layout>
    );
  }
}

export default GamesPage;
