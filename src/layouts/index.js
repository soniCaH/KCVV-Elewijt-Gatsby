import React, { Component, Fragment } from "react"

// import './index.scss'
import PageHeader from "../components/page-header"
import { PageHeaderMobile } from "../components/page-header"
import PageFooter from "../components/page-footer"

class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <div className={"off-canvas-wrapper"}>
          <PageHeaderMobile />
          <PageHeader />

          <main className={"off-canvas-content"} data-off-canvas-content>
            {children}
          </main>

          <PageFooter />
        </div>
      </Fragment>
    )
  }

  componentDidMount() {
    const $ = require("jquery")
    // eslint-disable-next-line
    const foundation = require("foundation-sites")
    $(document).foundation()

    $(".main-nav a").on("click", function () {
      if (
        $(this).attr("href").indexOf(window.location.pathname) === 0 &&
        window.location.hash
      ) {
        const url = $(this).attr("href")
        const hash = url.substring(url.indexOf("#"))

        $(`.team-sub_navigation a[href="${hash}"]`).click()
      }
    })

    if (window.location.hash) {
      $(`.team-sub_navigation a[href="${window.location.hash}"]`).click()
    }
  }
}

export default Layout
