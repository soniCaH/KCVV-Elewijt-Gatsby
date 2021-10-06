// import './index.scss'
import PageHeader, { PageHeaderMobile } from "../components/page-header"
import React, { Component, Fragment } from "react"

import $ from "jquery"
import PageFooter from "../components/page-footer"
import { forceCheck } from "react-lazyload"

class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <div className={`off-canvas-wrapper`}>
          <PageHeaderMobile />
          <PageHeader />

          <main className={`off-canvas-content`} data-off-canvas-content>
            {children}
          </main>

          <PageFooter />
        </div>
      </Fragment>
    )
  }

  componentDidMount() {
    // eslint-disable-next-line
    const foundation = require("foundation-sites")
    $(document).foundation()

    $(`.main-nav a`).on(`click`, function () {
      if ($(this).attr(`href`).indexOf(window.location.pathname) === 0 && window.location.hash) {
        const url = $(this).attr(`href`)
        const hash = url.substring(url.indexOf(`#`))

        $(`.team-sub_navigation a[href="${hash}"]`).trigger(`click`, [true])
      }
    })

    if (window.location.hash) {
      $(`.team-sub_navigation a[href="${window.location.hash}"]`).trigger(`click`, [true])
    }
    $(`.tabs`).on(`change.zf.tabs`, function () {
      forceCheck()
    })
  }
}

export default Layout
