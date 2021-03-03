//Sara Powers
//COMM 644 Assignment 03
//March 3, 2021

//Countdown

//An application that prompts the user to enter a number. The program outputs
//a countdown from the user's number down to zero.

//prompt the user to enter a number
let userNum = window.prompt('Enter your countdown number: ');

for (i = userNum; i >= 0; i--) {
    console.log(`${i}`);
}