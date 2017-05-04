"use strict";

/***********************
These are the functions that make the main navagation function.

*************************/

var oldSelectedMenuItem;
var newSelectedMenuItem;
var selectedMenuValue = 0;
var menuOpen = 0;
/************************
colorize sets the color of the selected or hoverered over element to white and changes the siblings to grey

tested with QUnit; test.html for results, test.js to see test

@parm -> element that parents the innerText
************************/

function colorize(element) {
  jQuery(element).siblings().not(element).stop().animate({
    color: "#8B8B8B"
  }, 300);
  jQuery(element).stop().animate({
    color: "#ffffff"
  }, 300);
  return true;
}

/**********************
resetMenu resets the vars that make the menu function when the menu state changes to all items unselected we
need to reset everything.

tested with QUnit; test.html for results, test.js to see test

@parm -> element of a menu item
***********************/
function resetMenu(element) {
  jQuery(element).each(function() {
    jQuery(this).siblings().stop().animate({
      color: "white"
    }, 300);
    //  console.log(element);
  });
  newSelectedMenuItem = undefined;
  oldSelectedMenuItem = undefined;
  selectedMenuValue = 0;
  // console.log(`${newSelectedMenuItem} ${oldSelectedMenuItem}`);

  return true;
}
/************************
  these are the nav mouse enter and leave state anonymous functions
************************/
jQuery(".mainNav").mouseenter(function() {

  if (selectedMenuValue == 0) {
    colorize(this);
  }
});
jQuery(".mainNav").mouseleave(function() {
  if (selectedMenuValue == 0) {
    resetMenu(this);
  }
});

/***********************
This is the click state for the main nav
***********************/
jQuery(".dropNav").on("click touchstart", function(event) {

  /**************
  Get the main menu item clicked index number. Used to know the the menu is active.
  **************/
  selectedMenuValue = jQuery(this).attr("data-index");
  //  console.log(`${newSelectedMenuItem} ${oldSelectedMenuItem}`);

  /******************
  May be removed, this is to fill out the dropdown with the name of the
  item clicked for testing.
  *******************/
  // console.log(selectedMenuValue);
  if (selectedMenuValue == 1) {
    jQuery(".selectorDrop").children().hide();
    jQuery(".selectorDrop").find(".segments").show();
  }
  if (selectedMenuValue == 4) {
    jQuery(".selectorDrop").children().hide();
    jQuery(".selectorDrop").find(".owners").show();
  }

  //jQuery(".selectorDrop").html(jQuery(this).attr("data-name"));
  /*******************
  This is setting up the vars to juggle which item is in an active state.
  *******************/
  newSelectedMenuItem = jQuery(this).attr("data-name");

  /******************
    initiates a reset on the menu because nothing is in an active state.
  ******************/
  if (newSelectedMenuItem === oldSelectedMenuItem) {
    selectedMenuValue = 0;
    //resetMenu(this);

    // jQuery('.selectorDrop').hide();
  }
  /******************
  initial click on a menu setting up the current item as the active state. this will change if other elements are selected.
  Happens in the next if/
  *******************/
  if (oldSelectedMenuItem === "") {
    oldSelectedMenuItem = newSelectedMenuItem;
    //colorize(this);
  }
  /***************************
    This is where it changes the active state to another selected menu element
  ***************************/
  if (newSelectedMenuItem != oldSelectedMenuItem) {
    jQuery('.selectorDrop').hide();
    oldSelectedMenuItem = newSelectedMenuItem;
    //colorize(this);
  }
  /*******************
  either reset the menu or set the color based on selection.
  *******************/
  if (selectedMenuValue === 0) {
    resetMenu(this);
  } else {
    colorize(this);
  }
  /*******************
  Show dropdown menu finally if all states checkout.
  *******************/
  //set the menu var to open
  jQuery('.selectorDrop').slideFadeToggle();
   menuOpen = 1;
event.stopPropagation();
  
  
});

//close the menu if you click anywhere else on the page and the menu is open.
jQuery("html").not('.dropNav').on("touchstart click", function() {
  if (menuOpen == 1) {
    
    jQuery('.selectorDrop').slideFadeToggle();
    menuOpen = 0;
  }
});
