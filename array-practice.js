let fruits = ["apple","banana","cherry"]
console.log(fruits[1])
fruits[1] = "blueberry"
console.log(fruits)
fruits.push("orange")
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.unshift("grape")
console.log(fruits)
fruits.shift()
console.log(fruits)

numbers = [3,6,9,12]
sumofnos = numbers[0] + numbers[3]
console.log(sumofnos)
console.log(numbers.length)
numbers.push(15)
numbers.push(18)
console.log(numbers)
numbers[1]= null
console.log(numbers)

colors=["red","blue","green"]
console.log(colors)

colors[2] = "black"
console.log(colors)

favorites = ["pizza","pasta","noodles"]
console.log(favorites)
favorites.push("burger")
first = favorites[0]
last= favorites[favorites.length-1]
console.log(`I liked ${first} and ${last}`)
console.log(favorites)
