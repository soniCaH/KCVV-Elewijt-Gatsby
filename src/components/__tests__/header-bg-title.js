import React from "react"
import renderer from "react-test-renderer"
import HeaderBgTitle from "../header-bg-title"

describe("SimpleTitle", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<HeaderBgTitle title="KCVV Elewijt" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("HighlightTitle", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<HeaderBgTitle title="KCVV Elewijt" highlight="Er is maar één plezante compagnie" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe("ClassnameTitle", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<HeaderBgTitle title="KCVV Elewijt" classes="title--large" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
