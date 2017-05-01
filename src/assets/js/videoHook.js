/*
* Video requires foundations reveal (modal) plug in.
* Also, the reveal container must have the class vidPlayer.
*/


var player;
function createYTDiv(iFrame) {
    var width = jQuery(iFrame).attr('width');
    var height = jQuery(iFrame).attr('height');
    var src = jQuery(iFrame).attr('src');
    var ytId = src.replace("https://www.youtube.com/embed/", "");
    var divObj = {
        width: width,
        height: height,
        src: src,
        ytId: ytId
    };
    return divObj;
}

jQuery('.vidPlayer').each(function() {
    //take apart the iframe if it exists.
    var iframe = jQuery(this).children('iframe');
    // console.log(iframe);
    if (iframe.length == 1) {
        var YTDiv = createYTDiv(iframe);
        var divContainer = "<div class='youtubeData' data-width=\"" + YTDiv.width + "\" data-height=\"" + YTDiv.height + "\" data-src=\"" + YTDiv.src + "\" data-ytID=\"" + YTDiv.ytId + "\"></div>";
        jQuery(this).append(divContainer);

        jQuery(iframe).remove();
        // console.log(divContainer);
    }
    if (iframe.length < 1) {
        console.log("not here");
    }
});

jQuery(document).on('open.zf.reveal', '[data-reveal]', function() {
    var width = jQuery(this).children(".youtubeData").attr("data-width");
    var height = jQuery(this).children(".youtubeData").attr("data-height");
    var src = jQuery(this).children(".youtubeData").attr("data-src");
    var ytId = jQuery(this).children(".youtubeData").attr("data-ytId");
    jQuery(this).append("<div id='" + ytId + "_thePlayer'></div>");
     player = new YT.Player(ytId + '_thePlayer', {
        height: height,
        width: width,
        videoId: ytId,
        events: {
            'onReady': onPlayerReady
        }
    });
});

jQuery(document).on('closed.zf.reveal','[data-reveal]', function(){
   jQuery(this).children("iframe").remove();
  
});

var onPlayerReady = function(event) {
    event.target.seekTo(0, false);
    event.target.playVideo();
};