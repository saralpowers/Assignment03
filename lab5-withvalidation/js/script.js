let miles;
let gallons;
let mpg;
let again = 'y';

do {
    miles = parseFloat(prompt('Enter miles driven: '));
    gallons = parseFloat(prompt('Enter how many gallons of gas to fill tank: '));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        document.write(`Your car get ${mpg.toFixed(2)} miles per gallon.`);
    } else {
        document.write('One or both entries are invalid.');
    }
    again = prompt('Run application again? (y or n)', 'y');
    //VALIDATION:prompt reappears until the user enters a valid entry (y or n)
    while (again !== 'y' && again !== 'n') {
        again = prompt('Run application again? (y or n)', 'y');
    }
} while (again === 'y');