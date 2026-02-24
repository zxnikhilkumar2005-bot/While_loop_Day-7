const prompt = require("prompt-sync")();
// let number=  Number(prompt("Enter a number: "))

// while(number < 0){
//     rem= number % 10
//     sum= sum = rem ;   
//     console.log(sum);
//     number= number/10

// }

// sum of dighi using while loop 
// let n = Number(prompt("Enter a number:"));123
// let sum = 0;

// while (n > 0) {
//     let digit = n % 10;               // last digit
//     sum = sum + digit  // add to sum
//     n = Math.floor(n / 10);           // remove last digit
// }

//  console.log("Sum of digits =", sum);

// 1️⃣ Print 1 to 10 using while loop
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
// 2️⃣ Print 10 to 1 (Reverse Counting)
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// 🔹 3️⃣ Sum of First N Natural Numbers
// let n = 5;
// let i = 1;
// let sum = 0;

// while (i <= n) {
//     sum += i;
//     i++;
// }
// console.log("Sum =", sum);
// // 🔹 5️⃣ Sum of Digits
// let n = 1234;
// let sum = 0;

// while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
// }

// console.log("Sum of digits =", sum);
// 🔹 6️⃣ Reverse a Number
// let n= Number(prompt("Enter the number: "))
// let reverse = 0;

// while (n > 0) {
//     reverse = reverse * 10 + (n % 10);
//     n = Math.floor(n / 10);
// }

// console.log("Reverse =", reverse);



// let num = Number(prompt("Enter number: "));
// let temp = num;
// let square = num * num;
// let digits = 0;

// // digits count karne ke liye
// while (temp > 0) {
//     digits++;
//     temp = Math.floor(temp / 10);
// }

// // last digits nikalne ke liye
// let lastPart = square % (10 ** digits);

// if (lastPart === num) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// let n = Number (prompt("Enter a number"));
// let copy = n
// let count =0;

// while(n>0){
//     count++;
//     n = Math.floor(n/10);
// }

// if (count != 10)console.log("invalid ISBN");
// else{
//     let ans =0
//     while(copy <0){
//         let dig =copy%10;
//         ans = ans + (dig*count);
//         count--;
//         copy = copy/10
//     }

//     console.log(ans%11==0 ? "Valid ISBN": "Invalid ISBN");
    
// }

let n = Number (prompt("enter the number"))
let reverse = 0;

while (n > 0) {
    let digit = n % 10;          
    reverse = reverse * 10 + digit;  
    n = Math.floor(n / 10);      
}

console.log(reverse);