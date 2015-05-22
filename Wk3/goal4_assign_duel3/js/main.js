/*

    Kellie Pickering
    May 22nd, 2015
    Programming for Web Applications I
    Goal 4: Assignment: Duel 3

 */

(function(){                                                        // self-executing function

    console.log("FIGHT!!!");                                        // Console returns message when function executes

    playerOne = {name: "Kabal", damage: 20, health: 100};       // Object holding PlayerOne values
    playerTwo = {name: "Kratos", damage: 20, health: 100};          // Object holding PlayerTwo values

    var round=0;                                                    // Variable to hold the current round

                                                                    /* Function that allows two players to fight until:
                                                                        - ten rounds have elapsed or
                                                                        - one or both players have reached 0 health. */
    function fight(){
        console.log('in the fight function');                       // Console returns a message when the fight function initiates

        var score = document.getElementsByTagName("p");
        score[0].innerHTML = playerOne.health;
        score[1].innerHTML = playerTwo.health;

        for (var i=0; i<10; i++){                                   // LOOP the function until ten rounds have elapsed.

            var minDamage1 = playerOne.damage * .5;                 // Variables to hold "minimum damage" values that equal half of current damage.
            var minDamage2 = playerTwo.damage * .5;
                                                                    // random formulas is:  Math.floor(Math.random() * (max - min) + min)
                                                                    /* Assign two variables to hold random number generators for each player's damage.
                                                                    Use the Math object to create a random number between minimum (10) and maximum (20) damage. */
            var f1 = Math.floor(Math.random()*(playerOne.damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo.damage-minDamage2)+minDamage2);

            playerOne.health-=f1;                                   // Subtract damage from each player's total health.
            playerTwo.health-=f2;
                                                                    // Console returns current health for both players.
            console.log(playerOne.name+":"+playerOne.health+" "+playerTwo.name+":"+playerTwo.health);

            var results = winnerCheck();                            // Initiate the winnerCheck function and assign the results to a variable.
            console.log(results);                                   // Console returns the variable value.

            if(results === "no winner"){                            // IF there is no winner,
                round++;                                            // Increase the round variable by one
                                                                    // and alert the results of the finished round.
               //  alert(playerOne.name+":"+playerOne.health+" *ROUND "+round+" OVER* "+playerTwo.name+":"+playerTwo.health);
            }else{                                                  // ELSE
                // alert(results);                                     // alert the final results
                break;                                              // and end the game.
            }

        }
    }

    function winnerCheck(){                                         // Function that determines the winner of the fight
        console.log("in winnerCheck FN");                           // Console displays message when the winnerCheck function initiates

        var result="no winner";                                     // Variable to hold fight result and assign it an initial value of "no winner"

        if(playerOne.health<1 && playerTwo.health<1){               // IF both players reach 0 health,
            result = "You Both Die";                                // Change the result so both players lose
        }else if(playerOne.health<1){                               // ELSE if Player One's health reaches 0,
            result = playerTwo.name+" WINS!!!";                     // Change the result so Player Two wins
        }else if(playerTwo.health<1){                               // ELSE if Player Two's health reaches 0,
            result = playerOne.name+" WINS!!!";                     // Change the result so Player One wins
        }
        return result;                                              // Store and return the outcome in result
    }

    console.log('program starts');                                  // Console returns a message when the program begins
    document.querySelector('.buttonblue').onclick = fight();                                    // Invoke the fight function

})();