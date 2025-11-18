const startBtn = document.querySelector(".startBtn");
const game = document.querySelector(".main__game");
const gameForm = document.querySelector(".main__game__form");
const gameStatus = document.querySelector(".main__game__status");
const gameRounds = document.querySelector(".rounds span");
const gameTries = document.querySelector(".tries span");
const gameScore = document.querySelector(".score span");

// GAME VARIABLES
let chosenNumber = getNumber();
let score = parseInt(gameScore.textContent);
let tries = parseInt(gameTries.textContent);
let rounds = parseInt(gameRounds.textContent);

// EVENT LISTENERS
startBtn.addEventListener("click", startGame); // This event takes user to the game page

gameForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let formValue = parseInt(gameForm.guess.value);
    gameForm.guess.value = ' '
	console.log(chosenNumber);

	if (formValue === chosenNumber) {
		gameStatus.textContent = `Correct! 20 points for you. But can you do that again`;
		gameStatus.style.color = "green";
		gameScore.textContent = `${(score += 20)}`;
        gameRounds.textContent = `${rounds+=1}`

        if (rounds === 5) {
            
        }
	}
});

            // location.reload()


// FUNCTIONS

function getNumber() {
	return Math.floor(Math.random() * 30) + 1;
}

function reinitNumber() {
	return getNumber();
}

function startGame() {
	startBtn.parentElement.style.display = "none";
	game.style.display = "block";
	scrollTo(0, 0);
} // This function replaces the rules page with the games page
