function signIn() {
  let html = "";

  html += /*html*/ `
    <div class="home buttons">
      <button class="button fuckTheDealer" onclick="go('Fuck The Dealer')">Fuck the dealer</button>
    </div>
  `;

  document.getElementById('app').innerHTML = html;
}