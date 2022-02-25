function signIn() {
  let html = "";

  html += /*html*/ `
    <div class="home buttons">
      <button class="button fuckTheDealer" onclick="go('Fuck The Dealer')">Fuck the dealer</button>
      <button class="button fuckTheDealer" onclick="go('Bussturen')">Bussturen</button>
    </div>
  `;

  document.getElementById('app').innerHTML = html;
}