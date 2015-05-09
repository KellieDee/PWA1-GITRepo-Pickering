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

    // Create three global variables "name", "damage", and "health" for two separate players.

    // Assign two variables to hold player "name" values.
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    // Assign two variables to hold initial player "damage" values.
    var player1Damage = 20;
    var player2Damage = 20;

    // Assign two variables to hold maximum player "health" values.
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    // Assign a variable to hold the current round number.
    var round=0;

    /* Create a function that allows two players to fight until:
       - ten rounds have elapsed or
       - one or both players have reached 0 health. */
    function fight(){
        // Console returns a message when the fight function initiates.
        console.log('in the fight function');

        // An alert displays both player names and starting health.
        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

        // LOOP the function until ten rounds have elapsed.
        for (var i=0; i<10; i++){

            // random formulas is - Math.floor(Math.random() * (max - min) + min)

            // Assign two variables to hold "minimum damage" values that equal half of current damage.
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;

            /* Assign two variables to hold random number generators for each player's damage.
               Use the Math object to create a random number between minimum (10) and maximum (20) damage. */
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            // Subtract damage from each player's total health.
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            // Console returns current health for both players.
            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);

            // Initiate the winnerCheck function and assign the results to a variable.
            var results = winnerCheck();
            // Console returns the variable value.
            console.log(results);

            // IF there is no winner,
            if(results === "no winner"){
                // Increase the round variable by one
                round++;
                // and alert the results of the finished round.
                alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);
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
        if(playerOneHealth<1 && playerTwoHealth<1){
            // Change the result so both player lose.
            result = "You Both Die";
        // ELSE if Player One's health reaches 0,
        }else if(playerOneHealth<1){
            // Change the result so Player Two wins.
            result = playerTwoName+" WINS!!!";
        // ELSE if Player Two's health reaches 0,
        }else if(playerTwoHealth<1){
            // Change the result so Player One wins.
            result = playerTwoName+" WINS!!!";
        };
        // Store the outcome in the results variable.
        return result;
    };

    // Console returns a message when the program begins.
    console.log('program starts');
    // Invoke the fight function.
    fight();

})();