let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You Win!");
        message.innerText = "You won!"
    }
    else { 
        console.log("You Lose!"); 
        message.innerText = "Loser!"
    }

}

const fight = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        //Draw Game;
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice == "paper" ? false : true;
        }
        else if (userChoice == "paper") {
            userWin = compChoice == "scissors" ? false : true;
        }
        else {
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}

const playGame = (userChoice) => {
    console.log("User Choice: ", userChoice)
    const compChoice = genComputerChoice();
    console.log("Computer Choice: ", compChoice)
    fight(userChoice, compChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})