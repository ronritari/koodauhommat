let userNumbers = [];
let computerNumbers = [];

function cardSum(total, num) {
    return total + Math.round(num);
}

function showWinner() {
    document.getElementById("winner").style.display = "inline";
    if (userNumbers.reduce(cardSum) > 21 && computerNumbers.reduce(cardSum) > 21) {
        document.getElementById("winner").innerHTML = "The match is a draw.";
    } else if (computerNumbers.reduce(cardSum) > 21) {
        document.getElementById("winner").innerHTML = "You win!";
    } else if (userNumbers.reduce(cardSum) > 21) {
        document.getElementById("winner").innerHTML = "The opponent has won.";
    } else if (userNumbers.reduce(cardSum) == computerNumbers.reduce(cardSum)) {
        document.getElementById("winner").innerHTML = "The match is a draw.";
    } else if (userNumbers.reduce(cardSum) > computerNumbers.reduce(cardSum) && userNumbers.reduce(cardSum) <= 21) {
        document.getElementById("winner").innerHTML = "You win!";
    } else if (computerNumbers.reduce(cardSum) > userNumbers.reduce(cardSum) && computerNumbers.reduce(cardSum) <= 21) {
        document.getElementById("winner").innerHTML = "The opponent has won.";
    } 
    userNumbers = [];
    computerNumbers = [];
    document.getElementById("start").style.display = "inline";
    document.getElementById("hit").style.display = "none";
    document.getElementById("stay").style.display = "none";
}

function start() {
    userNumbers.push(Math.floor(Math.random()*13)+1);
    userNumbers.push(Math.floor(Math.random()*13)+1);
    computerNumbers.push(Math.floor(Math.random()*13)+1);
    computerNumbers.push(Math.floor(Math.random()*13)+1);

    document.getElementById("usercards").innerHTML = "Your cards: " + userNumbers[0] + " + " + userNumbers[1] + " = " + userNumbers.reduce(cardSum);
    document.getElementById("computercards").innerHTML = "Opponents cards: " + computerNumbers[0] + " + " + computerNumbers[1] + " = " + computerNumbers.reduce(cardSum);

    document.getElementById("start").style.display = "none";
    document.getElementById("hit").style.display = "inline";
    document.getElementById("stay").style.display = "inline";
    document.getElementById("winner").style.display = "none";

    if (userNumbers.reduce(cardSum) > 21 || computerNumbers.reduce(cardSum) > 21) {
        showWinner();
    }
}

function hit() {
    userNumbers.push(Math.floor(Math.random()*13)+1);
    let userCardResults = "";
    for (userCards = 0; userCards < (userNumbers.length - 1); userCards++) {
        userCardResults += userNumbers[userCards] + " + ";
    }
    document.getElementById("usercards").innerHTML = "Your cards: " + userCardResults + userNumbers[userNumbers.length - 1] + " = " + userNumbers.reduce(cardSum);

    if (userNumbers.reduce(cardSum) > 21) {
        showWinner();
    }
}

function stay() {
    let computerCardResults = "";
    for (computerCardSum = 0; computerNumbers.reduce(cardSum) < userNumbers.reduce(cardSum) && computerNumbers.reduce(cardSum) <= 21; computerCardSum++) {
        computerNumbers.push(Math.floor(Math.random()*13)+1);
    }
    for (computerCards = 0; computerCards < (computerNumbers.length - 1); computerCards++) {
        computerCardResults += computerNumbers[computerCards] + " + ";
    }
    document.getElementById("computercards").innerHTML = "Opponents cards: " + computerCardResults + computerNumbers[computerNumbers.length - 1] + " = " + computerNumbers.reduce(cardSum);

    showWinner();
}