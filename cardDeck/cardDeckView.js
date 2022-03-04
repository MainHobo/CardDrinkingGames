function cardDeck(){
  if(cards.fullDeck.length == 0){
    printDeck();
  }
  let html = "";

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