function bussView(confirmValue = false, element = null){
    if(cards.fullDeck.length == 0){
        printDeck();
    }
    let html = "";
    

    // User input how manny cards they want
    if(!confirmValue) {
        html += /*html*/ `
            <div id="2" class="bussCardSettings">
                <input class="bussBoardAmount" type="number" placeholder="Your amount of cards" onchange="bussView(true, this)">
            </div>
        `;
    }
    if(confirmValue) {
        html += /*html*/ `<div class="bussUserNames">`;
        for(let i = 0; i < model.input.usernames.length; i++) {
            shuffle();
            html += /*html*/ `
                <div class="bussUser">
                    <div class="bussName">
                        ${model.input.usernames[i]}
                    </div>
                    <div class="bussUserCard">
                        ${playerCards(i)}
                    </div>
                </div>
            `;
        }
        html += /*html*/ `</div>`;
    }

    if(confirmValue) {
        html += cardAmountConfirm(element.value)
    }
    document.getElementById('app').innerHTML = html;
    if(!confirmValue) {
    document.getElementsByClassName('bussBoardAmount')[0].focus();
    }
}