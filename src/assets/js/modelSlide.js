var owlModel = jQuery('#modelCarousel');
jQuery("#modelCarousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    singleItem: true,
    autoplay:false,
    navigation: true,
    autoplayTimeout:5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

jQuery(document).ready(function(){
 // owlHero.trigger('owlHero.play', [5000]);
});

jQuery('.modelNext').click(function() {
    // console.log("next");
    owlModel.trigger('stop.owl.autoplay');
    owlModel.trigger('next.owl.carousel');
});

jQuery('.modelPrev').click(function() {
  // console.log("prev");
  owlModel.trigger('stop.owl.autoplay');
  owlModel.trigger('prev.owl.carousel');
});