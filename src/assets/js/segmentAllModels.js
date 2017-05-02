jQuery('.stickyMenu li').click(function() {
    jQuery('.scrollActive').each(function() {
        jQuery(this).removeClass('scrollActive');
    });
    jQuery(this).addClass('scrollActive');
});

var lastId,
    topMenu = jQuery("#magellanMenu"),
    topDistance = jQuery(".segmentHero"), 
    topMenuHeight = topDistance.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
        var item = jQuery(jQuery(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

// Bind to scroll
jQuery(window).scroll(function() {
    // Get container scroll position
    var fromTop = jQuery(this).scrollTop();

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
        if (jQuery(this).offset().top < fromTop) 
            return this;
        }
    );
    
    // Get the id of the current element
    cur = cur[cur.length - 1];
  
    var id = cur && cur.length
        ? cur[0].id
        : "";
    if(id === ''){
      topMenu.children("li").first().addClass("scrollActive");
    }
    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        
        menuItems.parent().removeClass("scrollActive").end().filter("[href='#" + id + "']").parent().addClass("scrollActive");
    }
  
    
});