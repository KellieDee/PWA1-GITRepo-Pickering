/*

    Kellie Pickering
    May 9th, 2015
    Programming for Web Applications I
    Goal 1: Assignment: Duel1

 */

// self-executing function
(function(){

    // Console returns message when function executes.
    console.log("FIGHT!!!");

    // Create an array to hold player variables.
    playerOne = ["Spiderman", 20, 100];
    playerTwo = ["Batman", 20, 100];

            /* // Create three global variables "name", "damage", and "health" for two separate players.

            // Assign two variables to hold player "name" values.
            var playerOneName = "Spiderman";
            var playerTwoName = "Batman";

            // Assign two variables to hold initial player "damage" values.
            var player1Damage = 20;
            var player2Damage = 20;

            // Assign two variables to hold maximum player "health" values.
            var playerOneHealth = 100;
            var playerTwoHealth = 100; */

    // Assign a variable to hold the current round number.
    var round=0;

    /* Create a function that allows two players to fight until:
       - ten rounds have elapsed or
       - one or both players have reached 0 health. */
    function fight(){
        // Console returns a message when the fight function initiates.
        console.log('in the fight function');

        // An alert displays both player names and starting health.
        alert(playerOne[0]+":"+playerOne[2]+" *START* "+playerTwo[0]+":"+playerTwo[2]);

        // LOOP the function until ten rounds have elapsed.
        for (var i=0; i<10; i++){

            // random formulas is - Math.floor(Math.random() * (max - min) + min)

            // Assign two variables to hold "minimum damage" values that equal half of current damage.
            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo[1] * .5;

            /* Assign two variables to hold random number generators for each player's damage.
               Use the Math object to create a random number between minimum (10) and maximum (20) damage. */
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

            // Subtract damage from each player's total health.
            playerOne[2]-=f1;
            playerTwo[2]-=f2;

            // Console returns current health for both players.
            console.log(playerOne[0]+":"+playerOne[2]+" "+playerTwo[0]+":"+playerTwo[2]);

            // Initiate the winnerCheck function and assign the results to a variable.
            var results = winnerCheck();
            // Console returns the variable value.
            console.log(results);

            // IF there is no winner,
            if(results === "no winner"){
                // Increase the round variable by one
                round++;
                // and alert the results of the finished round.
                alert(playerOne[0]+":"+playerOne[2]+" *ROUND "+round+" OVER* "+playerTwo[0]+":"+playerTwo[2]);
            // ELSE
            }else{
                // alert the final results
                alert(results);
                // and end the game.
                break;
            }

        };
    };

    // Create a function that determines the winner of the fight
    function winnerCheck(){
        // Console displays message when the winnerCheck function initiates.
        console.log("in winnerCheck FN");

        // Create a variable to hold the results and assign it an initial value of "no winner".
        var result="no winner";

        // IF both players reach 0 health,
        if(playerOne[2]<1 && playerTwo[2]<1){
            // Change the result so both player lose.
            result = "You Both Die";
        // ELSE if Player One's health reaches 0,
        }else if(playerOne[2]<1){
            // Change the result so Player Two wins.
            result = playerTwo[0]+" WINS!!!";
        // ELSE if Player Two's health reaches 0,
        }else if(playerTwo[2]<1){
            // Change the result so Player One wins.
            result = playerOne[0]+" WINS!!!";
        };
        // Store the outcome in the results variable.
        return result;
    };

    // Console returns a message when the program begins.
    console.log('program starts');
    // Invoke the fight function.
    fight();

})();