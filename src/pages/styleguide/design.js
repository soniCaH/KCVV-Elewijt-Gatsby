import React, { Component } from "react"

import Layout from "../../layouts/index"

import SEO from "../../components/seo"
import PlayerFeatured from "../../components/player--featured"
import { PlayerMinimal } from "../../components/objects/player"

class DesignPage extends Component {
  render() {
    const player1 = new PlayerMinimal({
      nameFirst: "Nick",
      nameLast: "De Letter",
      shirtNr: 11,
      gamesPlayed: 11,
      position: "a",
      cleanSheets: 0,
      goalsScored: 2,
      cardsYellow: 2,
      cardsRed: 0,
      imageSrc:
        "https://api.kcvvelewijt.be/sites/default/files/fallback/kcvv-player-bg.png",
      link: "/player/nick-de-letter",
    })

    return (
      <Layout>
        <SEO lang="nl-BE" title="Er is maar één plezante compagnie" />

        <section className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className={"cell large-12 typography"}>
              <h1>Typography styleguide</h1>
              <h2>Typography styleguide</h2>
              <h3>Typography styleguide</h3>
              <h4>Typography styleguide</h4>
              <h5>Typography styleguide</h5>
              <h6>Typography styleguide</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
                nulla euismod, aliquet ipsum sit amet, hendrerit libero. Cras
                facilisis gravida maximus. Phasellus maximus aliquet mi.
                Praesent at risus odio. Morbi mollis dapibus ex eu blandit.
                Proin bibendum, velit ut vehicula feugiat, dui massa molestie
                mauris, a congue risus leo vitae tellus. Nullam sit amet lorem
                vel elit rhoncus ullamcorper. Aliquam volutpat orci eu rhoncus
                tincidunt. Donec porttitor urna sed ipsum laoreet tincidunt.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; In at dolor et nisi porta lacinia.
                Pellentesque sit amet lacus sem. Nulla mattis, augue a lacinia
                consectetur, metus metus sollicitudin eros, vel ornare tellus
                felis at dolor. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos.
              </p>
              <p>
                Donec non magna eu ipsum lacinia gravida. Duis mollis, tortor
                sed imperdiet elementum, leo ipsum pretium orci, eu efficitur
                elit odio suscipit lectus. Sed vel viverra sem. Morbi faucibus,
                orci in sollicitudin suscipit, ex sapien auctor orci, id
                bibendum ligula ante quis est. Sed cursus vitae dui vel
                bibendum. Phasellus sapien justo, laoreet faucibus felis ut,
                semper vulputate nunc. Aliquam ante velit, sodales sed nisi ac,
                tristique dignissim ligula. Vivamus imperdiet diam id orci
                eleifend, in rhoncus magna faucibus. In odio nisi, imperdiet at
                est congue, viverra iaculis magna. Cras volutpat vel neque sed
                semper. Aenean eget molestie nisi. Integer et justo pretium,
                vehicula arcu eget, consectetur dolor. Etiam scelerisque justo
                ac urna elementum facilisis.
              </p>
              <p>
                Vivamus in mollis sem. Cras lacinia pellentesque augue, at
                tincidunt quam condimentum at. Integer feugiat aliquet enim,
                quis pulvinar tellus aliquam quis. Mauris ac ante eget tellus
                sollicitudin varius. Nam nisl justo, ultrices non aliquet sed,
                ultricies eu tortor. Duis at porttitor mi. Proin vel risus odio.
                Praesent volutpat pellentesque dignissim. Vivamus tortor arcu,
                accumsan vel eros non, facilisis vestibulum nulla. Donec
                placerat fermentum accumsan. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos. Nunc
                sed risus vel justo convallis viverra quis ut nunc. Donec sed
                faucibus nunc, sed sollicitudin risus. Nulla consequat leo at
                justo porttitor iaculis. Nunc nec porta ante. Cras suscipit erat
                a massa auctor, non viverra odio vulputate.
              </p>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
                nulla euismod, aliquet ipsum sit amet, hendrerit libero.
              </blockquote>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Team</th>
                    <th>M</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>G+</th>
                    <th>G-</th>
                    <th>+/-</th>
                    <th>Pts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Sp.Rotselaar A</td>
                    <td>12</td>
                    <td>8</td>
                    <td>3</td>
                    <td>1</td>
                    <td>34</td>
                    <td>16</td>
                    <td>18</td>
                    <td>27</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>VC.Houtem-Oplinter A</td>
                    <td>12</td>
                    <td>8</td>
                    <td>2</td>
                    <td>2</td>
                    <td>31</td>
                    <td>15</td>
                    <td>16</td>
                    <td>26</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>FC.Perk A</td>
                    <td>12</td>
                    <td>7</td>
                    <td>2</td>
                    <td>3</td>
                    <td>33</td>
                    <td>14</td>
                    <td>19</td>
                    <td>23</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>HO.Veltem A</td>
                    <td>12</td>
                    <td>7</td>
                    <td>2</td>
                    <td>3</td>
                    <td>16</td>
                    <td>15</td>
                    <td>1</td>
                    <td>23</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>KFC.Herent A</td>
                    <td>12</td>
                    <td>6</td>
                    <td>3</td>
                    <td>3</td>
                    <td>26</td>
                    <td>19</td>
                    <td>7</td>
                    <td>21</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>VK.Holsbeek A</td>
                    <td>12</td>
                    <td>6</td>
                    <td>2</td>
                    <td>4</td>
                    <td>21</td>
                    <td>15</td>
                    <td>6</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>KCVV.Elewijt A</td>
                    <td>12</td>
                    <td>5</td>
                    <td>4</td>
                    <td>3</td>
                    <td>23</td>
                    <td>16</td>
                    <td>7</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>RC.Butsel A</td>
                    <td>12</td>
                    <td>5</td>
                    <td>3</td>
                    <td>4</td>
                    <td>28</td>
                    <td>20</td>
                    <td>8</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>FC.Averbode-Okselaar A</td>
                    <td>12</td>
                    <td>5</td>
                    <td>2</td>
                    <td>5</td>
                    <td>28</td>
                    <td>22</td>
                    <td>6</td>
                    <td>17</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>SNA.Keiberg A</td>
                    <td>12</td>
                    <td>3</td>
                    <td>5</td>
                    <td>4</td>
                    <td>23</td>
                    <td>27</td>
                    <td>-4</td>
                    <td>14</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>KFC.Rap.Wezemaal A</td>
                    <td>12</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>17</td>
                    <td>24</td>
                    <td>-7</td>
                    <td>13</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>K.St.Haasrode A</td>
                    <td>12</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>17</td>
                    <td>30</td>
                    <td>-13</td>
                    <td>13</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>KVC.Kessel-Lo 2000 A</td>
                    <td>12</td>
                    <td>3</td>
                    <td>2</td>
                    <td>7</td>
                    <td>17</td>
                    <td>28</td>
                    <td>-11</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>RD.Zoutleeuw</td>
                    <td>12</td>
                    <td>2</td>
                    <td>3</td>
                    <td>7</td>
                    <td>18</td>
                    <td>31</td>
                    <td>-13</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>VC.Bekkevoort A</td>
                    <td>12</td>
                    <td>2</td>
                    <td>2</td>
                    <td>8</td>
                    <td>13</td>
                    <td>29</td>
                    <td>-16</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>KVC.Haacht A</td>
                    <td>12</td>
                    <td>1</td>
                    <td>1</td>
                    <td>10</td>
                    <td>12</td>
                    <td>36</td>
                    <td>-24</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>

              <table class="responsive-card-table unstriped">
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Naam</th>
                    <th>Positie</th>
                    <th>KCVV sinds</th>
                    <th>Meer info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Actie">
                      <span role="img" aria-label="Contract getekend">
                        📝
                      </span>
                    </td>
                    <td data-label="Naam">Dautzen Jaspers</td>
                    <td data-label="Positie">Verdediger</td>
                    <td data-label="KCVV sinds">Pre-historie</td>
                    <td data-label="Meer info">
                      <a
                        href="https://www.facebook.com/KCVVElewijt/posts/3498364080203945"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Actie">
                      <span role="img" aria-label="Contract getekend">
                        📝
                      </span>
                    </td>
                    <td data-label="Naam">Ken Vanhalle</td>
                    <td data-label="Positie">Doelman</td>
                    <td data-label="KCVV sinds">2018/2019</td>
                    <td data-label="Meer info">
                      <a
                        href="https://www.facebook.com/KCVVElewijt/posts/3510448235662196"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Actie">
                      <span role="img" aria-label="Contract getekend">
                        📝
                      </span>
                    </td>
                    <td data-label="Naam">Sammy Abdellah</td>
                    <td data-label="Positie">Verdediger</td>
                    <td data-label="KCVV sinds">2018/2019</td>
                    <td data-label="Meer info">
                      <a
                        href="https://www.facebook.com/KCVVElewijt/posts/3519639191409767"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className={"cell large-8 featured-article card"}>
              <header className={"card__header"}>
                <h4>Speler van de week</h4>
              </header>
              <section className={""}>
                <PlayerFeatured player={player1} />
              </section>
            </section>
            <section className={"cell large-4 featured-article card"}>
              <header className={"card__header"}>
                <h4>Speler van de week</h4>
              </header>
              <section className={""}>
                <PlayerFeatured player={player1} />
              </section>
            </section>
          </div>
        </section>
      </Layout>
    )
  }
}

export default DesignPage
