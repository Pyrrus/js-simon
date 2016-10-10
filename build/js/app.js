(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){


var Simon = require('./../js/simon.js').simonModule;

$(document).ready(function() {
  var simon = new Simon();

  var time;

  var click;

  $("#start").click(function() {
    $("#start").hide();
    display();
    ShowTime();
  });

  $(".simonBubble").click(function() {
    var color = $(this).attr('id');
    if (simon.match(color)) {
      if (simon.at == simon.counter) {
        ShowTime();
        simon.next();
        display();
      }
      if (simon.counter > simon.colorData.length) {
        win();
      } else {
        clickTime();
      }
    } else {
      lose()
    }
  });

  function display() {
    var data = "";
    for (var i = 0; i < simon.counter; i++) {
      if (i != 0) {
        data += ", ";
      }
      data += simon.colorData[i];
    }
    $("#simon").html(data);
    $("#simon").show();
  }

  function win() {
    clearInterval(click);
    clearInterval(time);
    $("#start").show();
    $(".simonBubble").hide();
    $("#simon").html("You win");
    $("#simon").show();
    simon.reset();
  }

  function lose() {
    clearInterval(click);
    clearInterval(time);
    $("#simon").html("game over");
    $("#simon").show();
    $("#start").show();
    $(".simonBubble").hide();
    simon.reset();
  }

  function ShowTime() {
    $(".simonBubble").hide();
    clearInterval(time);
    time = setTimeout(function() {
      $("#simon").hide();
      $(".simonBubble").show();
      clickTime();
     }, 2000);
  }

  function clickTime() {
    clearInterval(click);
    click = setTimeout(function() {
      lose()
      $(".simonBubble").hide();
    }, 3000);
  }
});

},{"./../js/simon.js":1}]},{},[2]);
