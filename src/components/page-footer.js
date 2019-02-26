import React, { Component } from 'react'

import './page-footer.scss'
import logo from '../images/logo-flat.png'
import SocialMedia from './social-media';

class PageFooter extends Component {
  render() {
    return (
      <footer className="page-footer">
          <div className="page-footer--widgets grid-container grid-x">
            <div className="small-12 medium-3 columns">
                <img src={logo} alt="KCVV Elewijt" />
            </div>
            <div className="small-12 medium-3 columns">
                <h4>Contact</h4>
                <p>Lalalalalala</p>
            </div>
            <div className="small-12 medium-6 columns">
                <h4>Social media</h4>
                <SocialMedia />
            </div>
          </div>
      </footer>
    )
  }
}

export default PageFooter
