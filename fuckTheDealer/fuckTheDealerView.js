function fuckTheDealerView(){
    if(cards.fullDeck.length === 0){
        printDeck();
    }

    let rng = randomCardSelector();
    let html = "";

        html += `
            <input 
        `;

        html += /*html*/ `<button onclick="nextCard()">Next Card</button>`;

        html += /*html*/ `<div class="cardDeck">`;
        html += /*html*/ `
            <div class="fuck card cardCovered" onclick="revealCard(this)">
            <div>
                ${cards.fullDeck[rng]}
            </div>
            </div>
        `;
        cards.fullDeck.splice(rng, 1);

        html += `</div>`;

    document.getElementById('app').innerHTML = html;
}