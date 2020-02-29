import React, { Component } from 'react'

import Layout from '../../layouts/index'

import SEO from '../../components/seo'
import { StaticQuery, graphql } from 'gatsby'
import { CardImage } from '../../components/cards'
import HeaderBgTitle from '../../components/header-bg-title'

class UltrasPage extends Component {
  render() {
    const { sjr, champ } = this.props.data
    return (
      <Layout>
        <SEO lang="nl-BE" title="KCVV Ultra's" />

        <HeaderBgTitle title="KCVV" highlight="ultra's" classes={'ultras-page'} />

        <div className={'ultras-wrapper'}>
          <header>
            <h1>KCVV Ultras</h1>
            <CardImage
              title="KCVV ULtras op kampioenenmatch"
              localFile={champ}
              metadata={false}
            />
          </header>
          <section>
            <h2>Wie zijn we</h2>
            <p>
              De naam KCVV Ultras werd enkele jaren geleden op facebook in het
              leven geroepen door een bende supporters die elke week trouw op
              post stonden. Na verloop van tijd werd de pagina echter minder en
              minder actief, en de term "Ultras" verdween langzaamaan.
            </p>
            <p>
              Tot het seizoen 2018 - 2019. In de zoektocht naar de
              kampioenstitel konden de spelers elke vorm van steun gebruiken,
              en wat is er beter dan de KCVV Ultras hiervoor terug nieuw leven
              in te blazen? Enkele nieuwe voortrekkers stonden op en plaatsten
              hun schouders onder de eerste sfeeracties. Bengaals vuur en
              rookpotten werden aangekocht, trommels en spandoeken naast het
              veld geposteerd en we konden knallen!
            </p>
            <p>
              Het enthousiasme, gekoppeld aan de goede resultaten, werkte
              aanstekelijk en de bende groeide al snel. De sfeeracties volgden
              in de tweede helft van het seizoen elkaar dan ook snel op en
              kregen uitbreiding op verplaatsing: met de bierfiets de ploeg over
              de streep gaan trekken op FC Zemst, met de bus naar Mollem enz...
            </p>
            <p>
              Of het nu aan de steun van de Ultras lag of niet, het seizoen werd
              bezegeld met een prachtige kampioenstitel, en volgend jaar kunnen
              de Ultras hun ding doen in 2e provinciale!
            </p>
          </section>
          <section>
            <h2>Wat doen we</h2>
            <blockquote>
              Positief aanmoedigen van de eigen ploeg; vocaal, met trommels, met
              sfeermateriaal, met bussen enz...
            </blockquote>
            <p>
              Het doel van de KCVV Ultras is om onze eigen ploeg positief aan te
              moedigen! Agressie of negatief gedrag naar de
              tegenstanders/wedstrijdleiding zal op geen enkel moment
              getolereerd worden!
            </p>
            <p>
              Met sfeermateriaal (bengaals vuur, rookpotten, trommels) en vocale
              steun proberen we zo vaak mogelijk aanwezig te zijn op
              wedstrijden.
            </p>
            <p>
              Indien de tegenstander zich hiertoe leent, zullen er ook enkele
              bussen of andere vervoersmiddelen ingelegd worden om samen de
              verplaatsing te maken.
            </p>
            <p>
              Op het einde van het seizoen 2018-2019 werd ook voor het eerst een
              volledig eigen evenement georganiseerd: een afterwork party
              gecombineerd met een "Schijt je rijk", waarbij maar liefst{' '}
              <strong>ALLE 500 lotjes</strong> verkocht werden aan
              sympathisanten!{' '}
              <strong>
                De winnaar kreeg een cheque uitgereikt van 750 euro!
              </strong>
            </p>
            <CardImage
              title="Schijt je rijk"
              localFile={sjr}
              metadata={false}
            />
          </section>
          <section>
            <h2>Lid worden</h2>
            <p>
              De makkelijkste manier om op de hoogte te blijven van acties,
              busritten, evenementen... is via onze vernieuwde facebookpagina:
              <br />
              <a
                className={'btn btn--arrow'}
                href="https://www.facebook.com/KCVV.ULTRAS/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={"fa fa-facebook-square"} aria-hidden="true"></i>{' '}
                facebook.com/KCVV.ULTRAS
              </a>
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    sjr: file(name: { eq: "sjr" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 75, cropFocus: ATTENTION) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    champ: file(name: { eq: "ultraskampioen" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 75, cropFocus: ATTENTION) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default () => (
  <StaticQuery query={query} render={data => <UltrasPage data={data} />} />
)
