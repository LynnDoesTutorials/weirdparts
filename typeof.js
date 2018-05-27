const a = 3;
console.log('a is: ', typeof a);

const b = 'Hello';
console.log('b is: ', typeof b);

const c = {};
console.log('c is: ', typeof c);

const d = [];
console.log('d is: ', typeof d);
console.log('d object is: ', Object.prototype.toString.call(d));

function Person(name) {
  this.name = name;
}

const e = new Person('Jane');
console.log('e is: ', typeof e);
console.log('e instanceof is: ', e instanceof Person);

console.log('undefined is: ', typeof undefined);
console.log('null is: ', typeof null);

const z = function () { };
console.log('z is: ', typeof z);