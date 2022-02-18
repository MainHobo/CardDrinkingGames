function fuckTheDealerView(){
  if(cards.fullDeck.length == 0){
    printDeck();
    shuffle();
  }
  let html = "";

  html += /*html*/ `<div class="fuck cardDeck">`;
  
  html += /*html*/ `
    <div id="card" class="fuck card cardCovered" onclick="revealCard()">
      <div >
        ${cards.fullDeck[randomCardSelector()]}
      </div>
    </div>
  `;

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