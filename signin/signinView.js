function signIn(confirmValue = false, element = null) {
  let html = "";

  html += /*html*/ `
    <div class="userNameInputContainer">
        <input class="userNameInput" placeholder="name" onchange="userNameInput(value), signIn(true, this) ;">
        <div class="userNameText">
            ${userNameWrite()}
        </div>
    </div>
    <div class="home buttons">
      <!--<button class="fuckTheDealerButton" onclick="go('Fuck The Dealer')">Fuck the dealer</button>-->
      <button class="bussturenButton" onclick="go('Bussturen')">Bussturen</button>
    </div>
  `;

  document.getElementById('app').innerHTML = html;
  document.getElementsByClassName('userNameInput')[0].focus();
}