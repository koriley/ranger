jQuery(".textLayer").mouseenter(function() {
    jQuery(this).siblings(".main").addClass("allVisible");
});
jQuery(".textLayer").mouseleave(function() {
    jQuery(this).siblings(".main").removeClass('allVisible');
});

var floatUp = jQuery('.segmentSelector').attr('id');

if(floatUp === "noFloat"){
  jQuery('.textLayer').css({'top':'100px'});
  jQuery('.main').css(({'margin-top':'25px'}));
}