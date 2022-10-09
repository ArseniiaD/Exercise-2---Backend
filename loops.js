// Print numbers
const prompt = require("prompt-sync")();
let n = prompt("Enter the number:");
for (i=1; i<=n; i++) {
    console.log(i);
}

let j = prompt("Enter the number:");
for (i=j; i>=1; i--) {
    console.log(i);}

let k = prompt("Enter the number:");
for (i=-k; i<=k; i++) {
    console.log(i);
}

let p = prompt("Enter the number:");
for (i=1; i<=p; i++) {
    if (i%2 !== 0) {
        console.log(i);}
    }

// Random number of integers
let minimum = 1;
let maximum = 20;
let rand = Math.round(Math.random() * (maximum-minimum) + minimum);
console.log(rand);
for (i=0; i<=rand; i++) {
    console.log("The random numbers are:",i,);
}

// Throw dices
let thr = prompt("Enter the number of throws:");
let x = prompt("Enter the number for check:");
let count = 0;
for (i=1; i<=thr; i++) {
    let minimum = 1;
    let maximum = 6;
    randnumb = Math.round(Math.random() * (maximum-minimum) + minimum);
    if (randnumb === parseInt(x) ) {
        count+=1;
        console.log("The Dices = " ,count,);
    }
    }

// Throw dices Var 2
t = 100
n = 1
y = 0

for (x=1; x<=t; x++){
if (Math.floor(Math.random() * 5+1) == n) {
    y++
}
}
console.log('The dice been throwed',t,'times and number',n,'been received',y,'times')

// Even numbers
let a = prompt("Enter the number:");
for (i=0; i<=a; i++) {
    if (i%2 === 0) {
        console.log(i);}
    }

// Perfect number
let num = 28;
y = 0;
for (i=1; i<num; i++) {
    if (num%i === 0) {
        y=y+i;
    }
}
    if (y === num) {
        console.log("This Is Perfect Number");
    }
    else {console.log("This Is Not Perfect Number");
}


