var wins = 0;
var losses = 0;
var yourScore = 0;
var winNum = 0;
var sheep = Math.floor((Math.random() * 12) + 1);
var pig = Math.floor((Math.random() * 12) + 1);
var cow = Math.floor((Math.random() * 12) + 1);
var chicken = Math.floor((Math.random() * 12) + 1);
var NumtoWin = 0;
var winning_number = targetNumber();

function targetNumber() {
    //var winNum = Math.floor(Math.random() * 20) + 1;
    return Math.floor(Math.random() * ((120 - 19) + 1)) + 19;
}

function checkScore(current_score) {
    if (current_score === NumtoWin) {
        alert("Congrats, You WON!");
        wins++;
    } else if (current_score > NumtoWin) {
        alert("Too Many, You Lose!");
        losses++;
    }
}


function gameSetup() {
    var winning_number = targetNumber();
    $(".btn").on("click", gameSetup);
    $(".wins").html(0);
    $(".losses").html(0);
    $(".yourScore").html(0);
    $(".randomNumber").html(winning_number);
    NumtoWin = winning_number;

    // sheep
    $("#sheep").on("click", function() {
        yourScore += sheep;
        checkScore(yourScore);
        $(".yourScore").html(yourScore);
    });


    // pig
    $("#pig").on("click", function() {
        yourScore += pig;
        checkScore(yourScore);
        $(".yourScore").html(yourScore);
    });

    // cow
    $("#cow").on("click", function() {
        yourScore += cow;
        checkScore(yourScore);
        $(".yourScore").html(yourScore);
    });

    // chicken
    $("#chicken").on("click", function() {
        yourScore += chicken;
        checkScore(yourScore);
        $(".yourScore").html(yourScore);
    });
}


$(document).ready(function() {
    gameSetup();
});
