// Exercise 1
console.log('Exercise 1');
function filterRange(arr, a, b){
    return arr.filter(item => (a <= item && item <= b));   
}

let arr = [5, 3, 8, 1];
console.log(filterRange(arr,1,4));

// Exercise 2
console.log('Exercise 2');
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
console.log(users.map(x=>x.name));

// Exercise 3
console.log('Exercise 3');
function getAverageAge(users){
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
console.log(getAverageAge(users));