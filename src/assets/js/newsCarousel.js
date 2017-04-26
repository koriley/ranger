// slider set up
var newsItems = document.getElementsByClassName("newsItem").length;
var newsLocation = 1;
var owl = jQuery('#newsCarousel');

// lets get the number of newsItems
jQuery('.newsSlider').attr("max", newsItems);

jQuery(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

owl.on("changed.owl.carousel", function(d) {
    var newsLocation = d.item.index - 5;
    //console.log(newsLocation);
    jQuery('.newsSlider').prop('value', newsLocation);
    jQuery('.newsSlider').attr('value', newsLocation);
});

jQuery('.next').click(function() {
    newsLocation++;
    if (newsLocation > newsItems) {
        newsLocation = 1;
    }
    jQuery('.newsSlider').prop('value', newsLocation);
    jQuery('.newsSlider').attr('value', newsLocation);
    owl.trigger('next.owl.carousel');
});

jQuery('.prev').click(function() {
    newsLocation--;
    if (newsLocation < 1) {
        newsLocation = newsItems;
    }
    jQuery('.newsSlider').prop('value', newsLocation);
    jQuery('.newsSlider').attr('value', newsLocation);
    owl.trigger('prev.owl.carousel');
});

var theSlider = document.getElementById('newsSlider');
if (theSlider) {
    theSlider.addEventListener("input", function() {
        //console.log(theSlider.value);
        if (theSlider.value > newsLocation) {
            jQuery('.next').trigger('click');
        }
        if (theSlider.value < newsLocation) {
            jQuery('.prev').trigger("click");
        }
    });
}
