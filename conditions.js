// random 
let min = 1;
let max = 50;
let number = Math.round(Math.random() * (max-min) + min);
console.log(number);

// Reduced tariff price 
const prompt = require('prompt-sync')();
let priceV2 = prompt("Enter your price:");
if (priceV2 == 10) {
    console.log("Pay full price, please");
    }
else {
    console.log("Pay 8 euro, please");
    }
 
// Maximum of three numbers
function maxNumber (x, y, z) {
   if (x > y && x > z) {
    console.log("Max is:",x,);
    }
else if (y > x && y > z) {
    console.log("Max is:",y,);
    }
else {
    console.log("Max is:" ,z,);
}
}
maxNumber(100, 282, 369);
maxNumber(50000, 567, 6778);

// Identical Dice
let minimum = 1;
let maximum = 6;
let a = Math.round(Math.random() * (maximum-minimum) + minimum);
let b = Math.round(Math.random() * (maximum-minimum) + minimum);
let c = Math.round(Math.random() * (maximum-minimum) + minimum);
console.log(a, b, c);
function identValue () {
    if (a === b && a === c) {
       console.log("Identical value = 3");
       }
else if (a === b || a === c) {
    console.log("Identical value = 2");
       }
 else {
    console.log("Identical value = 0");
       }
}
identValue(a, b, c);

// Days of the week
let daysOfTheWeek = ["Zero-day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let dayNum = prompt("Enter the number of the day:");
function day() {
     var day = daysOfTheWeek[dayNum];
     console.log(day);
   }
day();

var day2 = prompt("Enter the number of the day:");
switch (day2) {
    case "1":
    console.log("Monday");
    break;
    case "2":
    console.log("Tuesday");
    break;
    case "3":
    console.log("Wednesday");
    break;
    case "4":
    console.log("Thursday");
    break;
    case "5":
    console.log("Friday");
    break;
    case "6":
    console.log("Saturday");
    break;
    case "7":
    console.log("Sunday");
    break;
}

// Print shop
const price10 = 0.12*10;
const price30 = price10 + 20*0.11;
console.log(price10.toFixed(2));
console.log(price30.toFixed(2));
let n = prompt("Enter the number of the pages:");
if (n <= 10) {
    console.log(n*0.12);
}
else if (n <=30) {
   console.log((price10 + (n-10)*0.11).toFixed(2));
}
else {
    priceMore = price30 + (n-30)*0.1;
    console.log(priceMore.toFixed(2));
}
