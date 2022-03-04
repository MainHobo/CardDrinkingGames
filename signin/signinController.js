function userNameInput(value) {
    model.input.usernames.push(value);
}

function userNameWrite() {
    let html = "";
    for(let i = 0; i < model.input.usernames.length; i++) {
        html += /*html*/ `
            <div onclick="removeName(${i})">
                ${model.input.usernames[i]}
            </div>
        `;
    }

    return html;
}

function removeName(index) {
    model.input.usernames.splice(index, 1);
    signIn()
}