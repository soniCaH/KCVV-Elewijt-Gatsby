import React, { Component } from "react"

import Layout from "../../layouts/index"
import SEO from "../../components/seo"

import Calendar from "../../components/Calendar"

class CalendarPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          lang="nl-BE"
          title="Evenementen Kalender"
          description="Overzicht van club evenementen"
          path="/club/calendar"
        />

        <section className="limited-width_wrapper club__calendar">
          <h1>Club kalender</h1>
          <Calendar />
        </section>
      </Layout>
    )
  }
}

export default CalendarPage
