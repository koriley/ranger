jQuery('.modelTabsCheck li a').on('touchstart click', function(){
  var iAm = jQuery(this).attr('href');
  
  if(!iAm){
    return;
  }
  // console.log(iAm);
  if(iAm == "#overview"){
    jQuery('.floatingModelPriceBlock').show();
  }else{
      jQuery('.floatingModelPriceBlock').hide();
  }
});
