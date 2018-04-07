function greet() {
  console.log('hi');
}

greet.language = 'english';

console.log(greet);
console.log(greet());

// functions statements and function expressions

greet();  // returns a value

function greet() { //function statement
  console.log('hi from greet');  // oops...this will get hoisted and replaces earlier definition
}

var anonymousGreet = function () { // creates a function that results in a value
  console.log('hi from anonymous function');
}

anonymousGreet(); // invoked, returns a value