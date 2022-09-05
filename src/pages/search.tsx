import React from "react"
import SearchContainer from "../components/SearchContainer"
import { Seo } from "../components/Seo"
import Layout from "../layouts"

const SearchPage = () => {
  return (
    <Layout>
      <header className="page_header__wrapper">
        <div className="page_header">
          <h1>Zoeken</h1>
        </div>
      </header>
      <div className="search__wrapper page__wrapper page__wrapper--limited page__section">
        <SearchContainer />
      </div>
    </Layout>
  )
}

export const Head = () => {
  return (
    <Seo
      title={`Zoeken binnen KCVV Elewijt`}
      path={`/search`}
      description="Zoekpagina binnen de inhoud van KCVV Elewijt"
    />
  )
}

export default SearchPage
