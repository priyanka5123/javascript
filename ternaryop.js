let humanage = 20;
let message = humanage >= 18 ? "You are an adult." : "You are a minor.";

console.log(message);

// AND Operator
let isAdult = true;
let hasTicket = true;

if (isAdult && hasTicket) {
  console.log("You can enter.");
}

// OR Operator
let isMember = false;
let hasCoupon = true;

if (isMember || hasCoupon) {
  console.log("You get a discount.");
}

// NOT Operator
let isRaining = false;

if (!isRaining) {
  console.log("You can go outside.");
}

let old = 18
let hasID = true
if (old >= 18 && hasTicket) {
  console.log("Access Granted.");
}
else{
  console.log("Access denied.");

}