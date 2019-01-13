import React from 'react'
import Layout from '../layouts/index'
import HeroSlider from '../components/hero-slider'
import FeaturedNews from '../components/featured-news'
import teamPic from '../images/kcvv-team.jpg'
import matchesSlider from '../images/match-slider.png'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <HeroSlider />
        <div className="grid-container site-content">
          <div className="grid-x grid-margin-x">
            <section className="cell large-8">
              <FeaturedNews />
            </section>
            <aside className="cell large-4">
              <div className="grid-x featured__matches grid-margin-x">
                <article className="medium-6 large-12 cell featured__news-item article-card">
                  <div
                    class="posts__item posts__item--card post__category--interview card"
                    data-equalizer-watch="true"
                  >
                    <figure class="posts__thumb">
                      <div class="posts__cat">
                        <span class="label posts__cat-label">Interview</span>
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
                        Asse Terheide - KCVV Elewijt A
                      </h6>
                      <div class="posts__excerpt">
                        <table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Team</th>
                              <th>Pts</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                2
                              </td>
                              <td>KCVV Elewijt A</td>
                              <td>40</td>
                            </tr>
                            <tr>
                              <td>
                                12
                              </td>
                              <td>KVC.Asse-Terheide A</td>
                              <td>18</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="medium-6 large-12 cell">
                  MATCH B-ploeg
                </article>
                <article className="medium-12 cell">Other matches</article>
              </div>
            </aside>
          </div>
        </div>

        <div className="grid-container full">
          <img src={matchesSlider} />
        </div>
      </Layout>
    )
  }

  componentDidMount() {
    // alert('hey');
  }
}

export default IndexPage
