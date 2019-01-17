import React, { Component } from 'react'
import picEli from '../images/foto-eli.jpg'
import picWim from '../images/foto-wim.jpg'
import picMickKjelle from '../images/foto-mick_kjelle.jpg'
import picMattiEvert from '../images/foto-matti_evert.jpg'
import picRickyKen from '../images/foto-ricky_ken.jpg'
import picThomasSammy from '../images/foto-thomas_sammy.jpg'
import teamPic from '../images/kcvv-team.jpg'
import './featured-news.scss'

class FeaturedNews extends Component {
  render() {
    return (
      <div
        className="grid-x featured__news grid-margin-x grid-margin-y"
        data-equalizer="true"
        data-equalize-on="medium"
        id="featured__news"
      >
      <article className="medium-6 cell featured__news-item article-card">
          <div
            class="posts__item posts__item--card post__category--transfer card"
            data-equalizer-watch="true"
          >
            <figure class="posts__thumb">
              <div class="posts__cat">
                <span class="label posts__cat-label">Contract</span>
              </div>
              <a href="#">
                <img src={picMickKjelle} alt="" />
              </a>
            </figure>
            <div class="posts__inner card__content">
              <time datetime="2016-08-23" class="posts__date">
                16 januari 2019
              </time>
              <h6 class="posts__title">
                <a href="index.html">
                  Mick en Kjelle verlengen contract voor een jaar
                </a>
              </h6>
              <div class="posts__excerpt">
                <p>Met Mick en Kjelle verlengden vandaag de 9e en 10e speler hun contract voor volgend seizoen. De kern voor 2019-2020 begint zo stilaan vorm te krijgen.</p>
                <p>✍️ Mick de Voster - onze tweede doelman tekent voor zijn tweede seizoen bij KCVV</p>
                <p>✍️ Kjelle Vervoort - Na een kort avontuur bij KSC Machelen vorig jaar, bindt Kjell zich ook voor volgend seizoen aan zijn oude liefde.</p>
              </div>
            </div>
          </div>
        </article>
      <article className="medium-6 cell featured__news-item article-card">
          <div
            class="posts__item posts__item--card post__category--event card"
            data-equalizer-watch="true"
          >
            <figure class="posts__thumb">
              <div class="posts__cat">
                <span class="label posts__cat-label">VIP Lunch</span>
              </div>
              <a href="#">
                <img src={teamPic} alt="" />
              </a>
            </figure>
            <div class="posts__inner card__content">
              <time datetime="2016-08-23" class="posts__date">
                13 januari 2019
              </time>
              <h6 class="posts__title">
                <a href="index.html">
                  Lunch van de Lege Portemonnee
                </a>
              </h6>
              <div class="posts__excerpt">
                <p>KCVV Elewijt wenst al zijn supporters nu al een voorspoedig 2019 en nodigt U uit op zijn 3de VIP-lunch van dit voetbalseizoen en dit in afwachting van een spannende thuiswedstrijd van onze 1ste ploeg alsook van de B-ploeg. </p>
              </div>
            </div>
          </div>
        </article>
        <article className="medium-6 cell featured__news-item article-card">
          <div
            class="posts__item posts__item--card post__category--interview card"
            data-equalizer-watch="true"
          >
            <figure class="posts__thumb">
              <div class="posts__cat">
                <span class="label posts__cat-label">Interview</span>
              </div>
              <a href="#">
                <img src={picEli} alt="" />
              </a>
            </figure>
            <div class="posts__inner card__content">
              <time datetime="2016-08-23" class="posts__date">
                13 januari 2019
              </time>
              <h6 class="posts__title">
                <a href="index.html">
                  Eli: "Zullen alles op alles zetten om de buit tegen Infinity
                  binnen te halen"
                </a>
              </h6>
              <div class="posts__excerpt">
                Deze namiddag hoopt Groenwit met de komst van Infinity Vilvoorde
                nog eens de volle buit thuis te houden. Onze jongens lieten in
                de terugronde al wat punten liggen tegen leider Mazenzele en
                afgelopen week nog op het veld van Delta Londerzeel. Eli Nuyts
                weet dat we meer verdienden tegen Delta, maar is finaal toch nog
                blij met het punt na een zenuwslopend slot.
              </div>
            </div>
          </div>
        </article>
        <article className="medium-6 cell featured__news-item article-card">
          <div
            class="posts__item posts__item--card post__category--transfer card"
            data-equalizer-watch="true"
          >
            <figure class="posts__thumb">
              <div class="posts__cat">
                <span class="label posts__cat-label">Contract</span>
              </div>
              <a href="#">
                <img src={picThomasSammy} alt="" />
              </a>
            </figure>
            <div class="posts__inner card__content">
              <time datetime="2016-08-23" class="posts__date">
                11 januari 2019
              </time>
              <h6 class="posts__title">
                <a href="index.html">Rypens en Abdellah tekenen bij</a>
              </h6>
              <div class="posts__excerpt">
                <p>
                  Januari blijkt een drukke maand aan de onderhandelingstafel
                  van De Reggel. Zo bindt ook ons centraal defensief duo zich
                  voor volgend seizoen aan KCVV Elewijt!
                </p>

                <p>
                  ✍️ Thomas Rypens - onze kapitein, goed voor 3 doelpunten tot
                  dusver
                </p>
                <p>✍️ Sammy Abdellah - zorgde samen met de hele verdediging
                  reeds voor 4 clean sheet
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className="medium-6 cell featured__news-item article-card">
          <div
            class="posts__item posts__item--card post__category--interview card"
            data-equalizer-watch="true"
          >
            <figure class="posts__thumb">
              <div class="posts__cat">
                <span class="label posts__cat-label">Interview</span>
              </div>
              <a href="#">
                <img src={picWim} alt="" />
              </a>
            </figure>
            <div class="posts__inner card__content">
              <time datetime="2016-08-23" class="posts__date">
                11 januari 2019
              </time>
              <h6 class="posts__title">
                <a href="index.html">
                  Wim: "We moeten meteen scherp staan tegen Delta."
                </a>
              </h6>
              <div class="posts__excerpt">
                Na een korte winterslaap, mogen onze jongens vandaag weer aan de
                slag tegen Delta Londerzeel. Delta zit ons nauw op de hielen in
                het klassement en dus voor Groenwit meteen een extra reden om
                fris en scherp aan de aftrap te staan. KCVV heeft dan ook de
                ambitie om mee te spelen met de top in de reeks. Coach Wim
                D’Hondt is best tevreden met de stand van zaken, maar hij beseft
                dat het nog een een moeilijke terugronde wordt.
              </div>
            </div>
          </div>
        </article>
        <article className="medium-6 cell featured__news-item article-card">
          <div
            class="posts__item posts__item--card post__category--transfer card"
            data-equalizer-watch="true"
          >
            <figure class="posts__thumb">
              <div class="posts__cat">
                <span class="label posts__cat-label">Contract</span>
              </div>
              <a href="#">
                <img src={picMattiEvert} alt="" />
              </a>
            </figure>
            <div class="posts__inner card__content">
              <time datetime="2016-08-23" class="posts__date">
                6 januari 2019
              </time>
              <h6 class="posts__title">
                <a href="index.html">
                  Evert en Matthias tekenen een seizoen bij
                </a>
              </h6>
              <div class="posts__excerpt">
                <p>
                  Net voor de topper tegen Delta Londerzeel kondigen we nog 2
                  contractverlengingen uit ons middenveld aan 💚!
                </p>
                <p>
                  ✍️ Evert Vandenwijngaert - Verdedigende middenvelder en de
                  long van onze ploeg
                </p>
                <p>
                  ✍️ Matthias Vannieuwenhuyse - Zorgt met zijn voetballend
                  vermogen voor creativiteit in de ploeg
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className="medium-6 cell featured__news-item article-card">
          <div
            class="posts__item posts__item--card post__category--transfer card"
            data-equalizer-watch="true"
          >
            <figure class="posts__thumb">
              <div class="posts__cat">
                <span class="label posts__cat-label">Contract</span>
              </div>
              <a href="#">
                <img src={picRickyKen} alt="" />
              </a>
            </figure>
            <div class="posts__inner card__content">
              <time datetime="2016-08-23" class="posts__date">
                4 januari 2019
              </time>
              <h6 class="posts__title">
                <a href="index.html">Ricky en Ken tekenen een seizoen bij</a>
              </h6>
              <div class="posts__excerpt">
                <p>
                  Nu de jaarwisseling achter ons ligt en alle aandacht opnieuw
                  naar de competitie gaat, bouwt het bestuur achter de schermen
                  verder aan de kern voor het seizoen 2019-2020. Volgende
                  spelers verlengden gisteren hun contract bij KCVV:
                </p>
                <p>
                  ✍️ Ricky Coertjens - goed voor 8 doelpunten in de heenronde
                </p>
                <p>✍️ Ken Vanhalle - minst gepasseerde doelman van de reeks</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default FeaturedNews
