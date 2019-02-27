import React, { Component } from 'react'

import './page-footer.scss'
import logo from '../images/logo-flat.png'
import SocialMediaWidget from './social-media-widget';
import Gallery from './gallery';

class PageFooter extends Component {
  render() {
    return (
      <footer className="page-footer">
          <div className="page-footer--widgets grid-container grid-x">
            <div className="small-12 medium-3 cell">
                <img src={logo} alt="KCVV Elewijt" />
            </div>
            <div className="small-12 medium-9 cell">
                <h4>Contact</h4>
                <p>Lalalalalala</p>
            </div>
          </div>


          <div className="grid-container">
                <h4>Social media</h4>
                <SocialMediaWidget />
            </div>



          <div className="grid-container">
                <h4>Social media</h4>
                <Gallery />
            </div>
      </footer>
    )
  }
}

export default PageFooter
