jQuery('label').each(function(){
  var spanText = jQuery(this).html();
  var parent = jQuery(this).parent();
  var inputSibling = jQuery(this).siblings("input").attr("type");
  if(inputSibling != 'checkbox'){
  jQuery(this).hide();
  jQuery(parent).append("<span>"+spanText+"</span>");
}
});


// jQuery('input').each(function(){
//   var sib = jQuery(this).siblings("span");
//   jQuery(sib).css({
//     'top':"36px",
//     
//     
//   })
// });

jQuery('input, span').on('touchstart click', function(){
  var whatElement = jQuery(this);
  // console.log(whatElement.context.localName);
  if(whatElement.context.localName === 'span'){
    jQuery(this).siblings('input').focus();
    jQuery(this).animate({
        top:'15px'
    },300);
  }
  if(whatElement.context.localName ==='input'){
    var sib = jQuery(this).siblings("span");
    jQuery(sib).animate({
        top:'15px'
    },300);
  }
  
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