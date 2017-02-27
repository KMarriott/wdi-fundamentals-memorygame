
var cards = ['Queen', 'Queen', 'King', 'King'];
var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard() {
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);
	}
};

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.jpg' alt='King of Spades'/>"; // King image
	} else {
		this.innerHTML = "<img src='queen.jpg' alt='Queen of Hearts'/>"; //Queen image
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};
function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Please try again!");
	}
			for (var i=0; i<cards.length; i++) {
			if (document.getElementsByClassName('card')[i]) {
				document.getElementsByClassName('card')[i].innerHTML = "";
			}
		}
};


createBoard();