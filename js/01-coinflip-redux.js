//Sara Powers
//COMM 644 Assignment 03
//March 3, 2021

//The "Coin Flip" Game Redux

//A coin flip game that flips a coin a certain number of times determined by prompting
//the user for a number and then displays the flip results in the console.

//declare a variable called coinFlip
let coinFlip;

//create a for loop that loops the number of times assigned by user in prompt
let flipRepeats = window.prompt('Enter how many times you would like to flip the coin: ');
for (let i = 0; i < flipRepeats; i++) {
    coinFlip = Math.round(Math.random());
    //console.log(coinFlip);
    if (coinFlip === 0) {
        console.log('Heads');
    } else if (coinFlip === 1) {
        console.log('Tails');
    };
};

