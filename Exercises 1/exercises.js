// Exercise 1
let user = {
    name: "John",
    years: 30
}
let{ name,years} = user;
let isAdmin = user.isAdmin ? true : false;

// Exercise 2
let planetName = 'earth' ;
let currentVisitor = 'Hanna';

// Exercise 3
let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi(); // it's an alert Hello John because of the function

// Exercise 4
let user1 = {};
user1.name = 'John';
user1.surName = 'Smith';
user.name = "Pete";
delete user.name;
