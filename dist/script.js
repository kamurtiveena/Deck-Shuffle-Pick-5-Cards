var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();
var final = new Array();

function getDeck() {
  var deck = new Array();

  for (var i = 0; i < suits.length; i++) {
    for (var x = 0; x < cards.length; x++) {
      var card = { Value: cards[x], Suit: suits[i] };
      deck.push(card);
    }
  }
  document.getElementById("count").innerHTML = "" + final.length;
  return deck;
}

function shuffle() {
  // for 1000 turns
  // switch the values of two random cards
  for (var i = 0; i < 1000; i++) {
    var location1 = Math.floor(Math.random() * deck.length);
    var location2 = Math.floor(Math.random() * deck.length);
    var tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
  renderDeck(deck, "deck", "inputCnt");
}

function renderDeck(deck, deckEle, cntEle) {
  document.getElementById(deckEle).innerHTML = "";

  for (var i = 0; i < deck.length; i++) {
    var card = document.createElement("div");
    var icon = "";
    if (deck[i].Suit == "hearts") icon = "&hearts;";
    else if (deck[i].Suit == "spades") icon = "&spades;";
    else if (deck[i].Suit == "diamonds") icon = "&diams;";
    else icon = "&clubs;";

    card.innerHTML = deck[i].Value + "" + icon;
    card.classList.add("card");
    card.classList.add(deck[i].Suit);
    document.getElementById(deckEle).appendChild(card);
  }
  document.getElementById(cntEle).innerHTML = "" + deck.length;
}

function pickCard() {
  cardCnt = 5; // take 5 cards from deck delete & insert in final
  if (deck.length > cardCnt) {
    for (let i = 0; i < cardCnt; i++) final.push(deck[i]);
    deck.splice(0, cardCnt);
  } else {
    for (let i = 0; i < deck.length; i++) final.push(deck[i]);
    deck = new Array();
  }
  renderDeck(deck, "deck", "inputCnt");
  renderDeck(final, "final", "count");
}

function load() {
  deck = getDeck();
  shuffle();
  renderDeck(deck, "deck", "inputCnt");
}

function restore() {
  load();
  var final = new Array();
  renderDeck(final, "final", "count");
}

window.addEventListener("load", load);