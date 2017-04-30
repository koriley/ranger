jQuery(".buildTabControls .tabs-title").on("touchstart click", function(){
  console.log(jQuery(this));
  jQuery(this).siblings().each(function(){
    jQuery(this).children(".bottomBorder").children().remove();
  });
  jQuery(this).prevAll().children(".bottomBorder").append("<div class='activePast'></div>");
  jQuery(this).children(".bottomBorder").append("<div class='activeBorder'></div>");
});
