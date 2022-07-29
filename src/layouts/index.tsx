import $ from "jquery"
import React, { Fragment, useEffect, FunctionComponent } from "react"
import { forceCheck } from "react-lazyload"

import { PageHeader, PageHeaderMobile } from "../components/PageHeader"

declare global {
  interface JQuery {
    foundation(): void
  }
}

const Layout = ({ children }) => {
  useEffect(() => {
    // eslint-disable-next-line
    const foundation = require(`foundation-sites`)
    $(document).foundation()

    $(`.main-nav a`).on(`click`, function () {
      if ($(this)?.attr(`href`)?.indexOf(window.location.pathname) === 0 && window.location.hash) {
        const url = $(this).attr(`href`) || ``
        const hash = url.substring(url.indexOf(`#`))

        $(`.team-sub_navigation a[href="${hash}"]`).trigger(`click`, [true])
      }
    })

    if (window.location.hash) {
      $(`.team-sub_navigation a[href="${window.location.hash}"]`).trigger(`click`, [true])
    }
    $(`.widget__filter`).on(`change.zf.tabs`, function () {
      forceCheck()
    })
  }, [])

  return (
    <Fragment>
      <div className={`off-canvas-wrapper`}>
        <PageHeaderMobile />
        <PageHeader />

        <main className={`off-canvas-content`} data-off-canvas-content>
          {children}
        </main>
      </div>
    </Fragment>
  )
}

export default Layout
