function Simon() {
  this.colorData;
  this.color();
  this.counter = 1;
  this.at = 0;
}

Simon.prototype.color = function () {
  var size = Math.floor((Math.random() * 10) + 1);
  var setup = [];
  for (var i = 0; i < size; i++) {
    var color = Math.floor((Math.random() * 4) + 1);
    if (color == 1) {
      setup.push("yellow");
    } else if (color == 2) {
      setup.push("blue");
    } else if (color == 3) {
      setup.push("green");
    } else {
      setup.push("red");
    }
  }
  this.colorData = setup;
};

Simon.prototype.reset = function () {
  this.color();
  this.counter = 1;
  this.at = 0;
}

Simon.prototype.match = function(click) {
  if (click == this.colorData[this.at]) {
    this.at++;
    return true;
  } else {
    return false;
  }
};

Simon.prototype.next = function () {
  this.at = 0;
  this.counter++;
};



exports.simonModule = Simon;
