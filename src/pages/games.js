import React, { Component } from "react"

import Layout from "../layouts/index"

import SEO from "../components/seo"

class GamesPage extends Component {
  render() {
    // Previous matches
    const wedstrijd1 = {
      region: "bra",
      division: "FR",
      dateTime: 1597586400000,
      home: "KCVV Elewijt A",
      away: "KFC Meise A",
      resultHome: "5",
      resultAway: "3",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "01943",
    }
    const wedstrijd16 = {
      region: "bra",
      division: "FR",
      dateTime: 1597770000000,
      home: "SK Heffen",
      away: "KCVV Elewijt B",
      resultHome: "3",
      resultAway: "0",
      status: "",
      // matchDay,
      regNumberHome: "03738",
      regNumberAway: "00055",
    }
    const wedstrijd11 = {
      region: "bra",
      division: "FR",
      dateTime: 1597945500000,
      home: "KFC Rhodienne - De Hoek A",
      away: "KCVV Elewijt A",
      resultHome: "3",
      resultAway: "1",
      status: "",
      // matchDay,
      regNumberHome: "00006",
      regNumberAway: "00055",
    }

    // Next matches
    const wedstrijd6 = {
      region: "bra",
      division: "FR",
      dateTime: 1598191200000,
      home: "KCVV Elewijt A",
      away: "FC Melsbroek A",
      resultHome: "2",
      resultAway: "5",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "05659",
    }
    const wedstrijd21 = {
      region: "bra",
      division: "FR",
      dateTime: 1598461200000,
      home: "KCVV Elewijt A",
      away: "KV Mechelen Beloften",
      resultHome: "1",
      resultAway: "2",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "00025",
    }
    const wedstrijd20 = {
      region: "bra",
      division: "FR",
      dateTime: 1598464800000,
      home: "KCVV Elewijt B",
      away: "FC St Jozef Londerzeel B",
      resultHome: "3",
      resultAway: "1",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "03959",
    }
    const wedstrijd13 = {
      region: "bra",
      division: "FR",
      dateTime: 1598722200000,
      home: "SK Nossegem B",
      away: "KCVV Elewijt B",
      resultHome: "1",
      resultAway: "3",
      status: "",
      // matchDay,
      regNumberHome: "06053",
      regNumberAway: "00055",
    }
    const wedstrijd24 = {
      region: "bra",
      division: "FR",
      dateTime: 1598803200000,
      home: "KCVV Elewijt A",
      away: "KFC Malderen A",
      resultHome: "2",
      resultAway: "1",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "03794",
    }
    const wedstrijd19 = {
      region: "bra",
      division: "FR",
      dateTime: 1598895000000,
      home: "KCVV Elewijt B",
      away: "KFC Malderen B",
      resultHome: "9",
      resultAway: "1",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "03794",
    }
    const wedstrijd17 = {
      region: "bra",
      division: "FR",
      dateTime: 1599156000000,
      home: "SK Laar",
      away: "KCVV Elewijt B",
      resultHome: "1",
      resultAway: "2",
      status: "",
      // matchDay,
      regNumberHome: "R61054",
      regNumberAway: "00055",
    }
    const wedstrijd23 = {
      region: "bra",
      division: "FR",
      dateTime: 1599156900000,
      home: "KCVV Elewijt A",
      away: "KSC Grimbergen A",
      resultHome: "4",
      resultAway: "0",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "01021",
    }
    const wedstrijd2 = {
      region: "bra",
      division: "FR",
      dateTime: 1599397200000,
      home: "KCVV Elewijt A",
      away: "Sporting Kampenhout",
      resultHome: "2",
      resultAway: "1",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "02615",
    }
    const wedstrijd18 = {
      region: "bra",
      division: "FR",
      dateTime: 1599501600000,
      home: "KCVV Elewijt B",
      away: "KFC Katelijne-Waver B",
      resultHome: "3",
      resultAway: "3",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "04453",
    }

    return (
      <Layout>
        <SEO
          lang="nl-BE"
          title="Matchoverzicht voorbereiding"
          description="Overzicht van alle gespeelde en toekomstige wedstrijden tijdens de voorbereiding van het nieuwe seizoen."
          path={this.props.location.pathname}
        />
        <div className={"games__template"}>
          <p>
            De competitiestart werd uitgesteld naar het weekend van 12 en 13
            september 2020. Vanaf vrijdag 14 augustus 2020 hebben de Brabantse
            ploegen ook opnieuw groen licht gekregen om oefenwedstrijden te
            organiseren. Hieronder vind je het nieuwe oefenschema van KCVV
            Elewijt.
          </p>
          @TODO: Make teasers.
        </div>
      </Layout>
    )
  }
}

export default GamesPage
