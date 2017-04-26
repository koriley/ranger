"use strict";

QUnit.test("test if responsive height works", function (assert) {
  jQuery(".testPlace").append("<div class='changeWidth' style='height:100px;'>");
  jQuery(".changeWidth").append("<div class='innerDivToChange' style='height:100px'>");

  // var resize = new responsibleHeight(".changeWidth", ".innerDivToChange");
  for (var i = 1; i <= 4; i++) {
    var x = i * 200;
    jQuery(".changeWidth").height(x);
    responsibleHeight(".changeWidth", ".innerDivToChange");
    var y = jQuery(".innerDivToChange").height();
    //console.log(`y= ${y} and x= ${x}`);

    assert.equal(y, x, "resized to " + x);
  }
  jQuery(".changeWidth").remove();
});

QUnit.test("Test if color of text changes", function (assert) {
  jQuery(".testPlace").css({
    background: "black",
    color: "red"
  }).html("this is text");
  var x = "rgb(255, 255, 255)";
  var done = assert.async();
  var y = colorize(".testPlace");
  setTimeout(function () {
    var z = jQuery(".testPlace").css("color");
    //console.log(y);
    assert.equal(y, true, "color is now " + z);
    jQuery(".testPlace").css({
      background: "white",
      color: "black"
    }).html("");
    done();
  }, 500);
});

QUnit.test("Test if menu vars are rest", function (assert) {
  oldSelectedMenuItem = 6;
  newSelectedMenuItem = 4;
  selectedMenuValue = 3;
  resetMenu(".testPlace");
  //console.log(oldSelectedMenuItem);
  assert.equal(oldSelectedMenuItem, undefined, "oldSelectedMenuItem was set to 6 but is now " + oldSelectedMenuItem);
  assert.equal(newSelectedMenuItem, undefined, "newSelectedMenuItem was set to 4 but is now " + newSelectedMenuItem);
  assert.equal(selectedMenuValue, 0, "selectedMenuValue was set to 3 but is now " + selectedMenuValue);
});