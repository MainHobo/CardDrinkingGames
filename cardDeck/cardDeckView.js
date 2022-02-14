function cardDeck(){
  printDeck()
  let html = "";
  
  for(let i = 0; i < cards.fullDeck.length; i++){
    html += /*html*/ `
    <div class="${cards.fullDeck[i]}">
      ${cards.fullDeck[i]}
    </div>
    `;
  }
  document.getElementById("app").innerHTML = html;
}