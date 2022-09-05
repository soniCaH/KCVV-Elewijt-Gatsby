import { graphql, useStaticQuery } from "gatsby"
import QRCode from "qrcode.react"
import React, { FunctionComponent, useState } from "react"
import Select, { ValueType } from "react-select"

import SEO from "../components/seo"
import Layout from "../layouts/index"
import { TeamsListProps } from "../types/pages.types"

const CalendarForm = () => {
  const calendarUrl = `webcal://footbalisto.be/calendar`
  const [teamsSelected, setTeamSelected] = useState<string[]>([])
  const [sideSelected, setSideSelected] = useState<string>(``)

  const sides = [
    { value: `home`, label: `Alleen thuiswedstrijden` },
    { value: `away`, label: `Alleen uitwedstrijden` },
    { value: `all`, label: `Alle wedstrijden` },
  ]
  const { teamEdges }: TeamsListProps = useStaticQuery(graphql`
    query {
      teamEdges: allNodeTeam(filter: { field_vv_id: { ne: null } }) {
        edges {
          node {
            field_division_full
            field_vv_id
            title
          }
        }
      }
    }
  `)

  const teams = teamEdges.edges.map(({ node }) => ({
    value: node.field_vv_id,
    label: `${node.title} ${node.field_division_full !== null ? `(${node.field_division_full})` : ``}`,
  }))

  const handleSideChange = (inputValue: { value: string; label: string } | null) => {
    if (inputValue?.value) {
      setSideSelected(inputValue.value)
    } else {
      setSideSelected(`all`)
    }
  }

  const handleTeamsChange = (inputValue: ValueType<{ value: string; label: string }, boolean>) => {
    if (Array.isArray(inputValue)) {
      setTeamSelected(inputValue.map(({ value }) => value))
    } else {
      setTeamSelected([])
    }
  }

  return (
    <div>
      <form>
        <p>
          <label htmlFor="calendar__sides">Wedstrijden:</label>
        </p>
        <Select
          options={sides}
          name="sides"
          id="calendar__sides"
          className="select__input"
          onChange={handleSideChange}
        />
        <p>
          <label htmlFor="calendar__teams">Teams:</label>
        </p>
        <Select
          options={teams}
          isMulti
          name="teams"
          id="calendar__teams"
          className="select__input"
          onChange={handleTeamsChange}
        />
      </form>
      <p>
        Calendar:{` `}
        <a
          href={`${calendarUrl}?teams=${teamsSelected}&side=${sideSelected}`}
        >{`${calendarUrl}?teams=${teamsSelected}&side=${sideSelected}`}</a>
      </p>
      <p>
        <QRCode value={`${calendarUrl}?teams=${teamsSelected}&side=${sideSelected}`} />
      </p>
    </div>
  )
}

const CalendarPage = () => {
  return (
    <Layout>
      <SEO
        lang="nl-BE"
        title="Maak uw eigen kalender"
        description="Stel een eigen seizoenskalender samen met de teams die jou interesseren."
        path="calendar"
      />

      <div className={`limited-width_wrapper`}>
        <header>
          <h1>Stel je kalender samen</h1>
        </header>
        <main>
          <CalendarForm />
        </main>
      </div>
    </Layout>
  )
}

export default CalendarPage
