//for(initialization statement; condition; incrementation)
for(let i=1;i<=5; i++){
    console.log("iteration",i);
}

// While lack initialization
let i = 1;
while(i<=3){
    console.log("iteration", i);
    i++;
}

// Nested loops
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Break and continue
for (let i = 1; i <= 5; i++) {
    if (i===3){
        break; //stops the loop when i = 3
    }
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    if (i===3){
        continue; //skips printing 3
        console.log(i);
    }
}