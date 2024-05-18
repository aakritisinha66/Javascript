const boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
const winner = document.querySelector("#winner")
winner.style.visibility = "hidden"
// document.getElementById("winner").style.visibility = "hidden";

let turnO = true; //playerX or playerO

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked!", turnO?"O":"X");
        box.innerText = turnO ? "O" : "X";
        turnO = turnO ? false : true;
        box.setAttribute("disabled", true)
        const winner = checkWinner();
        if (winner) {
            disableAll();
        }
    })
})

const checkWinner = () => {
    for (let pattern of win) {
        console.log(pattern[0], pattern[1], pattern[2]);

        const position1 = boxes[pattern[0]].innerText;
        const position2 = boxes[pattern[1]].innerText;
        const position3 = boxes[pattern[2]].innerText;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                boxes[pattern[0]].classList.add("class", "win")
                boxes[pattern[1]].classList.add("class", "win")
                boxes[pattern[2]].classList.add("class", "win")
                showWinner(position1);
                return true;
            }
        }

    }
}

const showWinner = (player) => {
    console.log("Winner", player);
    winner.style.visibility = "visible"
    winner.innerText = `${player} is the winner!`;
    return;
}

const disableAll = () => {
    for(let box of boxes){
        box.disabled = true;
    }
    // for (let pattern of win) {
    //     console.log("Disable all button is activated");

    //     console.log(pattern[0], pattern[1], pattern[2]);

    //     const position1 = boxes[pattern[0]].innerText;
    //     const position2 = boxes[pattern[1]].innerText;
    //     const position3 = boxes[pattern[2]].innerText;

    //     if (position1 === "") {
    //         console.log(position1, "pos1")
    //         boxes[pattern[0]].setAttribute("disabled", true)
    //     }
    //     if (position2 === "") {
    //         console.log(position2, "pos2")
    //         boxes[pattern[1]].setAttribute("disabled", true)
    //     }
    //     if (position3 === "") {
    //         console.log(position3, "pos3")
    //         boxes[pattern[2]].setAttribute("disabled", true)
    //     }
    // }
}

//After reset green and disable is not working
const reset = () => {
    turnO = true;
    winner.style.visibility = "hidden"
    for(let box of boxes){
        box.innerText = ""
        box.disabled = false;
        box.classList.add("class", "afterReset")
    }
}
