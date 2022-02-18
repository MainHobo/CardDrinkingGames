function fuckTheDealerView(){
  if(cards.fullDeck.length === 0){
    printDeck();
    shuffle();
  }
  let rng = randomCardSelector();
  let html = "";

  html += /*html*/ `<div class="fuck cardDeck">`;
  html += `<button onclick="nextCard()">Next Card</button>`;
  html += /*html*/ `
    <div id="card" class="fuck card cardCovered" onclick="revealCard()">
      <div>`  
  console.log(cards.fullDeck[rng]);
  html += cards.fullDeck[rng];
  cards.fullDeck.splice(rng, 1);
  html += `</div></div>`;

  // for(let i = 0; i < cards.fullDeck.length; i++){
  //   html += /*html*/ `
  //     <div class="cards ${cards.fullDeck[i]}">
  //       ${cards.fullDeck[i]}
  //     </div>
  //   `;
  // }
  html += `</div>`;
  
  document.getElementById('app').innerHTML = html;
}