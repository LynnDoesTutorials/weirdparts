function sayHiLater() {
  let greeting = 'Hi!';

  setTimeout(function () {
    console.log(greeting);
  }, 3000);

  console.log('In sayHiLater and beyond setTimeOut');
}

sayHiLater();

function tellMeWhenDone(callback) {
  let a = 1000;
  let b = 2000;
  callback();
}

tellMeWhenDone(function () {
  console.log('Done with first');
});

tellMeWhenDone(function () {
  console.log('Done with second');
});

tellMeWhenDone(function () {
  alert('All done..');
})