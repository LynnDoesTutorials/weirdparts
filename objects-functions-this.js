console.log(this);

function a() {
  console.log(this);
  this.newVariable = 'attached to global object';
}

var b = function () {
  console.log(this);
}
a();
console.log(newVariable);
b();

var c = {
  name: 'The c object',

  log: function () {
    var self = this; //points to same memory as this keyword
    self.name = 'Updated c object';
    console.log(self);
    //this.name = 'Updated c object';//
    //console.log(this);

    var setname = function (newname) {
      self.name = newname;
    }
    setname('Updated again! the c object');
    console.log(self);
  }
}
c.log();