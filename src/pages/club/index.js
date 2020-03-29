import React, { Component } from "react"

import Layout from "../../layouts/index"

import SEO from "../../components/seo"
import { Link } from "gatsby"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO lang="nl-BE" title="De Club" path={this.props.location.pathname} />

        <div className={"limited-width_wrapper"}>
          <header>
            <h1>KCVV Elewijt</h1>
          </header>
          <section>
            <h2 className={"featured-border"}>Geschiedenis</h2>

            <blockquote>
              <strong>Koninklijk Voetbal Vereniging Crossing Elewijt</strong> is
              aangesloten bij de KBVB met stamnummer 55 en speelt vanaf het
              seizoen 2019/20 in Tweede Provinciale A. Met dit stamnummer
              speelde de Brusselse club Royal Crossing Club de Schaerbeek in de
              jaren '70' nog in de Eerste Klasse.
            </blockquote>

            <p>
              Het stamnummer 55 gaat al een hele tijd mee en verhuisde in zijn
              iets meer dan 100-jarige bestaan al enkele keren van thuishaven.
              Sinds 1983 is die thuishaven Elewijt.
            </p>

            <Link to="club/history" className={"btn btn--arrow"}>
              Meer over de geschiedenis
            </Link>
          </section>
          <section>
            <h2 className={"featured-border"}>Bestuur</h2>

            <p>
              KCVV Elewijt wordt al enkele jaren geleid door een gepassioneerde
              en trouwe kern van bestuursleden. In een toffe mix van jong en
              iets minder jong wordt enthousiast gewerkt om van KCVV een gezonde
              en aangename club te maken, waarin sportieve ambitie en plezier
              gecombineerd kunnen worden.
            </p>

            <Link to="club/bestuur" className={"btn btn--arrow"}>
              Maak kennis met het bestuur
            </Link>
          </section>
          <section>
            <h2 className={"featured-border"}>Jeugdwerking</h2>
            <p>
              Na enkele jaren waarin we achter de feiten holden en veel lokale
              jeugdspelers zagen vertrekken naar buurgemeenten, heeft KCVV
              Elewijt sinds kort zijn pijlen volop op de bouw van onderuit
              gericht. Zo wordt er dit seizoen niet alleen een kunstgrasveld
              aangelegd, wat zowel de trainings- als de wedstrijdkwaliteit zal
              verbeteren, maar werd er ook een ambitieuse jeugdcoördinator
              aangesteld die zowel spelers, ouders als trainers van dichtbij zal
              opvolgen, gestaafd met leerrijke opleidingsplannen.
            </p>

            <Link to="club/jeugdbestuur" className={"btn btn--arrow"}>
              Ontmoet het jeugdbestuur
            </Link>
          </section>
          <section>
            <h2 className={"featured-border"}>Contact</h2>
            <p>
              Binnen de club heeft iedereen zijn eigen "domein". Wil je graag
              contact over de sponsormogelijkheden, een aansluiting, een
              vriendenwedstrijd of iets anders? Met de juiste contactpersoon als
              startpunt hebben we onmiddellijk een rechtstreekse lijn!
            </p>

            <Link to="club/contact" className={"btn btn--arrow"}>
              Neem contact op
            </Link>
          </section>
          <section>
            <h2 className={"featured-border"}>KCVV Ultras</h2>
            <p>
              De naam KCVV Ultras werd enkele jaren geleden op facebook in het
              leven geroepen door een bende supporters die elke week trouw op
              post stonden. Na verloop van tijd werd de pagina echter minder en
              minder actief, en de term "Ultras" verdween langzaamaan.
            </p>
            <p>
              Tot het seizoen 2018 - 2019. In de zoektocht naar de
              kampioenstitel konden de spelers elke vorm van steun gebruiken, en
              wat is er beter dan de KCVV Ultras hiervoor terug nieuw leven in
              te blazen? Enkele nieuwe voortrekkers stonden op en plaatsten hun
              schouders onder de eerste sfeeracties. Bengaals vuur en rookpotten
              werden aangekocht, trommels en spandoeken naast het veld
              geposteerd en we konden knallen!
            </p>
            <p>
              Het enthousiasme, gekoppeld aan de goede resultaten, werkte
              aanstekelijk en de bende groeide al snel. De sfeeracties volgden
              in de tweede helft van het seizoen elkaar dan ook snel op en
              kregen uitbreiding op verplaatsing: met de bierfiets de ploeg over
              de streep gaan trekken op FC Zemst, met de bus naar Mollem enz...
            </p>
            <Link to="club/ultras" className={"btn btn--arrow"}>
              Meer over de supportersclub
            </Link>
          </section>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
