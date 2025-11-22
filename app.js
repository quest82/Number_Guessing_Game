const startBtn = document.querySelector(".startBtn");
const reloadBtn = document.querySelector(".reloadBtn");
const retryBtn = document.querySelector(".retryBtn");
const game = document.querySelector(".main__game");
const gameForm = document.querySelector(".main__game__form");
const gameStatus = document.querySelector(".main__game__status");
const gameRounds = document.querySelector(".rounds span");
const gameTries = document.querySelector(".tries span");
const gameScore = document.querySelector(".score span");
const guesses = document.querySelectorAll(".main__game__choice__guess");
const finalPage = document.querySelector(".main__final");
const finalResult = document.querySelector('.finals__result span')

// GAME VARIABLES
let chosenNumber = getNumber();
let score = parseInt(gameScore.textContent);
let tries = parseInt(gameTries.textContent);
let rounds = parseInt(gameRounds.textContent);
let guessIndex = 0;

// EVENT LISTENERS
startBtn.addEventListener("click", startGame); // This event takes user to the game page

gameForm.addEventListener("submit", (e) => {
	// Events that occur after submission
	e.preventDefault();

	// Captures value of input field
	let formValue = parseInt(gameForm.guess.value);

	// Empties the input field after submission
	gameForm.guess.value = " ";
	console.log(chosenNumber);

	// Checks to ensure input value is between 1 and 30
	if (formValue > 30 || formValue < 1) {
		gameStatus.textContent = `Enter a number between 1 and 30`;
		gameStatus.style.color = "red";
	}

	// Tells user if their guess is too low. It projects their guess and also removes one from the tries counter
	if (formValue < chosenNumber && formValue >= 1) {
		guesses[guessIndex].textContent = formValue;
		guessIndex += 1;
		gameStatus.textContent = `Your guess is too low. Guess again`;
		gameStatus.style.color = "red";
		gameTries.textContent = `${(tries -= 1)}`;
	}

	// Tells user if their guess is too high. It projects their guess and also removes one from the tries counter
	if (formValue > chosenNumber && formValue < 30) {
		guesses[guessIndex].textContent = formValue;
		guessIndex += 1;
		gameStatus.textContent = `Your guess is too high. Guess again`;
		gameStatus.style.color = "rgb(36, 90, 131)";
		gameTries.textContent = `${(tries -= 1)}`;
	}

	// Tells user they are correct and adds 20 points to their score and 1 to their round
	if (formValue === chosenNumber) {
		gameStatus.textContent = `Correct! 20 points for you. But can you do that again?`;
		gameStatus.style.color = "green";
		gameScore.textContent = `${(score += 20)}`;
		gameRounds.textContent = `${(rounds += 1)}`;
		reinitNumber();
	}

	// 
	if (tries === 0 && score > 0) {
		finalPage.style.display = "block";
		finalPage.firstElementChild.classList.add("show");
		finalResult.textContent = score
	}

	if (tries === 0 && score === 0 ) {
		gameStatus.textContent = `You're out of tries. The number you were looking for is: ${chosenNumber}. Wanna try again? Click the retry button`;
		gameStatus.style.color = "black";
		retryBtn.style.display = "block";
	}
});

reloadBtn.addEventListener("click", reloadGame); // This event reloads the game
retryBtn.addEventListener("click", reloadGame);

// FUNCTIONS

function getNumber() {
	return Math.floor(Math.random() * 30) + 1;
}

function reinitNumber() {
	let newNumber = getNumber();
	chosenNumber = newNumber
}

function startGame() {
	startBtn.parentElement.style.display = "none";
	game.style.display = "block";
	scrollTo(0, 0);
} // This function replaces the rules page with the games page

function reloadGame() {
	location.reload();
}
