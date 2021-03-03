//Sara Powers
//COMM 644 Assignment 03
//March 3, 2021

//Marco! Polo!

//An application that iterates from numbers from 1 to 100 displays a string if
//the number is a multiple of 3, 5, or both 3 and 5 using the modulus operator.

for (i = 0; i <= 100; i++) {
    //If the number is a multiple of 3, print "Marco!"
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log(`${i} Marco!`);
    //If the number is a multipe of 5, print "Polo!"
    } else if (i % 3 !== 0 && i % 5 === 0) {
        console.log(`${i} Polo!`);
    //If the number is a multipe of 3 and 5, print "Marco! Polo!"
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} Marco! Polo!`)
    }
}