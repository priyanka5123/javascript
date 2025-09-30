function printSomething() {
    console.log(1)
}
printSomething();

function add(a,b) {
    let result = a+b;
    return result
}
let sumresult = add(2, 3)
console.log(sumresult);

function welcome(name) {
    console.log("Welcome, " + name);
}

welcome("Name of Person")

function calculateArea(width, height) {
  return width * height;
}

let area1 = calculateArea(5, 10);
let area2 = calculateArea(3, 7);

console.log("Area 1:", area1);  // 50
console.log("Area 2:", area2);  // 21

// Double the number
function double(number){
    return number * number;
}

console.log(double(9))

// Fullname 
function fullName(firstName, lastName){
    return firstName + " " + lastName;
}

console.log(fullName("Joe","Dane"))

// IsEven 
function isEven(num){
    if (num%2 === 0){
        return true
    }
    else{
        return false
    }
}

console.log(isEven(2))

// Say hi to every person in a list of names.
function greetEveryone(names) {
  for (let i = 0; i < names.length; i++) {
    console.log("Hi, " + names[i]);
  }
}

greetEveryone(["Ali", "Sara", "John"]);

//  Keep only the positive numbers from a list.
function filterPositives(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}
console.log(filterPositives([-1, 2, -3, 4])); // [2, 4]

// Return the total of all numbers in an array.
function sumNumbers(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(sumNumbers([10, 20, 30])); // 60