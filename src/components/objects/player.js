export class PlayerMinimal {
  constructor({
    nameFirst,
    nameLast,
    shirtNr,
    position,
    gamesPlayed,
    cleanSheets,
    goalsScored,
    cardsYellow,
    cardsRed,
    imageSrc,
    link,
  }) {
    this.nameFirst = nameFirst
    this.nameLast = nameLast
    this.shirtNr = shirtNr
    this.position = position
    this.gamesPlayed = gamesPlayed
    this.cleanSheets = cleanSheets
    this.goalsScored = goalsScored
    this.cardsYellow = cardsYellow
    this.cardsRed = cardsRed
    this.imageSrc = imageSrc
    this.link = link
  }
}

export class Player extends PlayerMinimal {
  constructor({
    nameFirst,
    nameLast,
    shirtNr,
    position,
    dateJoin,
    dateLeave,
    dateBirth,
    bodyText,
    gamesPlayed,
    cleanSheets,
    goalsScored,
    cardsYellow,
    cardsRed,
    imageSrc,
    link,
    teamName,
    teamLink,
  }) {
    super({
      nameFirst,
      nameLast,
      shirtNr,
      position,
      gamesPlayed,
      cleanSheets,
      goalsScored,
      cardsYellow,
      cardsRed,
      imageSrc,
      link,
    })

    this.bodyText = bodyText
    this.dateJoin = dateJoin
    this.dateLeave = dateLeave
    this.dateBirth = dateBirth
    this.teamName = teamName
    this.teamLink = teamLink
  }
}
