let person = {
  firstname: 'Johnny',
  lastname: 'Appleseed',
  getFullName: function () {
    let fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

console.log(person.getFullName());

let logName = function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-------------------');
} // you could do the binding here too .bind(person);

let logPersonName = logName.bind(person);  // .bind create a copy of the object passed to it

logPersonName('en');

logName.call(person, 'en', 'fr'); //call invokes the function and allows you to specify which object is bound to this.

logName.apply(person, ['en', 'fr']); //apply does the same as call but expects an array for arguments

// function borrowing
let person2 = {
  firstname: 'Martha',
  lastname: 'Moffett'
}

// note there is not a getFullName function in person2
console.log(person.getFullName.apply(person2)); // here, we use the person function and apply this. to person2

//function currying using bind
// create a new copy of the function but with some preset parameters
function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));
console.log(multiply(3, 6));
