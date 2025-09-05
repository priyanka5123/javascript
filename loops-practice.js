// The Looping Lands L:1
// Print Parade
for (let i=1; i<=10; i++){
    console.log(i)
}

// Even Enforcer
for (let i=1; i<=20; i++){
    if (i%2 === 0){
        console.log(i)
    }
}

// Countdown Clash
for (let i=10; i>=1; i--){
    console.log(i)
}

//Summoner’s Circle
let sum = 0;
for (let i=1; i<=5; i++){
    sum += i;
}
 console.log(sum)

// Square Sorcery
for(let i =1; i <= 5; i++){
    console.log(i*i)
} 

// Level 2: The Array Arena (Working with Lists)
// Animal Echo
let animal = ["cat", "dog", "rabbit", "parrot"];
for (let i =0 ; i < animal.length; i++){
    console.log(animal[i]);
}

//Greeting Generator
let namess = ["Ali", "Sara", "John"];
for (let i =0 ; i < namess.length; i++){
    console.log(`Hello,${namess[i]}!`);
}

// Value Multiplier
let original = [1, 2, 3, 4];
doubled = [];
for(let i =0; i < original.length; i++){
    // doubled[i] = original[i]*2;
    doubled.push(original[i] * 2);
    
} 
console.log(doubled)

// Level 3: The Logic Labyrinth (Conditions & Counters)
// Divisibility Drill
for (let i=1; i<=20; i++){
    if (i%3 === 0){
        console.log(i)
    }
}

// Odd Counter Challenge
c = 0
for (let i=1; i<=10; i++){
    if (i%2 === 1){
        // console.log(i)
        c++;
    }
}
console.log("Odd numbers count: ",c)

// Master Techniques
// Skip Spell(continue)
for (let i=1; i<=10; i++){
    if(i===5){
        continue;
    }
    console.log(i);
}

// Early Exit (break)
for (let i=1; i<=10; i++){
    if(i === 7){
        break;
    }
    else{
        console.log(i)

    }
} 