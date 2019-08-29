import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'gatsby'

import * as JsSearch from 'js-search'

import './search-container.scss'

class Search extends Component {
  state = {
    articleList: [],
    teamList: [],
    playerList: [],
    staffList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: ``,
  }
  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    Axios.get(`http://api.kcvvelewijt.be/jsonapi/node/article?sort=-created`)
      .then(result => {
        const articleData = result.data.data
        this.setState({ articleList: articleData })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log(`====================================`)
        console.log(
          `Something bad happened while fetching the articles\n${err}`
        )
        console.log(`====================================`)
      })

    Axios.get(`http://api.kcvvelewijt.be/jsonapi/node/team?sort=title`)
      .then(result => {
        const teamData = result.data.data
        this.setState({ teamList: teamData })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log(`====================================`)
        console.log(
          `Something bad happened while fetching the team data\n${err}`
        )
        console.log(`====================================`)
      })

    Axios.get(`http://api.kcvvelewijt.be/jsonapi/node/player?sort=title`)
      .then(result => {
        const playerData = result.data.data
        this.setState({ playerList: playerData })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log(`====================================`)
        console.log(
          `Something bad happened while fetching the player data\n${err}`
        )
        console.log(`====================================`)
      })

    Axios.get(`http://api.kcvvelewijt.be/jsonapi/node/staff?sort=title`)
      .then(result => {
        const staffData = result.data.data
        this.setState({ staffList: staffData })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log(`====================================`)
        console.log(
          `Something bad happened while fetching the staff data\n${err}`
        )
        console.log(`====================================`)
      })
  }
  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { articleList, teamList, playerList, staffList } = this.state
    const dataToSearch = new JsSearch.Search(`id`)
    /**
     *  defines a indexing strategy for the data
     * more more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()

    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(`id`)
    dataToSearch.addIndex([`attributes`, `body`, `processed`])
    dataToSearch.addIndex([`attributes`, `title`])
    dataToSearch.addDocuments(articleList)
    dataToSearch.addDocuments(teamList)
    dataToSearch.addDocuments(playerList)
    dataToSearch.addDocuments(staffList)
    this.setState({ search: dataToSearch, isLoading: false })
  }
  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)

    console.log({ e, search, queryResult })
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { isError, isLoading, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === `` ? [] : searchResults

    if (isLoading) {
      return <p>Zoekfunctie is aan het laden...</p>
    }
    if (isError) {
      return (
        <>
          <h2>Aiiii...</h2>
          <h3>
            Er ging iets mis - gelieve{' '}
            <a href="mailto:website@kcvvelewijt.be">contact op te nemen</a>{' '}
            indien het probleem zich blijft voordoen.
          </h3>
        </>
      )
    }
    return (
      <div className={'search--placeholder'}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label className={'search_input__label'} htmlFor="search">
              <input
                id="search"
                onChange={this.searchData}
                className={'search_input__input'}
                placeholder="Spelersnaam, ploegnaam, deel van een artikel..."
                value={searchQuery}
                required
              />
              <span className={'search_input__label__inner_wrapper'}>
                <span className={'search_input__label__inner_text'}>
                  Waar bent u naar op zoek?
                </span>
              </span>
            </label>
          </div>
        </form>
        {queryResults.length > 0 && (
          <div>
            <h3>Gevonden resultaten: {queryResults.length}</h3>
            <table>
              <thead>
                <tr>
                  <th>Titel</th>
                </tr>
              </thead>
              <tbody>
                {/* eslint-disable */}
                {queryResults.map(item => {
                  return (
                    <tr key={`row_${item.attributes.drupal_internal__nid}`}>
                      <td>
                        <Link to={item.attributes.path.alias}>
                          <i
                            className={`article__footer_related__icon article__footer_related__icon--${item.type} fa`}
                          />
                          {item.attributes.title}
                        </Link>
                      </td>
                    </tr>
                  )
                })}
                {/* eslint-enable */}
              </tbody>
              <caption>
                <i
                  className={`article__footer_related__icon article__footer_related__icon--node--article fa`}
                />{' '}
                Nieuwsbericht
                <br />
                <i
                  className={`article__footer_related__icon article__footer_related__icon--node--team fa`}
                />{' '}
                Ploeg
                <br />
                <i
                  className={`article__footer_related__icon article__footer_related__icon--node--player fa`}
                />{' '}
                Speler
                <br />
                <i
                  className={`article__footer_related__icon article__footer_related__icon--node--staff fa`}
                />{' '}
                Staflid
                <br />
              </caption>
            </table>
          </div>
        )}
      </div>
    )
  }
}
export default Search
