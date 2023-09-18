import $ from "jquery"
import React, { Fragment, useEffect, PropsWithChildren } from "react"

import { PageFooter } from "../components/PageFooter"
import { PageHeader, PageHeaderMobile } from "../components/PageHeader"

declare global {
  interface JQuery {
    foundation(): void
  }
}

const Layout = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    // eslint-disable-next-line
    const foundation = require(`foundation-sites`)
    $(document).foundation()

    $(`.main-nav a`).on(`click`, function () {
      if ($(this)?.attr(`href`)?.indexOf(window.location.pathname) === 0 && window.location.hash) {
        const url = $(this).attr(`href`) || ``
        const hash = url.substring(url.indexOf(`#`))

        $(`.team__sub_navigation a[href="${hash}"]`).trigger(`click`, [true])
      }
    })

    if (window.location.hash) {
      $(`.team__sub_navigation a[href="${window.location.hash}"]`).trigger(`click`, [true])
    }
    // $(`.widget__filter, .team__sub_navigation__tabs`).on(`change.zf.tabs`, function () {
    //   // LazyLoad.shouldComponentUpdate()
    // })
  }, [])

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

export const FullScreenLayout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <div style={{ padding: `2em`, textTransform: `uppercase`, fontWeight: `500` }}>
        <main>{children}</main>
      </div>
    </Fragment>
  )
}

export default Layout
