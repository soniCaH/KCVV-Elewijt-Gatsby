import React, { FunctionComponent, useState, MouseEvent, FormEvent, ChangeEvent } from "react"

import axios from "axios"

import "./Search.scss"

const Search: FunctionComponent = () => {
  return (
    <form action="https://www.google.be/search" method="get" className="search">
      <input type="hidden" name="q" id="q" value="site:https://www.kcvvelewijt.be" />
      <label htmlFor="search-str">Search</label>
      <input type="text" name="q" id="search-str" onChange={searchData} />
      <button type="submit" className="submit submit--search">
        Search with Google
      </button>
      <p id="result"></p>
    </form>
  )

  async function searchData(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target)
    console.log(
      `https://deploy-preview-384--kcvvelewijt.netlify.app/.netlify/functions/searchIndex?search=${e.target.value}&limit=25`
    )
    const result = await fetch(
      `https://deploy-preview-384--kcvvelewijt.netlify.app/.netlify/functions/searchIndex?search=${e.target.value}&limit=25`
    ).then((x) => x.json())
    console.log(result)
  }
}

export default Search
