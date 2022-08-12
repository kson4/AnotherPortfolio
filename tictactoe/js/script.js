let grid = document.getElementsByClassName("grid");
let cell = document.getElementsByClassName("cell");

let playerTurn = new Boolean(true);

for (let index = 0; index < cell.length; index++) {
    cell[index].addEventListener("click", function() {
        if (playerTurn && cell[index].className == "cell unclicked") {
            cell[index].style.backgroundColor = "red";
            cell[index].className = "cell clicked red";
            playerTurn = false;
            if (gameFinished()) {
                refreshGrid();
            }
            else {
                //minmax();
                computerMove();
                if (gameFinished()) {
                    refreshGrid();
                }
            }
            
        }
        else {
            console.log("already clicked");
        }
    });
};

function refreshGrid() {
    let cells = document.getElementsByClassName("cell");
    for (let index = 0; index < cells.length; index++) {
        cells[index].style.backgroundColor = null;
        cells[index].setAttribute("class", "cell unclicked");
    }
    playerTurn = true;
}

function computerMove() {
    let availableCells = document.getElementsByClassName("cell unclicked");
    let rng = availableCells[Math.floor(Math.random() * 10000) % availableCells.length];
    rng.style.backgroundColor = "blue";
    rng.className = "cell clicked blue";
    playerTurn = true;
}

function gameFinished() {
    let cont = new Boolean(true);
    // this checks rows
    for (let indexRow = 0; indexRow < 3; indexRow++) {
        let row = document.getElementsByClassName("row")[indexRow];
        let color = "";
        if (row.children[0].classList.contains("red")) {
            color = "red";
        }
        else if (row.children[0].classList.contains("blue")) {
            color = "blue";
        }
        if (color == "red" || color == "blue") {
            for (let indexCol = 0; indexCol < 3 && cont; indexCol++) {
                if (!row.children[indexCol].classList.contains(color)) {
                    cont = false;
                }
            }
            if (cont == true) {
                alert(color + " has won!");
                return true;
            }
        }
        cont = true;
    }

    cont = true;
    // this checks cols
    for (let i = 0; i < 3; i++) {
        let row = document.getElementsByClassName("row")[0];
        let color = "";
        if (row.children[i].classList.contains("red")) {
            color = "red";
        }
        else if (row.children[i].classList.contains("blue")) {
            color = "blue";
        }
        for (let j = 0; j < 3 && cont; j++) {
            let cols = document.getElementsByClassName("row")[j];
            if (!cols.children[i].classList.contains(color)) {
                cont = false;
            }
        }
        if (cont == true) {
            alert(color + " has won!");
            return true;
        }
        cont = true;
    }

    // simple diag check
    cont = true;
    let one = document.getElementById("1");
    if (one.classList.contains("red")) {
        if (document.getElementById("5").classList.contains("red") &&
            document.getElementById("9").classList.contains("red")) {
                alert("red has won!");
                return true;
            }
    }
    else if (one.classList.contains("blue")) {
        if (document.getElementById("5").classList.contains("blue") &&
            document.getElementById("9").classList.contains("blue")) {
                alert("blue has won!");
                return true;
            }
    }

    let three = document.getElementById("3");
    if (three.classList.contains("red")) {
        if (document.getElementById("5").classList.contains("red") &&
            document.getElementById("7").classList.contains("red")) {
                alert("red has won!");
                return true;
            }
    }
    else if (three.classList.contains("blue")) {
        if (document.getElementById("5").classList.contains("blue") &&
            document.getElementById("7").classList.contains("blue")) {
                alert("blue has won!");
                return true;
            }
    }
    return false;
}

// function minmax(color) {
//     let cells = document.getElementsByClassName("unclicked");
//     cells[0].style.backgroundColor = "blue";
//     cells[0].className = "cell clicked blue";


//     playerTurn = true;
// }