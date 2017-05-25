// slider set up
var newsItems = document.getElementsByClassName("newsItem").length;
var newsLocation = 1;
var owl = jQuery('#newsCarousel');
var theSlider = document.getElementById('newsSlider');

jQuery('.newsSlider').attr("max", newsItems);

jQuery(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
});

//This runs after the slider changes positions
owl.on("changed.owl.carousel", function(d) {
  
  var newsLocation = d.item.index - 5;
  if ((newsLocation >= newsItems) || (newsLocation <= 0)) {
    newsLocation = 1;
  }

  jQuery('.newsSlider').prop('value', newsLocation);
  //jQuery('.newsSlider').attr('value', newsLocation);

});

jQuery('.next').click(function() {
  newsLocation++;
  if (newsLocation > newsItems) {
    newsLocation = 1;
  }
  //jQuery('.newsSlider').prop('value', newsLocation);
  jQuery('.newsSlider').attr('value', newsLocation);
  owl.trigger('next.owl.carousel');

});

jQuery('.prev').click(function() {
  newsLocation--;
  if (newsLocation < 1) {
    newsLocation = newsItems;
  }
  //  jQuery('.newsSlider').prop('value', newsLocation);
  jQuery('.newsSlider').attr('value', newsLocation);
  owl.trigger('prev.owl.carousel');
});

if (theSlider) {
  theSlider.addEventListener("input", function(e) {
    e.stopPropagation();
    e.preventDefault();
  
  newsLocation = theSlider.value;
  owl.trigger('to.owl.carousel',newsLocation);
  
  });
}
