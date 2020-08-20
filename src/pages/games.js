import React, { Component } from "react"

import Layout from "../layouts/index"

import SEO from "../components/seo"
import MatchWithLogo from "../components/match-with-logo"

class GamesPage extends Component {
  render() {
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

    const wedstrijd2 = {
      region: "bra",
      division: "FR",
      dateTime: 1599397200000,
      home: "KCVV Elewijt A",
      away: "Sporting Kampenhout",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "02615",
    }
    const wedstrijd3 = {
      region: "bra",
      division: "BVZ",
      dateTime: 1596735000000,
      home: "FC Zemst Sp.",
      away: "KCVV Elewijt A",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "03746",
      regNumberAway: "00055",
    }
    const wedstrijd4 = {
      region: "bra",
      division: "BCA",
      dateTime: 1596981600000,
      home: "KCVV Elewijt A",
      away: "FC Galmaarden A",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "05334",
    }
    const wedstrijd5 = {
      region: "bra",
      division: "ESCA",
      dateTime: 1596981600000,
      home: "KCVV Elewijt B",
      away: "KFC Wambeek Ternat B",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "05661",
    }
    const wedstrijd6 = {
      region: "bra",
      division: "FR",
      dateTime: 1598191200000,
      home: "KCVV Elewijt A",
      away: "FC Melsbroek A",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "05659",
    }
    const wedstrijd7 = {
      region: "bra",
      division: "FR",
      dateTime: 1597339800000,
      home: "SK Rapid Leest",
      away: "KCVV Elewijt A",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "03737",
      regNumberAway: "00055",
    }
    const wedstrijd9 = {
      region: "bra",
      division: "ESCA",
      dateTime: 1597510800000,
      home: "VV Kester-Gooik B",
      away: "KCVV Elewijt B",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "05921",
      regNumberAway: "00055",
    }
    const wedstrijd10 = {
      region: "bra",
      division: "BCA",
      dateTime: 1597586400000,
      home: "FC Herne A",
      away: "KCVV Elewijt A",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "05934",
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
    const wedstrijd12 = {
      region: "bra",
      division: "BCA",
      dateTime: 1598191200000,
      home: "KCVV Elewijt A",
      away: "VC Groot Dilbeek A",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "06325",
    }
    const wedstrijd13 = {
      region: "bra",
      division: "FR",
      dateTime: 1598722200000,
      home: "SK Nossegem B",
      away: "KCVV Elewijt B",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "06053",
      regNumberAway: "00055",
    }
    const wedstrijd14 = {
      region: "bra",
      division: "BCA",
      dateTime: 1598796000000,
      home: "FC Borght-Humbeek A",
      away: "KCVV Elewijt A",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "00039",
      regNumberAway: "00055",
    }
    const wedstrijd15 = {
      region: "bra",
      division: "ESCA",
      dateTime: 1598796000000,
      home: "VK Borchtlombeek B",
      away: "KCVV Elewijt B",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "07941",
      regNumberAway: "00055",
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
    const wedstrijd17 = {
      region: "bra",
      division: "FR",
      dateTime: 1599156000000,
      home: "SK Laar",
      away: "KCVV Elewijt B",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "R61054",
      regNumberAway: "00055",
    }
    const wedstrijd18 = {
      region: "bra",
      division: "FR",
      dateTime: 1599501600000,
      home: "KFC Katelijne-Waver B",
      away: "KCVV Elewijt B",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "04453",
      regNumberAway: "00055",
    }
    const wedstrijd19 = {
      region: "bra",
      division: "FR",
      dateTime: 1598895000000,
      home: "KCVV Elewijt B",
      away: "KFC Malderen B",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "03794",
    }
    const wedstrijd20 = {
      region: "bra",
      division: "FR",
      dateTime: 1598464800000,
      home: "KCVV Elewijt B",
      away: "FC St Jozef Londerzeel B",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "03959",
    }
    const wedstrijd21 = {
      region: "bra",
      division: "FR",
      dateTime: 1598461200000,
      home: "KCVV Elewijt A",
      away: "KV Mechelen Beloften",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "00025",
    }
    const wedstrijd22 = {
      region: "bra",
      division: "FR",
      dateTime: 1598796900000,
      home: "BOKA United A",
      away: "KCVV Elewijt A",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "06439",
      regNumberAway: "00055",
    }
    const wedstrijd23 = {
      region: "bra",
      division: "FR",
      dateTime: 1599156900000,
      home: "KCVV Elewijt A",
      away: "KSC Grimbergen A",
      resultHome: "",
      resultAway: "",
      status: "",
      // matchDay,
      regNumberHome: "00055",
      regNumberAway: "01021",
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
          <MatchWithLogo match={wedstrijd1} />
          <MatchWithLogo match={wedstrijd16} />
          <MatchWithLogo match={wedstrijd11} />
          <MatchWithLogo match={wedstrijd6} />
          <MatchWithLogo match={wedstrijd21} />
          <MatchWithLogo match={wedstrijd20} />
          <MatchWithLogo match={wedstrijd13} />
          <MatchWithLogo match={wedstrijd22} />
          <MatchWithLogo match={wedstrijd19} />
          <MatchWithLogo match={wedstrijd17} />
          <MatchWithLogo match={wedstrijd23} />
          <MatchWithLogo match={wedstrijd2} />
          <MatchWithLogo match={wedstrijd18} />
        </div>
      </Layout>
    )
  }
}

export default GamesPage
