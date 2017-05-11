
  $(document).foundation();
   
  
   
  /************************
  resets the height of element "responsibleClass" to the height of "item".
  reason: Absolute position elements dont work well with responsiveness since they
  find themselves outside the layerflow. We want the parent element to have a fixed height
  and this will let the absolute position have an area to play in.

  tested with QUnit; test.html for results, test.js to see test

  @parm item => string; selector of the element you want to match the height of
  @parm responsibleClass => string; Selector of element you want to re set the height to mach the item.

  best use in jQuery(window).resize(function(){})
  **************************/
  function responsibleHeight(item, responsibleClass) {
    var newHeight = jQuery(item).height();
    jQuery(responsibleClass).height(newHeight);
    return newHeight;
  }
  
  
  function responsibleWidth(item, responsibleClass) {
    var newWidth = jQuery(item).width();
    jQuery(responsibleClass).width(newWidth);
    return newWidth;
  }

  /*************
  custom jQuery function to animate the sliding and unsliding of the menu dropdown. Can be used for other
  elements that need a smooth fade dropdown effect.
  ***************/
  (function(){
  jQuery.fn.slideFadeToggle = function (speed, easing, callback) {
    return this.animate({
      opacity: 'toggle',
      height: 'toggle'
    }, speed, easing, callback);
  }
}(jQuery));