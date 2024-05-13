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

// Exercise 5 no you cann't.
// Exercise 6
let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
}
let {Fred,Ted,Ghaith} = salaries;
let sum = salaries ==="" ? 0 : Fred + Ted + Ghaith;

// Exercise 7
if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}
let result = a + b < 4 ? 'Below' : 'Over';


//Exercise 8
if (login == 'Employee') {
    message = 'Hello';
  } else if (login == 'Director') {
    message = 'Greetings';
  } else if (login == '') {
    message = 'No login';
  } else {
    message = '';
  }
let message = login == 'Employee' ?  'Hello' : login == 'Director' ? 'Greetings' : login == '' ? 'No login' : '';
