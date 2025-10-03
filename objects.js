//Adding Functions to Objects (Methods)
let car = {
    // key: value
    make: "Toyota",
    model: "Camry",
    year: 2021,
    start: function(minutes) {
        console.log(`The ${this.year} ${this.make} ${this.model} is starting... in ${minutes} minutes`) //this refers to the object that the method belongs to.
    }
}
console.log(car.make)
car.start(5)

// Looping Through an Object: for...in
let person = {
    name: "Jimmy",
    age: 29,
}
//The key variable is a placeholder that loops over all property names.
for (let key in person){
    console.log("key:" + person[key])
}
//Modifying Object Properties
console.log(person)
person.city = "New York";
person.age = 31;
console.log(person)

// Objects can contain other objects.(Nested Objects)
let student = {
  name: "Alice",
  grade: 10,
  address: {
    street: "123 Main St",
    city: "Springfield",
    zipCode: "62704"
  }
};

console.log(student.address.street);  // 123 Main St

let car2 = { model: "Camry" };

console.log(car2["model"]);

let person1 = {

  name: "Lara",

  age: 25

};

//person1.city = "Paris";

console.log(person1.city);