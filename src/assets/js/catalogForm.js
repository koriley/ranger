jQuery('input').each(function(){
  var sib = jQuery(this).siblings("span");
  jQuery(sib).css({
    'top':"36px"
  })
});

jQuery('input').on('touhstart click', function(){
  var sib = jQuery(this).siblings("span");
  jQuery(sib).animate({
      top:'15px'
  },300);
});



jQuery('input').on("blur", function(){
  var val = jQuery(this).val()
  var sib = jQuery(this).siblings("span");
  // console.log(jQuery(sib).html());
  if(!val){
    jQuery(sib).animate({
      'top':"36px"
    },300)
  }
});