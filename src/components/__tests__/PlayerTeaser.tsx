/**
 * @jest-environment jsdom
 */

import React from "react"
import renderer from "react-test-renderer"

import PlayerTeaser from "../../components/PlayerTeaser"

// jest.mock(`../images/kcvv-player-bg.png`, () => `kcvv-player-bg.png`)

describe(`PlayerTeaser`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
        <PlayerTeaser first_name="Kevin" last_name="Van Ransbeeck" url="/player/kevin-van-ransbeeck" position="1" />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe(`PlayerTeaserWithPicture`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
        <PlayerTeaser first_name="Kevin" last_name="Van Ransbeeck" url="/player/kevin-van-ransbeeck" position="1" />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe(`StaffTeaser`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
        <PlayerTeaser first_name="Kevin" last_name="Van Ransbeeck" url="/staff/kevin-van-ransbeeck" position="TK" />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe(`StaffTeaserWithPicture`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
        <PlayerTeaser first_name="Kevin" last_name="Van Ransbeeck" url="/staff/kevin-van-ransbeeck" position="TK" />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
