function cardAmountConfirm(input) {
    buss.input.mode = input;
    return showCards(input)
}

function showCards() {
    let html = "";
    
    html += /*html*/ `<div class="bussCardContainerWrapper">`;
    html += /*html*/ `<div class="bussCardContainer">`;
    html += /*html*/ `<div class="cardDeck">`;

    
    for(let i = 0; i < buss.input.mode; i++) { 
        let rng = randomCardSelector();
        let card = cards.fullDeck[rng];
        let isRed = (card.search("&hearts;") != -1 || card.search("&diams;") != -1)

        html += /*html*/ `
            <div class="buss card cardCovered c${i+1}" onclick="revealCard(this)">
                <div class="${(isRed) ? 'redCard' : ''}">
                    ${cards.fullDeck[rng]}
                </div>
            </div>
        `;

        console.log(rng)
        cards.fullDeck.splice(rng, 1); 
    }

    html += `</div></div></div>`;

  return html;
}

function playerCards(index) {
    let html = "";

    
    for(let i = 0; i < 5; i++) { 
        let rng = randomCardSelector();
        let card = cards.fullDeck[rng];
        let isRed = (card.search("&hearts;") != -1 || card.search("&diams;") != -1)

            html += /*html*/ `
                <div class="bussPlayerCard" onclick="markCard(this)">
                    <div class="deck${index}${i} ${(isRed) ? 'redCard' : ''}">
                        ${cards.fullDeck[rng]}
                    </div>
                </div>
            `;

        console.log(rng)
        cards.fullDeck.splice(rng, 1); 
    }

  return html;
}

function markCard(element) {
    element.classList.toggle("markedCard");
    console.log(element);
    
}