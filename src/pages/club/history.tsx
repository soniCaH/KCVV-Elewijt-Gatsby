import { graphql } from "gatsby"
import React from "react"
import { Seo } from "../../components/Seo"
import ogImage from "../../images/history-bvb.png"
import Layout from "../../layouts"
import ScrollAnimation from "react-animate-on-scroll"
import { HistoryPageProps } from "../../Types/PageProps"
import { GatsbyImage } from "gatsby-plugin-image"
import "./history.scss"

const HistoryPage = ({
  data: { history52, history58, history63, historyfusie, historybvb, history18, history22 },
}: HistoryPageProps) => {
  return (
    <Layout>
      <header className="page_header__wrapper">
        <div className="page_header">
          <h1>Geschiedenis</h1>
        </div>
      </header>

      <div className="timeline timeline--top">
        <div className="timeline-item">
          <div className="timeline-icon" />
          <ScrollAnimation animateOnce={true} initiallyVisible={true}>
            <div className="timeline-content">
              <p className="timeline-content-date">1909 - 1935</p>
              <p>
                De Elewijtse voetbalgeschiedenis gaat volgens de overleveringen terug tot de jaren 1909-1910. Een vaste
                clubnaam was er voorlopig niet, doch de jongens speelden in witte truien, waarin over de schouder een
                rode band was gewerkt, dus “Wit en Rood” met zwarte broek. Vanuit deze periode dateert ook de eerste
                vermelding in de krant ter ere van de inhuldiging van burgemeester Nauwelaerts op 04/07/1911: “Van
                Campenhout hield de toespraak namens de Jonge Footbalclub” (Nieuwsblad 5/7/1911). In die tijd waren er
                nog geen kampioenschappen zoals we ze heden kennen. Het waren enkel vrienden- en bekerwedstrijden die
                betwist werden. Om hun verplaatsingskosten (verre afstanden) te dekken, speelden ze zelf toneel “In den
                Prins” onder leiding van E.H. Langendries; destijds onderpastoor in de Elewijtse parochie. De
                wereldoorlog ’14-’18 brak uit en haast alle spelers moesten soldaat worden en meteen werd ook de
                voetbalsport tijdelijk opgedoekt.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} initiallyVisible={true}>
            <div className="timeline-content right">
              <p className="timeline-content-date">Eerste wereldoorlog</p>
              <p>
                Na de oorlog van ’14-’18 werd er opnieuw een club opgericht die de naam meekreeg van FC Leopold Elewijt.
                Het waren niet allen meer dezelfde spelers van voor de oorlog, maar wel een groot deel van de jongere
                generatie. Ook speelden ze niet meer in de “Wit-Rood” kleuren (omdat er niets meer van overbleef) en
                moesten ze uitzien naar een ander speelveld. Nu speelden ze met de kleuren “Geel en Rood” en verhuisden
                ze richting “Koffer”, tussen de Kastanjedreef en de Steenbergstraat. Voor niet lang echter, want ze
                kregen last en moeilijkheden met sommige eigenaars om en rond het plein. Opnieuw dienden ze uit te zien
                naar een ander speelveld en zo belandden ze achter “Koffer”, waar ze meteen hun lokaal vestigden. Na
                zekere tijd moest het speelveld opnieuw verlaten worden; voor de derde maal werd er verhuisd en de ploeg
                kwam dichter bij het dorp spelen. Zij namen het terrein in bezit dat jaren door SK Elewijt (Groen-Wit)
                gebruikt werd aan de Voetbalstraat (huidige Sweynbeerstraat).
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInLeftBig">
            <div className="timeline-content">
              <p className="timeline-content-date">De “Leopold”</p>
              <p>
                De “Leopold” heeft vele mooie dagen gekend als ploeg aangesloten in de Vlaamse Voetbalbond. Er werd
                vooral gespeeld tegen clubs als “Albert” Hofstade en Superior Bonheiden. De ploeg was ook één seizoen
                aangesloten bij de Belgische voetbalbond in het seizoen 1927-1928; de club kreeg stamnummer 1037 en
                sloot zich aan onder de naam Voetbal Club Léopold Elewyt. In dat seizoen belandde Léopold Elewijt op een
                verdienstelijke derde plaats na een seizoen met 4 overwinningen; 4 gelijke spelen; en 4 verloren
                wedstrijden.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInRightBig">
            <div className="timeline-content right">
              <p className="timeline-content-date">Onenigheid</p>
              <p>
                Na zekere tijd liep het echter niet meer zo gesmeerd in de rangen van de Leopold. Er begon onenigheid te
                heersen, de kameraadschapsbanden waren niet meer zo hecht en het onvermijdelijke werd vrij vlug
                werkelijkheid: de “Leopold” werd ontbonden. Al het materiaal, de bekers en de trofeeën werden onderling
                verdeeld of verloot onder hen die tot het bittere einde aan dek waren gebleven. Het terrein werd
                omgeploegd, de doelen in stukken gezaagd, en het was amen en uit met de Elewijtse voetbalsport.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInLeftBig">
            <div className="timeline-content">
              <p className="timeline-content-date">1935</p>
              <p>
                Na een aantal jaren zonder voetbalclub onstonden er in 1935 twee nieuwe nieuwe clubs, volledig
                onafhankelijk van mekaar. Het steeds groter wordend aantal spelers – teveel voor één ploeg – lag aan de
                basis van een onenigheid in de ploeg en leidde in een minimum van tijd tot een onafwendbare scheuring.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInRightBig">
            <div className="timeline-content right">
              <p className="timeline-content-date">Sportkring Elewijt</p>
              <p>
                Zo kregen we enerzijds Sportkring Elewijt (stamnummer 2415), met groen-witte truien en witte broek. Het
                lokaal werd gevestigd bij Flor Van der Meulen en hun speelveld werd dat waar voorheen de “Leopold” had
                gespeeld, in de Voetbalstraat (nu Sweynbeerstraat). Vanaf seizoen 1962-1963 verhuisde SK Elewijt naar de
                locatie aan de Driesstraat; destijds “Terwilgen-stadion” genoemd.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInLeftBig">
            <div className="timeline-content">
              <p className="timeline-content-date">FC Elewijt</p>
              <p>
                De andere club kreeg de naam FC Elewijt (stamnummer 2416) met als kleuren rood en geel, met zwarte broek
                (de kleuren dus van de “Leopold”). Hun lokaal werd de “Vuurmolen” bij Bertrand Van Poeyer terwijl een
                speelveld werd aangelegd op het Zwijnbeer, waar nu de scoutslokalen staan. Na de tweede wereldoorlog zou
                FC Elewijt verhuizen naar het terrein aan de Kastanjedreef (tussendoor werd ook nog een tijdje aan de
                Vekestraat gespeeld).
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInRightBig">
            <div className="timeline-content right">
              <p className="timeline-content-date">Eerste fusiegeruchten</p>
              <p>
                Twee clubs in zo’n klein dorp, dat is moeilijk te houden, en zo deden reeds zeer snel de geruchten de
                ronde over een mogelijke fusie van beide ploegen. Eén punt werd fel betwist en kon niet worden
                bijgelegd, namelijk de vestiging van het clublokaal. Hiervoor kwam geen oplossing en beide Elewijtse
                clubs bleven bijgevolg afzonderlijk hun verdere gang gaan.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInLeftBig">
            <div className="timeline-content">
              <p className="timeline-content-date">Rivaliteit</p>
              <p>
                De rivaliteit tussen de twee Elewijtse clubs was zo groot dat de ene voor de andere niet wou onderdoen.
                Geen van beide ploegen slaagde er echter in de titel te behalen. Financiële en andere zorgen kwamen hier
                stokken in de wielen steken. Wel werden nog flinke resultaten geboekt, doch verder dan de derde afdeling
                kwam geen van beide. Tot de sport eens temeer werd lamgelegd door de mobilisatie in 1939. Er werd nog
                wel gevoetbald, maar de meeste spelers waren onder de wapens geroepen en konden niet elke week verlof of
                vergunning krijgen om in eigen ploeg of gemeente aan voetbal te komen doen. De tweede wereldoorlog brak
                los en dan was ’t weer uit met de voetbalsport in ons dorp, en ook elders.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInRightBig">
            <div className="timeline-content right">
              <p className="timeline-content-date">Tweede wereldoorlog</p>
              <p>
                Na de oorlog duurde het wel enige tijd eer alle jongens terug waren. SK zag de meeste van zijn spelers
                terug thuiskomen en zij konden vrij vlug hun activiteiten hernemen. Bij FC was dit niet het geval en dat
                seizoen was het niet meer mogelijk nog aan te treden. Zo zagen we dat enkele spelers van rood-geel een
                seizoen de groen-witte kleuren hielpen verdedigen in een noodcompetitie die door de KBVB werd ingericht
                in het voorjaar 1941. En wat ze tot hiertoe nog nooit vermochten gebeurde toen: dit Elewijts noodelftal
                wist op prachtige wijze de titel in de wacht te slepen!
              </p>
            </div>
          </ScrollAnimation>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInLeftBig">
            <div className="timeline-content">
              <p className="timeline-content-date">1941</p>
              <p>
                In de daaropvolgende jaren speelden SK Elewijt en FC Elewijt in tweede en derde provinciale; regelmatig
                in dezelfde reeks. Hoogtepunten voor SK Elewijt waren verschillende titels in derde provinciale:
                1941-1942; 1952-1953; 1958-1959 (waardoor er in 1959-1960 voor het eerst een derby SK-FC Elewijt was in
                tweede provinciale); en een vierde plaats in tweede provinciale in 1962-1963.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {history52?.childImageSharp?.gatsbyImageData && (
        <div className="timeline-image">
          <figure>
            <GatsbyImage
              image={{
                ...history52?.childImageSharp?.gatsbyImageData,
              }}
              alt="Figuur 1: SK Elewijt kampioen 52-53"
            />
            <figcaption>
              <p>Figuur 1: SK Elewijt kampioen 52-53</p>
              <p>
                Boven: Labiau - Maurits Janssens - Maurits De Laet - Wannes Lepage - Julien Patry - Djois (Jean Peeters)
                - Felix Vandervorst (bijnaam Feke Van Den Asse) - Pierre Geerens
                <br />
                Onder: Coosemans - David Vandermeulen - Lucien Coppens - Gust Coppens - Warre Van Herck - Omer Lesage
                Felix De Koninck
              </p>
            </figcaption>
          </figure>
        </div>
      )}

      {history58?.childImageSharp?.gatsbyImageData && (
        <div className="timeline-image">
          <figure>
            <GatsbyImage
              image={{
                ...history58?.childImageSharp?.gatsbyImageData,
              }}
              alt="Figuur 2: SK Elewijt kampioen 58-59"
            />
            <figcaption>
              <p>Figuur 2: SK Elewijt kampioen 58-59</p>
              <p>
                Staand: Jan De Ron; Maurits Janssens; Raymond Jaspers; Emiel Knaepen "Mieleke van Beezel"; Jean Lauwers;
                Jaak Janssens
                <br />
                Zittend: David Vander Meulen ; Ket Raeymaekers ; Jacky Van Mol; Mathieu Van Helden; René Van Gysel;
                Julien Coppens; Jozef Janssens; Maurits De Laet
              </p>
            </figcaption>
          </figure>
        </div>
      )}

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInRightBig">
            <div className="timeline-content right">
              <p className="timeline-content-date">FC Elewijt</p>
              <p>
                Hoogtepunten voor FC Elewijt waren titels in derde provinciale in 1954-1955 (met 164 gemaakte
                doelpunten); 1957-1958 (SK Elewijt eindigde dat seizoen tweede); 1963-1964 (zonder verlieswedstrijd); en
                een tweede plaats in tweede provinciale in 1960-1961.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {history63?.childImageSharp?.gatsbyImageData && (
        <div className="timeline-image">
          <figure>
            <GatsbyImage
              image={{
                ...history63?.childImageSharp?.gatsbyImageData,
              }}
              alt="Figuur 3: FC Elewijt kampioen 63-64"
            />
            <figcaption>
              <p>Figuur 3: FC Elewijt kampioen 63-64</p>
              <p>
                Rij bovenaan : François De Win (burger), Gust Boxtaens, Chris Bessendorffer, Guy Van den Wijngaerd, Guy
                Busschots , Alfons Beullens (de Kras), Warre Bosmans, Jaak Vandergucht (burger)
                <br />
                Rij onderaan : Hugo Vanderbeken, Jaak Demesmaecker , Jan Ervens , Rik Claes , Roger Wijns
              </p>
            </figcaption>
          </figure>
        </div>
      )}
      {historyfusie?.childImageSharp?.gatsbyImageData && (
        <div className="timeline-image">
          <figure>
            <GatsbyImage
              image={{
                ...historyfusie?.childImageSharp?.gatsbyImageData,
              }}
              alt="Figuur 4: De fusieclub VV Elewijt"
            />
            <figcaption>
              <p>
                Figuur 4: De fusieclub VV Elewijt (rood-wit - op de foto Luc Buedts als kind) sinds 1971-1972 in
                competitie speelde; ontstaan uit FC Elewijt (rood-geel - op de foto Etienne Cnops als moeder) en SK
                Elewijt (groen-wit - op de foto Walter Van As als vader).
              </p>
            </figcaption>
          </figure>
        </div>
      )}
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInLeftBig">
            <div className="timeline-content">
              <p className="timeline-content-date">1971 - 1983</p>
              <p>
                In 1971 kwam het uiteindelijk tot een fusie tussen SK en FC; en werd er gestart in derde provinciale met
                VV Elewijt. In het seizoen 1973-1974 wist deze fusieclub de promotie naar tweede provinciale te
                bewerkstelligen door de titel te behalen. Ook in tweede provinciale werden goede resultaten gehaald met
                een tweede plaats in 1977-1978.
              </p>
            </div>
          </ScrollAnimation>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInRightBig">
            <div className="timeline-content right">
              <p className="timeline-content-date">1983 - 1991</p>
              <p>
                Echter; de ambities van toenmalig voorzitter Maurice De Laet lagen hoger; daarom werd in 1983 het
                stamnummer 55 van Crossing Schaarbeek overgenomen; waardoor men kon aantreden in eerste provinciale.
                Crossing Schaarbeek was zelf het resultaat van eerdere samensmelting tussen Royal Crossing Club
                Molenbeek en Royal Cercle Sportif de Schaerbeek; en speelde 4 seizoenen in eerste klasse in de periode
                1969-1973; in de daaropvolgende jaren was deze club verder weggezakt tot de degradatie vanuit vierde
                klasse in 1983. De benaming van deze club werd Crossing Elewijt. Het eerste seizoen werd geen succes
                want Crossing Elewijt eindigde op een veertiende plaats in eerste provinciale waardoor het degradeerde
                naar tweede provinciale. In het seizoen 1985-1986 wist Crossing Elewijt de titel te behalen in tweede
                provinciale waardoor men opnieuw naar eerste promoveerde. In de daaropvolgende seizoenen ’86-’87 en
                ’87-’88 behaalde Crossing tweemaal een vierde plaats in eerste provinciale; het hoogst bereikte
                resultaat ooit voor een Elewijtse ploeg. Bovendien wist Crossing Elewijt in 1988 de beker van Brabant te
                winnen.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {historybvb?.childImageSharp?.gatsbyImageData && (
        <div className="timeline-image">
          <figure>
            <GatsbyImage
              image={{
                ...historybvb?.childImageSharp?.gatsbyImageData,
              }}
              alt="Figuur 5: Crossing Elewijt won de beker van Brabant in 1988"
            />
            <figcaption>
              <p>
                Figuur 5: Crossing Elewijt won de beker van Brabant in 1988 na een 4-1 overwinning in de finale tegen
                Peutie.
              </p>
            </figcaption>
          </figure>
        </div>
      )}
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInRightBig">
            <div className="timeline-content right">
              <p>
                In het seizoen 1990-1991 werd Crossing Elewijt veertiende in eerste provinciale waardoor het degradeerde
                naar tweede provinciale.
              </p>
              <p>
                VV Elewijt bleef bestaan en speelde verder in derde provinciale vanaf 1983-1984; bijgevolg waren er dus
                opnieuw 2 actieve ploegen in Elewijt. VV Elewijt bestond voornamelijk uit spelers uit Elewijt en
                fungeerde als een soort satellietploeg voor Crossing Elewijt; de beste spelers werden jaarlijks
                doorgesluisd naar Crossing. In het seizoen 1989-1990 zakte VV Elewijt naar vierde provinciale.
              </p>
            </div>
          </ScrollAnimation>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInLeftBig">
            <div className="timeline-content">
              <p className="timeline-content-date">1991 - 2018</p>
              <p>
                Vanaf 1991-1992 werd besloten om beide Elewijtse ploegen te fuseren tot KCVV Elewijt; de ploeg ging
                verder in tweede provinciale. Na twee degradaties in enkele jaren tijd moest KCVV vanaf 1994-1995
                aantreden in vierde provinciale.
              </p>
              <p>
                KCVV Elewijt werd in 2001 tweede in de laagste provinciale reeks en dwong zo de promotie naar derde
                provinciale af. Het daaropvolgende seizoen werden ze laatste en degradeerden ze opnieuw naar 4e
                provinciale. Na zeven seizoenen als subtopper slaagden ze er in 2009 opnieuw in om de promotie af te
                dwingen. Ditmaal hielden ze twee seizoenen stand, waarna ze in het seizoen 2011-2012 opnieuw uitkwamen
                in vierde provinciale.
              </p>
              <p>KCVV speelde meteen kampioen, waarna ze erin slaagden een stabiele derdeprovincialer te worden.</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {history18?.childImageSharp?.gatsbyImageData && (
        <div className="timeline-image">
          <figure>
            <GatsbyImage
              image={{
                ...history18?.childImageSharp?.gatsbyImageData,
              }}
              alt="Figuur 6: KCVV Elewijt speelt kampioen in 2018-2019 met 79 punten op 90"
            />
            <figcaption>
              <p>Figuur 6: KCVV Elewijt speelt kampioen in 2018-2019 met 79 punten op 90.</p>
            </figcaption>
          </figure>
        </div>
      )}
      <div className={`timeline`}>
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInRightBig">
            <div className="timeline-content right">
              <p className="timeline-content-date">2018 - 2021</p>
              <p>
                In het seizoen 2018/2019 werd KCVV Elewijt kampioen met maar liefst 79 punten, na een nek-aan-nek race
                tot de allerlaatste speeldag (slechts één punt voorsprong op de tweede in de stand Mazenzele-Opwijk). In
                dat seizoen wint het o.a. 14 keer op een rij en verliest het in totaal meer dan 300 dagen aaneengesloten
                niet.
              </p>
              <p>De ploeg is in het seizoen 2019/2020 ingedeeld in tweede provinciale A (Brabant).</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {history22?.childImageSharp?.gatsbyImageData && (
        <div className="timeline-image">
          <figure>
            <GatsbyImage
              image={{
                ...history22?.childImageSharp?.gatsbyImageData,
              }}
              alt="Figuur 7: KCVV Elewijt promoveert via eindronde naar eerste provinciale"
            />
            <figcaption>
              <p>Figuur 7: KCVV Elewijt promoveert via eindronde naar eerste provinciale.</p>
            </figcaption>
          </figure>
        </div>
      )}
      <div className={`timeline`}>
        <div className="timeline-item">
          <div className="timeline-icon"></div>
          <ScrollAnimation animateOnce={true} animateIn="animate__fadeInRightBig">
            <div className="timeline-content right">
              <p className="timeline-content-date">2021 - ...</p>
              <p>
                Na een onnodig spannend seizoen verzekert KCVV zich pas op de allerlaatste speeldag van een tweede
                plaats — achter ongenaakbaar kampioen KFC Herent dat 87 op 90 haalde (enkel verloor thuis van, jawel,
                KCVV Elewijt) — en bijhorende deelname aan de eindronde voor promotie.
              </p>
              <p>
                In de eindronde krijgt het K Eur. Kraainem — tweede in de B-reeks — als tegenstander. Vooral in de
                eerste helft van de heenwedstrijd wordt KCVV weggeblazen en mag het al-bij-al nog blij zijn dat het de
                eindscore nog kan milderen tot 4-2.
              </p>
              <p>
                Twee cruciale tegendoelpunten blijkt achteraf. Een week later verschijnt een volledig ander ingesteld
                Elewijt aan de aftrap. Onder een warme lentezon grijpt het Kraainem vanaf de eerste seconde bij de keel.
                Bij de rust staat het oververdiend 1-0 voor – getekend Glenn Breugelmans – en de hoop op een straffe
                terugkeer groeide.
              </p>
              <p>
                En dat bleek meer dan terecht, 20 minuten ver in de tweede helft volgde een tweede apotheose. Jorn
                Reszczynski prikte de 2-0 binnen en alles was terug in evenwicht.
              </p>
              <p>
                Het was zweten en puffen op het veld, en de ploeg had meer zin in een feestje dan nog eens verlengingen
                te moeten spelen in de warmte. De oplossing kwam van de voet van Denis Ghys, hij maakte er knap 3-0 van!
                Kraainem kwam nog opzetten, maar met enkele knappe reddingen en secuur verdedigend ingrijpen op het
                einde van de wedstrijd konden Ken en zijn verdedigers toch de 0 houden, en dus ook de promotie naar 1e
                provinciale verzekeren!
              </p>
              <p>De ploeg is in het seizoen 2022/2023 ingedeeld in eerste provinciale Vlaams - Brabant.</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <div className="page__wrapper page__wrapper--limited">
        <h3 className="featured-border">Credits</h3>
        <p>Met dank aan Martijn van den Berg voor de foto's en teksten over de geschiedenis van KCVV Elewijt!</p>
      </div>
    </Layout>
  )
}

export const Head = () => {
  return (
    <Seo
      title="Geschiedenis"
      description="Tijdslijn van de rijkgevulde geschiedenis van KCVV Elewijt van 1909 tot nu!"
      path="/club/history"
      image={{ src: ogImage, width: 1949, height: 863 }}
    />
  )
}

export const pageQuery = graphql`
  query HistoryPage {
    history52: file(name: { eq: "history-52-53" }) {
      ...KCVVHeroImage
    }
    history58: file(name: { eq: "history-58-59" }) {
      ...KCVVHeroImage
    }
    history63: file(name: { eq: "history-63-64" }) {
      ...KCVVHeroImage
    }
    historyfusie: file(name: { eq: "history-fusie" }) {
      ...KCVVHeroImage
    }
    historybvb: file(name: { eq: "history-bvb" }) {
      ...KCVVHeroImage
    }
    history18: file(name: { eq: "history-2018" }) {
      ...KCVVHeroImage
    }
    history22: file(name: { eq: "history-2022" }) {
      ...KCVVHeroImage
    }
  }
`

export default HistoryPage
