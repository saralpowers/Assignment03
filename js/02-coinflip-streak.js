//Sara Powers
//COMM 644 Assignment 03
//March 3, 2021

//The "Coin Flip Streak" Game

//A coin flip game that uses the random number generator to simulate coin flips to show
//the streak of heads that occurs each new game before the "coin" flips tails.

//declare a variable called coinFlip
let coinFlip;

//create a do while loop
do {
    //assign randomly generated number to coinFlip
    coinFlip = Math.round(Math.random());
    //conditional statement to check result of coin flip
    if (coinFlip === 0) {
        console.log('Heads');
    } else if (coinFlip === 1) {
        console.log('Tails');
    };
} while (coinFlip !== 1); //end game when coin flip turns up tails



