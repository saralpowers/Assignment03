//Sara Powers
//COMM 644 Assignment 03
//March 3, 2021

//Odd or Even?

//An application that iterates from 0 to 15, and checks if each number is odd or even
//and displays output in the console using the modulus operator.

for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else
        console.log(`${i} is odd`);
}