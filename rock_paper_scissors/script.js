var computer = {
	name: 'computer',
	score: 0,
	pick: ''
};
var player = {
	name: '',
	score: 0,
	pick: ''
};
var round = 0;
function newGame() {
	computer.score = 0;
	player.score = 0;
	computer.pick = "";
	player.pick = "";
	round = 0;
	player.name = prompt("Podaj swoje imię", "John Cena");
	document.getElementById("playerName").innerHTML = player.name;
	var buttons = document.getElementsByClassName("pick-button");
	for (i = 0; i < buttons.length; i++) {
		buttons[i].style.display = "block";
	};
}
function playerPick(pick) {
	player.pick = pick;
	computerPick();
	checkResult();
}
function computerPick() {
	switch (Math.floor(Math.random()*3)) {
		case 0:
		computer.pick = "rock";
		break;
		case 1:
		computer.pick = "paper";
		break;
		case 2:
		computer.pick = "scissors";
		break;
	}
}
function checkResult() {
	var gameResult;
	if (computer.pick === player.pick) {
		gameResult = "Tie!"
	} else if (player.pick === "rock") {
		if (computer.pick === "scissors") {
			player.score++;
			gameResult = "Player wins!";
		} else if (computer.pick === "paper") {
			computer.score++;
			gameResult = "Computer wins!"
		}
	} else if (player.pick === "paper") {
		if (computer.pick === "rock") {
			player.score++;
			gameResult = "Player wins!";
		} else if (computer.pick === "scissors") {
			computer.score++;
			gameResult = "Computer wins!";
		}
	} else if (player.pick === "scissors") {
		if (computer.pick === "rock") {
			computer.score++;
			gameResult = "Computer wins!";
		} else if (computer.pick === "paper") {
			player.score++;
			gameResult = "Player wins!";
		}
	}
	if (player.score >= 10 || computer.score >= 10) {
		if (player.score > computer.score) {
			document.getElementById("roundResult").innerHTML = "Player wins the game!";
		} else {
			document.getElementById("roundResult").innerHTML = "Computer wins the game!";
		}
		var buttons = document.getElementsByClassName("pick-button");
		for (i = 0; i < buttons.length; i++) {
			buttons[i].style.display = "none";
		}
	}
	document.getElementById("computerPick").innerHTML = computer.pick;
	document.getElementById("playerPick").innerHTML = player.pick;
	document.getElementById("playerScore").innerHTML = player.score;
	document.getElementById("computerScore").innerHTML = computer.score;
	document.getElementById("gameResult").innerHTML = gameResult;
}
