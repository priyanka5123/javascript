// Write a function called greetUser that prints "Hello, student!"
function greetUser(){
    console.log("Hello,student!")
}
greetUser()

// Write a function addTwoNumbers(a, b) that returns the sum of two numbers.
function addTwoNumbers(a, b) {
    return a+b
}
sum = addTwoNumbers(4, 6)
console.log(sum)

// Write a function greet(name) that returns "Welcome, " + the name.
function greet(name){
    return "Welcome, " +  name;
}

console.log(greet("World"))

// Create countToFive() that prints numbers from 1 to 5 using a for loop.
function countToFive(){
    for (let i=1; i<=5; i++){
        console.log(i)
    }
}
countToFive()

// Create printRange(n) that prints all numbers from 1 to n.
function printRange(n){
    for (let i=1; i<=n; i++){
        console.log(i)
    }
}
printRange(10)

// Write printArrayElements(arr) to print each item in an array (don’t use .forEach()).
function printArrayElements(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

printArrayElements(["Ali","James","Kate"])

// Write getPositiveNumbers(numbers) to return only positive values from an array.
function getPositiveNumbers(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}
console.log(getPositiveNumbers([-1, 2, -3, 4]));

// Write sumArray(arr) that adds up all values in an array and returns the total.
function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumArray([10, 20, 30]));

// Write isEven(num) to return true if the number is even, false otherwise.
function isEven(num){
    if (num%2 === 0){
        return true
    }
    else{
        return false
    }
}

console.log(isEven(2))

// Create countEvens(arr) to count how many even numbers are in an array.

function countEvens(arr){
    count = 0
    for (let i= 0; i<arr.length; i++){
        if ((arr[i])%2 === 0){
            count = count+1;
        }
    }
    return count
}

result = countEvens([1,2,2,4,6,7])
console.log(result)

// Write findMax(arr) to return the largest number in the array.
function findMax(arr){
    Max = 0;
    for (let i =0; i < arr.length; i++){
        if(arr[i] > Max){
            Max = arr[i];
        }
    }
    return Max;
}
result = findMax([1,4,9,21,3])
console.log(result)

// Create fizzBuzz(n) that:
// Prints "Fizz" if a number is divisible by 3
// "Buzz" if divisible by 5
// "FizzBuzz" if divisible by both
// Else, print the number
function fizzBuzz(n){
    if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz");
    } else if (n % 3 === 0) {
        console.log("Fizz");
    } else if (n % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(n);
    }
}
fizzBuzz(30)