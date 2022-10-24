// Print everything in an array
let numbers = ["abc", "def", "ghi", "jkl", "mno"];
  console.log(numbers[2]);
  console.log(numbers);
let nums = new Array();
  nums = [5, 8, 9];
  console.log(nums[0]);

// Maximum of integers
let array = [4, 101, 89, 56, 90, 45, 0, -7];
console.log("The max is: " ,Math.max.apply(null, array),);

// Minimum of integers
console.log("The min is: " ,Math.min.apply(null, array),);

// Index of minimum integer
console.log("The index of min is: " ,array.indexOf(Math.min.apply(null, array), fromIndex = 0),);

// Ascendant order
let masyv1 = [21, 22, 23, 24, 25, 26, 27];
let masyv2 = [21, 45, 19, 23, 24, 25, 26];
mas = masyv2;
a = 0;
for (i=0; i<mas.length-1; i++) {
    if (mas[i] < mas[i+1]) {
       a++;
    }
else {
    a--;
  }
}
    if (a === mas.length-1) {
       console.log(true);
}
else {
    console.log(false);
}


