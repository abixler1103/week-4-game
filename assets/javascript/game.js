var wins = 0;
var losses = 0;
var yourScore = 0;
var winNum = 0;
//var sheep = getRandomInt(1, 12);

var pig = getRandomInt(1, 12);
var cow = getRandomInt(1, 12);
var chicken = getRandomInt(1, 12);
var NumtoWin = 0;
var winning_number = targetNumber();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function targetNumber() {
    //var winNum = Math.floor(Math.random() * 20) + 1;
    return Math.floor(Math.random() * ((120 - 19) + 1)) + 19;
}

function checkScore(current_score) {
    if (current_score == NumtoWin) {
        alert("Congrats, You WON!");
        wins++;
        gameSetup();
    } else if (current_score > NumtoWin) {
        alert("Too Many, You Lose!");
        losses++;
        gameSetup();
    }
}




function gameSetup() {
    yourScore = 0;
    sheep = getRandomInt(1, 12);
    console.log("SheepOnInit= ", sheep);

    var winning_number = targetNumber();
    $(".wins").html(wins);
    $(".losses").html(losses);
    $(".yourScore").html(0);
    $(".randomNumber").html(winning_number);
    NumtoWin = winning_number;

}


$(document).ready(function() {
    //gameSetup();

    // sheep
    $("#sheep").on("click", function() {
        //alert("hello");
        // console.log("Sheep= ", sheep);
        // console.log("YourScore= ", yourScore);

        console.log("SheepPreClick= ", sheep);

        yourScore = yourScore + sheep;
        checkScore(yourScore);

        console.log("SheepPostClick= ", sheep);

        // console.log("Sheep2= ", sheep);
        // console.log("YourScore2= ", yourScore);

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


});