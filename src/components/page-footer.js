import React, { Component } from 'react'

import './page-footer.scss'
import logo from '../images/logo-flat.png'
import FooterSocialMedia from './footer-social-media';

class PageFooter extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="page-footer--widgets grid-container grid-x">
          <div className="small-12 large-6 cell">
            <img src={logo} alt="KCVV Elewijt" />
          </div>

          <div className="small-12 large-6 cell">
            <h4>Social Media</h4>
            <FooterSocialMedia />
          </div>
        </div>
      </footer>
    )
  }
}

export default PageFooter
