function bussView(confirmValue = false){
    if(cards.fullDeck.length == 0){
        printDeck();
    }
    let html = "";
    

    // User input how manny cards they want
    if(!confirmValue) {
        html += /*html*/ `
            <div id="2" class="bussCardSettings">
                <div class="bussMode">
                    <h1 class="bussModeText">Game Mode</h1>
                    <select class="bussBoardAmount" type="number">
                        <option value="3">Pussy</option>
                        <option value="6">Easy</option>
                        <option value="10">Sure</option>
                        <option value="15">Normal</option>
                        <option value="21">Hard</option>
                        <option value="28">Sheeeesh</option>
                    </select>
                </div>
                    <button class="bussBoardAmount" onclick="bussView(true)">Start</button>
                </div>
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
        html += cardAmountConfirm()
    }
    document.getElementById('app').innerHTML = html;
    if(!confirmValue) {
    document.getElementsByClassName('bussBoardAmount')[0].focus();
    }
}