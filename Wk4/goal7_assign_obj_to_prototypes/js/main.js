/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

/*

    Kellie Pickering
    05/29/15
    PWA1 - Analyze Objects.person

 */

// Create an array labeled "names" that holds the names of five people.
// Create an empty array labeled "people".

// Initialize a for loop that goes through the Person object three times.

    // Create a variable "name" to hold a random name.
        // Use Math.floor and Math.random to go through the length of the names array and choose a one random name.
        // Pop selected name out of the name array.

    // Create a variable "nameRow" to hold the current row ID.
        // Set nameRow equal to the ID of "'r1c'+1".

    // Create a variable "person" and instantiate it to the new Person object constructor. Pass the following arguments:
        // Name         Pass the current name value
        // Row          Pass the current nameRow value.

    // Push result to the people array.
    // Set row variable equal to row+1.

// Create a function "populateHTML"
    // Create a for loop that goes through the length of the people array
        // Use object notation to get the name, then assign the value to the innerHTML of the correct row.
        // Repeat the above step, but get the person's job (using Math.random)
            // use getElementByID to assign values to row 2.

// Create a function to change person action 30 times every second using setInterval and passing it a frequency.
        // e.g. "setInterval(runUpdate, 1000/30)
        // Use the update() function to change each person's action.
