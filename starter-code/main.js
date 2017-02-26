console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "king"
var cardFour = "king"

if(cardOne === cardTwo)
{alert("You found a match!")}
else
{alert("Sorry, try again.")}	

var createCards = function(i){
for (var i=0; i < 5; i++) {
	var board = document.getElementById('game-board');
	var newCardElement = document.createElement('div');
	newCardElement.className = ('card');
	board.appendChild(newCardElement);
}
}
createCards();