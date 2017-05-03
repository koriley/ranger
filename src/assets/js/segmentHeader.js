

var url = window.location;

/*
* url is an object, important parts are:
* hostname: the host i.e. rangerboats
* href: the full path i.e. http://www.rangerboats.com/segement/page.html
* pathname: just the pathname i.e. /segment/page.html
*/

// look for .pages
 var hasPages = jQuery('.pages');
 
 if(hasPages.length > 0){
   jQuery(hasPages).children("li").removeClass("is-active").children("a").attr("aria-selected", "false");
   jQuery(hasPages).children("li").each(function(){
      var selected = jQuery(this).children("a").attr("href");
      
      if(selected === url.pathname){
        // console.log("winner;");
        jQuery(this).addClass("is-active").children("a").attr("aria-selected", "true");
      }
   });
 }