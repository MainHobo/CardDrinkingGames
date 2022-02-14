function printDeck(){
  for(let i = 0; i < cards.suit.length; i++){
    let suitPrint = cards.suit[i]
  
    for(let i = 0; i < cards.value.length; i++){
      let cardPrint = cards.value[i]
      cards.fullDeck.push(cardPrint + suitPrint)
    }
  }
}
cardDeck()