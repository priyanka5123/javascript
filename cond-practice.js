// Create a program that checks if a number is positive, negative, or zero.

let numb = -6;
if(numb > 0){
    console.log("Number is positive.")
}
else if(numb < 0) {
    console.log("Number is negative.")
}
else if(numb === 0){
    console.log("Number is zero.")
}  

// Write an if-else statement that checks whether a person is eligible to vote (age must be 18 or older).

human_age = 20
if(human_age >= 18){
    console.log("Eligible to vote.")
}
else {
    console.log("Not Eligible to vote.")
}

// Given a variable score, print:
let score_card = 79;

if (score_card >= 90) {
  console.log("Grade: A");
} else if ((score_card >= 75) & (score_card <= 89)) {
  console.log("Grade: B");
} else if ((score_card >= 50) & (score_card <= 74)) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

//  A person can enter only if they are an adult and have an ID. Use logical operators.
let person_age = 20;
let hasId= true;

if (person_age >= 18) {
    if (hasId === true){
        console.log("You can enter.");
    }
    else{
        console.log("You need an ID.");
    }
  
} else {
  console.log("You are too young to enter.");
}

// Write a nested if statement that prints "Perfect square" if a number is both a whole number and its square root is an integer.
let number = 25;
if (Number.isInteger(number)){
  if (Number.isInteger(Math.sqrt(number))){
    console.log("Perfect Square")
  }
}

// Use a ternary operator to check if a user is online. If isOnline is true, print "User is online", otherwise "User is offline".

let isOnline = true;
if (isOnline){
    console.log("User is Online");
}
else{
    console.log("User is Offline");
    
}

// Create a program that accepts a day of the week ("Monday", "Tuesday", etc.) and prints "Weekday" or "Weekend" based on the value.
let day = "Wednesday";
if ((day === "Saturday") | (day === "Sunday")){
  console.log("Weekend");
}
else{
  console.log("Weekday");
}

// Given two booleans isAdult and hasTicket, use a combination of AND, OR, and NOT to write an access policy:
isAdult = true;
hasTicket = true;
if (isAdult & hasTicket){
  console.log("Access granted");
}
else if(!isAdult & hasTicket){
  console.log("Need guardian")
}
else if(!hasTicket){
  console.log("No access")
}



// Given a number, check if it is even and divisible by 5. If so, print "Valid number".
let no = 30
if ((no%2 === 0) & (no%5 === 0)){
  console.log("Valid number.")
}
else{
  console.log("")
}



// You are making a weather app. If isRaining is true, print "Take an umbrella"; if isRaining is false, print "You’re good to go".
isRaining = true;
if (isRaining){
  console.log("Take an umbrella");
}
else{
  console.log("You’re good to go");
}