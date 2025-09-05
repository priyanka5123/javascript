let colors = ["red", "green", "blue"];

//Indexing starts at 0, not 1.
console.log(colors[0]); // red
console.log(colors[1]); // green
console.log(colors[2]); // blue

// You can change a value by referring to its index
let scores = [10, 20, 30];
scores[1] = 25;
console.log(scores); // [10, 25, 30]

// You can use .push() to add an item to the end of an array
let names = ["Ali", "Layla"];
names.push("Mina");

console.log(names); // ["Ali", "Layla", "Mina"]

// You can also use .pop() to remove the last item
names.pop(); // removes "Mina"

let animals = ["cat", "dog", "rabbit"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

let groceries = ["bread", "milk", "eggs"];

console.log("First item:", groceries[0]);
groceries.push("cheese");
console.log("Updated list:", groceries);
groceries[1] = "almond milk";
console.log("Modified list:", groceries);

// let fruits = ["apple", "banana", "cherry"];

// console.log(fruits.length);        // 3

// fruits.push("kiwi");
// console.log(fruits);               // ["apple", "banana", "cherry", "kiwi"]

// fruits.pop();
// console.log(fruits);               // ["apple", "banana", "cherry"]

// console.log(fruits.includes("banana"));  // true

// console.log(fruits.indexOf("apple"));    // 0

let tasks = ["study", "exercise", "call mom"];

console.log("Task count:", tasks.length); 

tasks.push("read book");
console.log("After adding:", tasks); 

tasks.pop();
console.log("After removing:", tasks); 

console.log("Have I called mom?", tasks.includes("call mom"));
