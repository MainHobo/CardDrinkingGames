function cardDeck(){
  if(cards.fullDeck.length == 0){
    printDeck();
  }
  let html = "";
  let card = cards.fullDeck[rng];
  let isRed = (card.search("&hearts;") != -1 || card.search("&diams;") != -1)

  html += `<div class="cardDeck">`;
  
  for(let i = 0; i < cards.fullDeck.length; i++){
    html += /*html*/ `
      <div class="cards ${cards.fullDeck[i]} ${(isRed) ? 'redCard' : ''}">
        ${cards.fullDeck[i]}
      </div>
    `;
  }
  html += `</div>`;
  document.getElementById("app").innerHTML = html;
}