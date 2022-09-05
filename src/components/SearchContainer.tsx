import axios from "axios"
import React, { ChangeEvent, FormEvent } from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby"
import { SearchResult } from "../Types/Search"
import "./SearchContainer.scss"

const SearchContainer = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<string>(``)

  const queryResults = searchQuery === `` ? [] : searchResults

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  useEffect(() => {
    async function searchData() {
      if (searchQuery !== null) {
        const response = await axios.get(
          `https://api.kcvvelewijt.be/jsonapi/index/kcvv_content?filter[fulltext]=${searchQuery}`
        )
        setSearchResults(response.data.data)
        setLoading(false)
      }
    }
    searchData().catch((error) => {
      setError(true)
      console.log(`====================================`)
      console.log(`Something bad happened while fetching some data for the search.\n${error}`)
      console.log(`====================================`)
    })
  }, [searchQuery])

  const searchData = (e: ChangeEvent) => {
    setSearchQuery((e.target as HTMLInputElement).value)
  }

  const renderForm = (searchQuery: string) => (
    <form onSubmit={handleSubmit}>
      <div>
        <label className={`search_input__label`} htmlFor="search">
          <input
            id="search"
            onChange={searchData}
            className={`search_input__input`}
            placeholder="Spelersnaam, ploegnaam, deel van een artikel..."
            value={searchQuery}
            required
          />
          <span className={`search_input__label__inner_wrapper`}>
            <span className={`search_input__label__inner_text`}>Waar bent u naar op zoek?</span>
          </span>
        </label>
      </div>
    </form>
  )

  const renderQueryResults = (queryResults: SearchResult[]) => (
    <div>
      <h3>Gevonden resultaten: {queryResults.length}</h3>
      <table>
        <thead>
          <tr>
            <th>Titel</th>
          </tr>
        </thead>
        <tbody>
          {queryResults.map((item) => {
            return renderQueryResultItem(item)
          })}
        </tbody>
        {renderQueryResultsCaption()}
      </table>
    </div>
  )

  const renderQueryResultsCaption = () => (
    <caption>
      <i className={`article__footer_related__icon article__footer_related__icon--node--article fa`} /> Nieuwsbericht
      <br />
      <i className={`article__footer_related__icon article__footer_related__icon--node--team fa`} /> Ploeg
      <br />
      <i className={`article__footer_related__icon article__footer_related__icon--node--player fa`} /> Speler
      <br />
      <i className={`article__footer_related__icon article__footer_related__icon--node--staff fa`} /> Staflid
      <br />
      <i className={`article__footer_related__icon article__footer_related__icon--node--event fa`} /> Evenement
      <br />
    </caption>
  )

  const renderQueryResultItem = (item: SearchResult) => (
    <tr key={`row_${item.attributes.drupal_internal__nid}`}>
      <td>
        <Link to={item.attributes.path.alias}>
          <i className={`article__footer_related__icon article__footer_related__icon--${item.type} fa`} />
          {item.attributes.title}
        </Link>
      </td>
    </tr>
  )

  if (loading) {
    return <p>Zoekfunctie is aan het laden...</p>
  }
  if (error) {
    return (
      <>
        <h2>Aiiii...</h2>
        <h3>
          Er ging iets mis - gelieve <a href="mailto:website@kcvvelewijt.be">contact op te nemen</a> indien het probleem
          zich blijft voordoen.
        </h3>
      </>
    )
  }

  return (
    <div className="search__wrapper">
      {renderForm(searchQuery)}
      {queryResults.length > 0 && renderQueryResults(queryResults)}
    </div>
  )
}

export default SearchContainer
