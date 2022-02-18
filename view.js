view()
function view() {
  let app = model.app;
  document.getElementById('title').innerHTML = app.page;

  if(app.page == "Bussturen") {
    bussView();
  }
  else if(app.page == "Fuck The Dealer") {
    fuckTheDealerView();
  }
  else if(app.page == "Deck of Cards"){
    cardDeck();
  }
  else{
    signIn();
  }
}