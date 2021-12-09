/**
 * @jest-environment jsdom
 */
import React from "react"
import renderer from "react-test-renderer"

import { PlayerMinimal } from "../objects/player"
import PlayerFeatured from "../player--featured"

const playerKeeper = new PlayerMinimal({
  nameFirst: `Kevin`,
  nameLast: `Van Ransbeeck`,
  shirtNr: 1,
  gamesPlayed: 34,
  position: `k`,
  cleanSheets: 25,
  goalsScored: 1,
  cardsYellow: 5,
  cardsRed: 1,
  imageSrc: `https://api.kcvvelewijt.be/sites/default/files/fallback/kcvv-player-bg.png`,
  link: `/player/kevin-van-ransbeeck`,
})

const playerAttacker = new PlayerMinimal({
  nameFirst: `Noah`,
  nameLast: `Van Ransbeeck`,
  shirtNr: 11,
  gamesPlayed: 34,
  position: `a`,
  cleanSheets: 0,
  goalsScored: 41,
  cardsYellow: 3,
  cardsRed: 0,
  imageSrc: `https://api.kcvvelewijt.be/sites/default/files/fallback/kcvv-player-bg.png`,
  link: `/player/noah-van-ransbeeck`,
})

describe(`FeaturedKeeper`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<PlayerFeatured player={playerKeeper} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe(`FeaturedAttacker`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<PlayerFeatured player={playerAttacker} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
