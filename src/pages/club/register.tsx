import { Link } from "gatsby"
import React from "react"
import { Seo } from "../../components/Seo"
import Layout from "../../layouts"

const RegisterPage = () => {
  return (
    <Layout>
      <header className="page_header__wrapper">
        <div className="page_header">
          <h1>Praktische Informatie</h1>
        </div>
      </header>
      <div className="page__wrapper page__wrapper--limited page__section page__registration">
        <h2 className="featured-border">Inschrijvingen</h2>
        <section>
          <p>
            Alle spelers en speelsters vanaf 4-5 jaar zijn welkom om een/enkele proeftrainingen af te werken voor
            definitief in te schrijven. Hiervoor kan je contact opnemen met de trainer (
            <Link to="/jeugd/" className="rich-link">
              overzicht
            </Link>
            ) of de jeugdverantwoordelijken.
          </p>
          <p>
            Overtuigd en wil je graag lid worden van KCVV Elewijt? Inschrijven kan wekelijks in onze kantine na afspraak
            met de GC via{` `}
            <a href="mailto:jeugd@kcvvelewijt.be" target="_blank" className="rich-link">
              jeugd@kcvvelewijt.be
            </a>
            .
          </p>
        </section>
        <section>
          <h3>Bijdrage lidgeld</h3>
          <section>
            <ul>
              <li>
                CM:{` `}
                <a
                  href="https://www.cm.be/media/Aanvraag-terugbetaling-inschrijving-sportvereniging_tcm47-24959.pdf"
                  target="_blank"
                  className="rich-link"
                >
                  https://www.cm.be/media/Aanvraag-terugbetaling-inschrijving-sportvereniging_tcm47-24959.pdf
                </a>
              </li>
              <li>
                De Voorzorg/FSMB/Solidaris:{` `}
                <a
                  href=" https://www.solidaris-vlaanderen.be/terugbetaling-sport"
                  target="_blank"
                  className="rich-link"
                >
                  https://www.solidaris-vlaanderen.be/terugbetaling-sport
                </a>
              </li>
              <li>
                Liberale mutualiteit:{` `}
                <a
                  href="https://www.lm-ml.be/nl/documenten/formulier-terugbetaling-sport"
                  target="_blank"
                  className="rich-link"
                >
                  https://www.lm-ml.be/nl/documenten/formulier-terugbetaling-sport
                </a>
              </li>
              <li>
                VNZ:{` `}
                <a
                  href="https://www.vnz.be/voordelen-terugbetalingen/sport-fitnessclub/"
                  target="_blank"
                  className="rich-link"
                >
                  https://www.vnz.be/voordelen-terugbetalingen/sport-fitnessclub/
                </a>
              </li>
              <li>
                OZ/Partena/Helan:
                <a
                  href="https://www.helan.be/nl/ons-aanbod/ziekenfonds/voordelen-en-terugbetalingen/sportclub-lidgeld/"
                  target="_blank"
                  className="rich-link"
                >
                  https://www.helan.be/nl/ons-aanbod/ziekenfonds/voordelen-en-terugbetalingen/sportclub-lidgeld/
                </a>
              </li>
            </ul>
          </section>
        </section>
      </div>
      <div className="page__wrapper page__wrapper--limited page__section page__registration">
        <h2 className="featured-border">ProSoccerData</h2>
        <section>
          <p>
            KCVV Elewijt gebruikt de tool "ProSoccerData" als primair en centraal communicatiemiddel tussen trainers,
            spelers, ouders... Via deze weg worden trainingen ingepland, wedstrijdselecties ingevuld, communicatie
            verzorgd, spelers en ouders op te hoogte gehouden van wijzigingen of evenementen enz...
          </p>
          <p>Elke speler of ouder krijgt toegang tot deze tool via een persoonlijke login.</p>
          <p>
            Website:{` `}
            <a href="https://kcvv.prosoccerdata.com/" target="_blank" className="rich-link">
              https://kcvv.prosoccerdata.com/
            </a>
          </p>
        </section>
      </div>

      <div className="page__wrapper page__wrapper--limited page__section page__trooper">
        <h2 className="featured-border">Steuntje via Trooper of Makro</h2>
        <section>
          <h3>Trooper</h3>
          <p>
            Trooper werkt samen met een groot aantal webshops die zich in de kijker willen zetten. In ruil voor een
            extra klik via Trooper krijgen wij een percentje op jouw volgende bestelling.
          </p>

          <p>
            Surf voor je een bestelling plaatst even via{` `}
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
        </section>
        <section>
          <h3>MyMakro</h3>
          <p>
            Link nu jouw Makro voordeelkaart aan onze vereniging. Bij elke aankoop bij Makro en partners steun je KCVV
            Elewijt!
          </p>

          <p>
            Surf naar{` `}
            <a
              href="https://my.makro.be/nl/link-vereniging/02277464"
              target="_blank"
              rel="noopener noreferrer"
              title="MyMakro link voor KCVV Elewijt"
              className={`rich-link`}
            >
              https://my.makro.be/nl/link-vereniging/02277464
            </a>
            {` `}
            om je kaart te koppelen .
          </p>
          <p>Onze vereniging dankt jullie van harte!</p>
        </section>
      </div>

      <div className="page__wrapper page__wrapper--limited page__section page__social">
        <div className={`social__media__wrapper`}>
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
      </div>
    </Layout>
  )
}

export const Head = () => {
  return (
    <Seo
      title="Praktische Informatie"
      description="Praktische Informatie rond inschrijvingen, trainingen e.d."
      path="/downloads/"
    />
  )
}

export default RegisterPage
