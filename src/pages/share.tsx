import React, { FunctionComponent, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../layouts/index"
import { PlayerListProps } from "../types/pages.types"
import SEO from "../components/seo"
import Select from "react-select"
import Spinner from "../components/Spinner"

const ShareForm: FunctionComponent = () => {
  const templateUrl = `https://footbalisto.be/share/instagram/`

  const [playerSelected, setPlayerSelected] = useState<string>(``)
  const [score, setScore] = useState<string>(``)
  const [match, setMatch] = useState<string>(``)
  const [imageUrl, setImageUrl] = useState<string>(``)
  const [imageLoading, setImageLoading] = useState<boolean>(false)

  const { playerEdges }: PlayerListProps = useStaticQuery(graphql`
    query {
      playerEdges: allNodePlayer(filter: { field_vv_id: { ne: null } }) {
        edges {
          node {
            path {
              alias
            }
            field_firstname
            field_lastname
          }
        }
      }
    }
  `)

  const players = playerEdges.edges.map(({ node }) => ({
    value: node.path.alias,
    label: `${node.field_firstname} ${node.field_lastname}`,
  }))

  const handlePlayerChange = (inputValue: { value: string; label: string } | null) => {
    if (inputValue?.value) {
      setPlayerSelected(inputValue.value.replace(`/player/`, ``))
    } else {
      setPlayerSelected(``)
    }
  }

  const handleMatchChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setMatch(event.target.value)
  }

  const handleScoreChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setScore(event.target.value)
  }

  const handleGenerateImage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (match !== `` && score !== `` && playerSelected !== ``) {
      setImageUrl(``)
      setImageUrl(`${templateUrl}${playerSelected}?score=${score}&match=${match}`)
      setImageLoading(true)
    }
  }

  const handleImageLoaded = () => {
    setImageLoading(false)
  }

  return (
    <div>
      <form>
        <p>
          <label htmlFor="calendar__player">Speler:</label>
          <Select
            options={players}
            name="player"
            id="calendar__player"
            className="select__input"
            onChange={handlePlayerChange}
          />
        </p>
        <p>
          <label htmlFor="calendar__game">Wedstrijd:</label>
          <input
            id="calendar__game"
            onChange={handleMatchChange}
            className={`input__input`}
            placeholder="KCVV Elewijt - KFC Eppegem"
            value={match}
            required={true}
          />
        </p>
        <p>
          <label htmlFor="calendar__score">Score:</label>
          <input
            id="calendar__score"
            onChange={handleScoreChange}
            className={`input__input`}
            placeholder="2-0"
            value={score}
            required={true}
          />
        </p>
        <p>
          <button onClick={handleGenerateImage} className="btn">
            Creëer afbeelding.
          </button>
        </p>
      </form>

      <p>
        {imageLoading && <Spinner />}
        {imageUrl && <img src={imageUrl} onLoad={handleImageLoaded} />}
      </p>
    </div>
  )
}

const CreateSharePage: FunctionComponent = () => (
  <Layout>
    <SEO
      lang="nl-BE"
      title="Creëer instagram goal story"
      description="Creëer een nieuwe instagram story voor een doelpunt."
      path="calendar"
    />

    <div className={`limited-width_wrapper`}>
      <header>
        <h1>Creëer afbeelding</h1>
      </header>
      <main>
        <ShareForm />
      </main>
    </div>
  </Layout>
)

export default CreateSharePage
