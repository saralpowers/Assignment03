// GLOBAL VARIABLES
let futureValue;
let investment = NaN;
let rate = NaN;
let years = NaN;

// COLLECT VALUES FROM THE USER
//VALIDATION:a numeric number for the variable investment
while (isNaN(investment)) {
    investment = prompt('Enter investment amount as xxxx.xx');
}
//VALIDATION:a numeric number between 0 and 6 percent for the variable rate
while (isNaN(rate) || (rate < 0 || rate > 6)) {
    rate = prompt('Enter interest rate as x.x% (from 0% to 6%)');
}
//VALIDATION:a numeric number between 0 and 30 years for the investment period
while (isNaN(years) || (years < 0 || years > 30)) {
    years = prompt('Enter the number of years you want to invest for (0 to 30 years)');
}

// CALCULATE FUTURE VALUE
futureValue = parseInt(investment);
for (let i = 0; i < parseInt(years); i++) {
    futureValue = futureValue + (futureValue * parseInt(rate) / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${parseInt(investment).toFixed(2)}<br>`);
document.write(`Interest rate: ${parseInt(rate).toFixed(2)}%<br>`);
document.write(`Years: ${parseInt(years)}<br>`);
document.write(`Future value: $${parseInt(futureValue).toFixed(2)}`);