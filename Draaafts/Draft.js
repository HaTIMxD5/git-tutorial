// let name = 'Hatim';
// let age = '18';
// let color = 'blue';
// console.log(name, age, color);

// let num1 = 10;
// let num2 = 5;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// let strg = 'hello';
// let strgC = 'HELLO'

// console.log(strg.toUpperCase());
// console.log(strgC.toLowerCase());
// console.log(strg.slice(0, 5)); console.log(strg);
// console.log(strg.replace('hello', 'hi'));

// let num = -10;

// if (num > 0) {
//   console.log('positive');
// } else if (num === 0) {
//   console.log('zero');
// } else {
//   console.log('negative');
// }

// for (let i = 1; i <= 10 ; i++) {
//   console.log(i);
// }

// let arr = ['apple', 'orange', 'banana'];

// for (let i = 0 ; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// function fun(param1, param2) {
//   return param1 + param2;
// }

// let result = fun(1, 2);

// console.log(result);

// let humanId = {
//   name: 'hatim',
//   age: '18',
//   birthDate: '2006/06/24'
// }

// let humanLanguages = {
//   nativeLanguage: 'Arabic',
//   secondLanguage: 'French',
//   others: 'English'
// }

// console.log(humanId.age);
// console.log(humanLanguages.secondLanguage);

// console.log(document.querySelector('.fr').innerHTML = "Bonjour, je m'appelle Hatim!");

// document.getElementById('buttooon').addEventListener('click', function fun() {
//   document.body.style.background = 'lightblue';
// });

// let arr = [1, 2, 3, 4];

// function arrSum(par) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(arrSum(arr));

// let numbers = [10, 50, 30, 20, 40];

// function maximum(arr) {
//   return Math.max(...arr);
// }
// console.log(maximum(numbers));

// function isPalindrome(str) {
//   let reversedStr = str.split("").reverse().join("");
//   return str === reversedStr;
// }

// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('car'));

// function fibonacci(n) {
//   let sequence = [0, 1];
//   for (let i = 2; i < n; i++) {
//     sequence.push(sequence[i -1] + sequence[i - 2]);
//   }
//   return sequence;
// }

// console.log(fibonacci(6));

// function countVowels(str) {
//   let vowels = 'aeiouAEIOU';
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels('Hello, World!'));

// window.alert(8)

// document.write('hello')

// let y = 10;
// let x = 1;
// console.log(x%y);

// const colors = ["red", "green", "blue"];
// for (let i = 0; i < 10; i++) {
//   console.log(colors[i % colors.length]);
// }

// let x = 5;
// x += 10;
// console.log(x)

// function myFunction() {
//   console.log('hello');
// }

// let name = "Alice";
// const age = 30;
// let isStudent = false;
// console.log(typeof name, typeof age, typeof isStudent);

// let score = 85;
// if (score >= 90) {
//     console.log("Grade A");
// } else if (score >= 80) {
//     console.log("Grade B");
// } else {
//     console.log("Grade C or below");
// }

// const fruits = ["apple", "banana", "cherry"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let x = 10;
// let y = 7;
// let a = 5;
// let b = 3;


// console.log(
//   Math.random()      // Generates a random number between 0 and 1
// );
// console.log(
//   Math.round(x)      // Rounds x to the nearest integer
// );
// console.log(
//   Math.floor(x)      // Rounds x down
// );
// console.log(
//   Math.ceil(x)       // Rounds x up
// );
// console.log(
//   Math.abs(x)        // Returns the absolute value of x
// );
// console.log(
//   Math.sqrt(x)       // Returns the square root of x
// );
// console.log(
//   Math.pow(x, y)     // Returns x raised to the power of y
// );
// console.log(
//   Math.max(a, b)// Returns the highest number
// );
// console.log(
//   Math.min(a, b)// Returns the lowest number
// );
// console.log(
//   Math.trunc(x)      // Returns the integer part of x (removes decimal)
// );

// function capitalizeFirstLetter(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(capitalizeFirstLetter("hello")); // "Hello"
// console.log(capitalizeFirstLetter("javaScript")); // "JavaScript"

// function countVowels(str) {
//   return str.match(/[aeiou]/gi)?.length || 0;
// }

// console.log(countVowels("hello")); // 2
// console.log(countVowels("JavaScript")); // 3
