function greet(whattosay) {
  return function (name) {
    console.log(whattosay + ' ' + name);
  }
};

//greet('Hi')('Lynn'); // invoke greet, passing Hi, then pass Lynn into returned function.

var sayHi = greet('Hi');
sayHi('Lynn');

function buildFunctions2() {
  // more work with closures
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        }
      }(i))
    )
  }
  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();