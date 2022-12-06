import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { Seo } from "../components/Seo"
import { Spinner } from "../components/Spinner"
import Layout from "../layouts"
import { PlayerListProps } from "../Types/Player"
import Select from "react-select"
import ESAPI from "node-esapi"

import "./share.scss"

const ShareForm = () => {
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
    setMatch(ESAPI.encoder().encodeForJS(event.target.value))
  }

  const handleScoreChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setScore(ESAPI.encoder().encodeForJS(event.target.value))
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
          <label htmlFor="share__player">Speler:</label>
          <Select
            options={players}
            name="player"
            id="share__player"
            className="select__input"
            onChange={handlePlayerChange}
          />
        </p>
        <p>
          <label htmlFor="share__game">Wedstrijd:</label>
          <input
            id="share__game"
            onChange={handleMatchChange}
            className={`input__input`}
            placeholder="KCVV Elewijt - KFC Eppegem"
            value={match}
            required={true}
          />
        </p>
        <p>
          <label htmlFor="share__score">Score:</label>
          <input
            id="share__score"
            onChange={handleScoreChange}
            className={`input__input`}
            placeholder="2 — 0"
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

const SharePage = () => (
  <Layout>
    <header className="page_header__wrapper">
      <div className="page_header">
        <h1>Creëer afbeelding</h1>
      </div>
    </header>
    <div className="share__wrapper page__wrapper page__wrapper--limited page__section">
      <ShareForm />
    </div>
  </Layout>
)

export const Head = () => (
  <Seo
    title="Creëer instagram goal story"
    description="Creëer een nieuwe instagram story voor een doelpunt."
    path="/share"
  />
)

export default SharePage
