import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import moment from "moment";
import React, { Component, Fragment } from "react";

import Icon from "../components/Icon";
import RelatedNews from "../components/RelatedNews";
import iconCardRed from "../images/i_card_red.png";
import iconCardYellow from "../images/i_card_yellow.png";
import iconCleansheet from "../images/i_cleansheet.png";
import iconGoal from "../images/i_goal.png";
import { mapPositionCode } from "../scripts/helper";
import Card from "./Card";
import "./player.scss";

// eslint-disable-next-line
String.prototype.replaceAll = function (search, replacement) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  var target = this;
  return target.replace(new RegExp(search, `g`), replacement);
};

/**
 */
class PlayerDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
    };

    const {
      config: {
        site: {
          siteMetadata: { kcvvPsdApi },
        },
      },
      player: { field_vv_id: playerId },
    } = this.props;

    this.kcvvPsdApi = kcvvPsdApi;
    this.playerId = playerId;
  }

  updateData() {
    if (this.playerId === null) {
      return;
    }

    const apiUrl = `${this.kcvvPsdApi}/stats/player/${this.playerId}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => this.setState({ data: json, loading: false }))
      .catch(() => this.setState({ data: {}, loading: false }));
  }

  componentDidMount() {
    this.updateData();
  }

  renderPlayerName = (player) => (
    <h1 className={`player-detail__name`}>
      <span className={`player-detail__name-first`}>
        {player.field_firstname}
      </span>
      <span className={`player-detail__name-last`}>
        {player.field_lastname}
      </span>
    </h1>
  );
  renderPlayerImage = (player) => (
    <div className={`bg-green-mask`}>
      <div
        className={`player-detail__bg-avatar`}
        style={
          player.relationships.field_image && {
            backgroundImage: `url(${getSrc(
              player.relationships.field_image.localFile.childImageSharp
                .gatsbyImageData,
            )})`,
          }
        }
      />
      <div className={`bg-white-end`} />
    </div>
  );
  renderPlayerHeader = (player) => (
    <header className={`player-detail__header`}>
      {this.renderPlayerName(player)}
      {this.renderPlayerImage(player)}

      <div className={`player-detail__bg-shirt-number`} aria-hidden="true">
        {player.field_shirtnumber || ``}
      </div>
    </header>
  );

  renderPlayerStatsFull = (player) => {
    if (this.state.loading === false && this.state.data) {
      const { playerStatistics = [] } = this.state.data;

      return (
        <Card
          title="Statistieken"
          className={`player-detail__stats`}
          hasTable={true}
        >
          <table className={`player-detail__stats__table`}>
            <thead>
              <tr>
                <th
                  className={`player-detail__column player-detail__column--string`}
                >
                  Team
                </th>
                <th
                  className={`player-detail__column player-detail__column--number show-for-medium`}
                >
                  <span title="Wedstrijden gespeeld">P</span>
                </th>
                <th
                  className={`player-detail__column player-detail__column--number`}
                >
                  <span title="Wedstrijden gewonnen">W</span>
                </th>
                <th
                  className={`player-detail__column player-detail__column--number`}
                >
                  <span title="Wedstrijden gelijkgespeeld">D</span>
                </th>
                <th
                  className={`player-detail__column player-detail__column--number`}
                >
                  <span title="Wedstrijden verloren">L</span>
                </th>
                <th
                  className={`player-detail__column player-detail__column--number`}
                >
                  <img
                    src={iconCardYellow}
                    title="Gele kaart"
                    alt="Gele kaart"
                    className="player-detail__stats--header_icon"
                  />
                </th>
                <th
                  className={`player-detail__column player-detail__column--number`}
                >
                  <img
                    src={iconCardRed}
                    title="Rode kaart"
                    alt="Rode kaart"
                    className="player-detail__stats--header_icon"
                  />
                </th>
                <th
                  className={`player-detail__column player-detail__column--number`}
                >
                  <img
                    src={iconGoal}
                    title="Doelpunt(en) gescoord"
                    alt="Doelpunt(en) gescoord"
                    className="player-detail__stats--header_icon"
                  />
                </th>
                <th
                  className={`player-detail__column player-detail__column--number  show-for-medium`}
                >
                  <img
                    src={iconCleansheet}
                    title="Cleansheets"
                    alt="Cleansheets"
                    className="player-detail__stats--header_icon"
                  />
                </th>
                <th
                  className={`player-detail__column player-detail__column--number`}
                >
                  <span title="Minuten gespeeld">
                    <Icon icon="fa-clock-o" />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {playerStatistics.map(function (stats) {
                return (
                  <tr>
                    <td
                      className={`player-detail__column player-detail__column--string`}
                    >
                      {stats.team.replace(`Voetbal : `, ``)}
                    </td>
                    <td
                      className={`player-detail__column player-detail__column--number show-for-medium`}
                    >
                      {stats.gamesPlayed}
                    </td>
                    <td
                      className={`player-detail__column player-detail__column--number`}
                    >
                      {stats.gamesWon}
                    </td>
                    <td
                      className={`player-detail__column player-detail__column--number`}
                    >
                      {stats.gamesEqual}
                    </td>
                    <td
                      className={`player-detail__column player-detail__column--number`}
                    >
                      {stats.gamesLost}
                    </td>
                    <td
                      className={`player-detail__column player-detail__column--number`}
                    >
                      {stats.yellowCards}
                    </td>
                    <td
                      className={`player-detail__column player-detail__column--number`}
                    >
                      {stats.redCards}
                    </td>
                    <td
                      className={`player-detail__column player-detail__column--number`}
                    >
                      {stats.goals}
                    </td>
                    <td
                      className={`player-detail__column player-detail__column--number show-for-medium`}
                    >
                      {stats.cleanSheets}
                    </td>
                    <td
                      className={`player-detail__column player-detail__column--number`}
                    >
                      {stats.minutes}'
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      );
    }
  };
  renderPlayerGamesFull = () => {
    if (this.state.loading === false && this.state.data) {
      const { gameReports = [] } = this.state.data;

      return (
        <Card
          className={`player-detail__games`}
          title="Wedstrijden"
          hasTable={true}
        >
          <table
            className={`player-detail__games__table responsive-card-table`}
          >
            <thead>
              <tr>
                <th
                  className={`player-detail__column player-detail__column--string`}
                >
                  Team
                </th>
                <th
                  className={`player-detail__column player-detail__column--string`}
                >
                  Type
                </th>
                <th
                  className={`player-detail__column player-detail__column--string`}
                >
                  Datum
                </th>
                <th
                  className={`player-detail__column player-detail__column--number`}
                >
                  <span title="Thuis/uit">H/A</span>
                </th>
                <th
                  className={`player-detail__column player-detail__column--score`}
                >
                  Score
                </th>
                <th
                  className={`player-detail__column player-detail__column--string`}
                >
                  Tegenstander
                </th>
                <th
                  className={`player-detail__column player-detail__column--number`}
                >
                  <img
                    src={iconCardYellow}
                    title="Gele kaart"
                    alt="Gele kaart"
                    className="player-detail__stats--header_icon"
                  />
                </th>
                <th
                  className={`player-detail__column player-detail__column--number`}
                >
                  <img
                    src={iconCardRed}
                    title="Rode kaart"
                    alt="Rode kaart"
                    className="player-detail__stats--header_icon"
                  />
                </th>
                <th
                  className={`player-detail__column player-detail__column--number`}
                >
                  <img
                    src={iconGoal}
                    title="Doelpunten gescoord"
                    alt="Rode kaart"
                    className="player-detail__stats--header_icon"
                  />
                </th>
                <th
                  className={`player-detail__column player-detail__column--number`}
                >
                  <span title="Minuten gespeeld">
                    <Icon icon="fa-clock-o" />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {gameReports.map(function (game) {
                return (
                  <tr>
                    <td
                      data-label="Team"
                      className={`player-detail__column player-detail__column--string`}
                    >
                      {game.team.replace(`Voetbal : `, ``)}
                    </td>
                    <td
                      data-label="Type"
                      className={`player-detail__column player-detail__column--string`}
                    >
                      {game.competition}
                    </td>
                    <td
                      data-label="Datum"
                      className={`player-detail__column player-detail__column--string`}
                    >
                      {moment(game.date).format(`DD/MM/YYYY`)}
                    </td>
                    <td
                      data-label="Thuis/uit"
                      className={`player-detail__column player-detail__column--number`}
                    >
                      {game.home ? (
                        <span
                          className={`player-detail__games__home`}
                          title="Thuiswedstrijd"
                        >
                          <Icon icon="fa-home" alt="Thuiswedstrijd" />
                        </span>
                      ) : (
                        <span
                          className={`player-detail__games__away`}
                          title="Uitwedstrijd"
                        >
                          <Icon icon="fa-bus" alt="Uitwedstrijd" />
                        </span>
                      )}
                    </td>
                    <td
                      data-label="Score"
                      className={`player-detail__column player-detail__column--score`}
                    >
                      {game.goalsHomeTeam}&nbsp;-&nbsp;{game.goalsAwayTeam}
                    </td>
                    <td
                      data-label="Tegenstander"
                      className={`player-detail__column player-detail__column--string`}
                    >
                      {game.opponent}
                    </td>
                    <td
                      data-label="Gele kaart(en)"
                      className={`player-detail__column player-detail__column--number`}
                    >
                      {game.yellowCards}
                    </td>
                    <td
                      data-label="Rode kaart(en)"
                      className={`player-detail__column player-detail__column--number`}
                    >
                      {game.redCards}
                    </td>
                    <td
                      data-label="Doelpunten"
                      className={`player-detail__column player-detail__column--number`}
                    >
                      {game.goals}
                    </td>
                    <td
                      data-label="Speeltijd"
                      className={`player-detail__column player-detail__column--number`}
                    >
                      {game.minutesPlayed}'
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      );
    }
  };

  renderPlayerBirthdate = (player) => (
    <div
      className={`player-detail__data-item player-detail__data-item--birthdate`}
    >
      <span className={`player-detail__data-item__label`}>Geboortedatum</span>
      <span className={`player-detail__data-item__data`}>
        {player.field_birth_date || `Onbekend`}
      </span>
    </div>
  );
  renderPlayerPosition = (player) => (
    <div
      className={`player-detail__data-item player-detail__data-item--position`}
    >
      <span className={`player-detail__date-item__data`}>
        {player.field_position && mapPositionCode(player.field_position)}
      </span>
      <span className={`player-detail__data-item__label`}>
        {player.relationships.node__team && (
          <Link to={player.relationships.node__team[0].path.alias}>
            {player.relationships.node__team[0].title}
          </Link>
        )}
      </span>
    </div>
  );
  renderPlayerJoinDate = (player) => {
    const currentlyPlaying = !player.field_date_leave;
    return (
      <div
        className={`player-detail__data-item player-detail__data-item--joindate`}
      >
        <span className={`player-detail__data-item__label`}>
          {currentlyPlaying && `Speler bij KCVV sinds`}
          {!currentlyPlaying && `Speler tussen`}
        </span>
        <span className={`player-detail__data-item__data`}>
          {player.field_join_date || `Onbekend`}
          {!currentlyPlaying && (
            <Fragment>
              <span className={`text--regular`}> en </span>{" "}
              {player.field_date_leave}
            </Fragment>
          )}
        </span>
      </div>
    );
  };

  render() {
    const { player } = this.props;

    const team = player.relationships.node__team || [];
    const articles = player.relationships.node__article || [];

    return (
      <Fragment>
        <article className={`player-detail`}>
          {this.renderPlayerData(player)}
          {this.renderPlayerBody(player)}
          {this.renderPlayerStatsFull(player)}
          {this.renderPlayerGamesFull(player)}
        </article>

        {(team || articles) && (
          <RelatedNews items={team.concat(articles)} limit={6} />
        )}
      </Fragment>
    );
  }
}

// Retrieve endpoint of the logo's api from the site metadata (gatsby-config.js).
const query = graphql`
  query {
    site {
      siteMetadata {
        kcvvPsdApi
      }
    }
  }
`;

export default ({ player }) => (
  <StaticQuery
    query={query}
    render={(data) => (
      <PlayerDetail
        // Data is the result of our query.
        config={data}
        player={player}
      />
    )}
  />
);
