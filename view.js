view()
function view() {
  let app = model.app;
  document.getElementById('title').innerHTML = app.page;

  if(app.page == "Bussturen") {
    bussView()
  }
  else if(app.page == "Fuck The Dealer") {
    fuckTheDealerView()
  }
  else{
    signIn()
  }
}