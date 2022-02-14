//Bussturen
const buss = {

  app: {
    page: "Bussturen",
    userID: "",
  },

  input: {
    username: "",
    image: "",
    modes: [],
  },

  data: {
    defaultUsernames: [],
    usernames: [],
    hands: [[]], //hands[1][2]
    cardsGiven: [], //the cards you got given by other players
    playersGiven: [], //the player that gave you the card
    shuffledCards: [], //the card deck already shuffled
  },

}