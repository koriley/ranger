var model = jQuery(".modelTabsCheck");

if (model.length > 0) {
  // console.log(url.pathname);
  if (url.pathname === "/model/overview.html") {
    jQuery('.floatingModelPriceBlock').show();
  } else {
    jQuery('.floatingModelPriceBlock').hide();
  }
}