/*

    Kellie Pickering
    May 22nd, 2015
    Programming for Web Applications I
    Goal 4: Assignment: Duel 3

 */

(function(){                                                                            // self-executing function

    console.log("FIGHT!!!");                                                            // Console returns message when function executes

    playerOne = {name: "Kabal", damage: 20, health: 100};                               // Object holding PlayerOne values
    playerTwo = {name: "Kratos", damage: 20, health: 100};                              // Object holding PlayerTwo values

    var round = 0;                                                                      // Variable to hold the current round

    var roundNum = document.getElementById("round_number");                             // Variable holding Round Number input ID
    roundNum.innerHTML = "CLICK TO START";                                              // Set HTML to display instruction message,

    var button = document.querySelector(".buttonblue");                                 // Varible to the start button

    var score = document.getElementsByTagName("p");                                     // Variable holding paragraph tags
    score[0].innerHTML = playerOne.name + " : " + playerOne.health;                     // Set HTML to display playerOne's name and current health
    score[1].innerHTML = playerTwo.name + " : " + playerTwo.health;                     // Set HTML to display playerTwo's name and current health

                                                                                        /* Function that allows two players to fight until:
                                                                                            - ten rounds have elapsed or
                                                                                            - one or both players have reached 0 health. */
    function fight(){
        console.log('in the fight function');                                           // Console returns a message when the fight function initiates

        var minDamage1 = playerOne.damage * .5;                                         // Variables to hold "minimum damage" values that equal half of current damage
        var minDamage2 = playerTwo.damage * .5;                                         // random formulas is:  Math.floor(Math.random() * (max - min) + min)

        var f1 = Math.floor(Math.random()*(playerOne.damage-minDamage1)+minDamage1);    // Assign two variables to hold random number generators for each player's damage
        var f2 = Math.floor(Math.random()*(playerTwo.damage-minDamage2)+minDamage2);    // Use the Math object to create a random number between minimum (10) and maximum (20) damage

        playerOne.health-=f1;                                                           // Subtract damage from PlayerOne's total health
        playerTwo.health-=f2;                                                           // Subtract damage from PlayerTwo's total health

        score[0].innerHTML = playerOne.name + " : " + playerOne.health;                 // Set HTML to display playerOne's name and current health
        score[1].innerHTML = playerTwo.name + " : " + playerTwo.health;                 // Set HTML to display playerTwo's name and current health

        console.log(playerOne.name+":"+playerOne.health+" "
            +playerTwo.name+":"+playerTwo.health);                                      // Console returns current health for both players

        var results = winnerCheck();                                                    // Initiate the winnerCheck function and assign the results to a variable.
        console.log(results);                                                           // Console returns the variable value.

        if(results === "no winner") {                                                   // IF there is no winner:
            round++;                                                                    // Increase the round by one,
            roundNum.innerHTML = "ROUND " + round + " OVER";                            // Set HTML to display Round Over message,
            console.log("Round " + round + " ends.");                                   // Print round to console
        }else{                                                                          // ELSE,
            button.removeEventListener("click", fight);  // End the game by disabling the button
            button.innerHTML = "DONE!";                                                 // Set HTML to display finished message
        }

    }

    function winnerCheck(){                                                             // Function that determines the winner of the fight
        console.log("in winnerCheck FN");                                               // Console displays message when the winnerCheck function initiates

        var result="no winner";                                                         // Variable to hold fight result and assign it an initial value of "no winner"

        if(playerOne.health<1 && playerTwo.health<1){                                   // IF both players reach 0 health:
            result = "Both Players Die";                                                // Change the result so both players lose,
            score[0].innerHTML = playerOne.name + " Dies!";                             // Set HTML to show PlayerOne has died,
            score[1].innerHTML = playerTwo.name + " Dies!";                             // Set HTML to show PlayerTwo has died
        }else if(playerOne.health<1){                                                   // ELSE if Player One's health reaches 0:
            result = playerTwo.name+" WINS!!!";                                         // Change the result so Player Two wins,
            score[0].innerHTML = " ";                                                   // Set PlayerOne text to an empty string,
            score[1].innerHTML = result;                                                // Set HTML to show result
        }else if(playerTwo.health<1){                                                   // ELSE if Player Two's health reaches 0:
            result = playerOne.name+" WINS!!!";                                         // Change the result so Player One wins,
            score[0].innerHTML = result;                                                // Set HTML to show result,
            score[1].innerHTML = " ";                                                   // Set PlayerTwo text to an empty string,
        }
        return result;                                                                  // Store and return the outcome in result
    }



    console.log('program starts');                                                      // Console returns a message when the program begins
    console.log("Round #: " + round);                                                   // Console returns current round number

    button.addEventListener("click", fight);                                             // Invoke the fight function with button click

})();