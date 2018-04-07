var objectLiteral = {
  firstname: 'Lynn',
  isAProgrammer: true
}

console.log('objectLiteral ', objectLiteral);
console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{"firstname": "Stringified", "isAProgrammer": true}');

console.log(jsonValue);