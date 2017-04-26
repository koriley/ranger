var owlHero = jQuery('#owl-example');
jQuery("#owl-example").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    singleItem: true,
    autoplay:true,
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

jQuery('.heroNext').click(function() {
    // console.log("next");
    owlHero.trigger('stop.owl.autoplay');
    owlHero.trigger('next.owl.carousel');
});

jQuery('.heroPrev').click(function() {
  console.log("prev");
  owlHero.trigger('stop.owl.autoplay');
  owlHero.trigger('prev.owl.carousel');
});