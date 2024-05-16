// Exercise 1
let  checkAge = (age) => {
    age > 18 ?  true : confirm('Do you have your parents permission to access this page?');
}

// Exercise 2
let power = (num,pow) =>{
    for (let i =1; i < pow; i++){
        num *= num;
    }
    return num;
}

console.log(power(3,3));

// Exercise 3
let ask = (question, yes, no) => {
    confirm(question) ?  yes() : no();
}
  
ask(
    "Do you agree?",
    function() { alert("You agreed.") },
    function() { alert("You canceled the execution.") }
)


let calculator = {
    read() {
      this.a =+ prompt('Enter the first number:', 0);
      this.b =+ prompt('Enter the second number:', 0);
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
