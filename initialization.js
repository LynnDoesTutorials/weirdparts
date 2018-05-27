const people = [
  {
    firstname: 'John',
    lastname: 'Doe',
    address: [
      '111 Main St',
      '222 Third St.'
    ]
  },
  {
    firstname: 'Jane',
    lastname: 'Doee',
    address: [
      '333 Main St.',
      '444 Fifth St.'
    ],
    greet: function () {
      return 'Hello!';
    }
  }
]

console.log(people);