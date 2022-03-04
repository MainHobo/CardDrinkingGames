function printDeck() {
  for(let i = 0; i < cards.suit.length; i++) {
    let suitPrint = cards.suit[i];
  
    for(let i = 0; i < cards.value.length; i++) {
      let cardPrint = cards.value[i];
      cards.fullDeck.push(cardPrint + suitPrint);
    }
  }
}

function shuffle() {
  cards.fullDeck.sort(function(){return Math.random() - 0.5})
}

function randomCardSelector() {
  return Math.floor(Math.random() * cards.fullDeck.length);
}

function revealCard(element) {

    element.classList.toggle('cardUncovered');
    element.classList.toggle('cardCovered');
}