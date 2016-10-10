

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
