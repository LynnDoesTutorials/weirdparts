var lynn = {
  firstname: 'Lynn',
  lastname: 'Krogseng',
  address: {
    street: '111 Main'
  }
};

function greet(person) {
  console.log('Hi ' + person.firstname);
  console.log('You still at ' + person.address.street + '?');
}

greet(lynn);
//console.log(person);