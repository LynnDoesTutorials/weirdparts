const person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function () {
    return 'Hi ' + this.firstname;
  }
}

const john = Object.create(person);
john.firstname = 'only';
console.log(john.greet());