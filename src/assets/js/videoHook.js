/*
* Video requires foundations reveal (modal) plug in.
* Also, the reveal container must have the class vidPlayer.
*/

var player;
var fluidEl = jQuery(window);


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

  if (iframe.length == 1) {
    var YTDiv = createYTDiv(iframe);
    var aspect = YTDiv.height / YTDiv.width;
    
    var divContainer = "<div class='youtubeData' data-aspect=\"" + aspect + "\" data-width=\"" + YTDiv.width + "\" data-height=\"" + YTDiv.height + "\" data-src=\"" + YTDiv.src + "\" data-ytID=\"" + YTDiv.ytId + "\"></div>";
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
  var aspect = jQuery(this).children(".youtubeData").attr("data-aspect");
  jQuery(this).append("<div id='" + ytId + "_thePlayer'></div>");
  
  var newWidth = fluidEl.width();
  if(newWidth > 560){
    newWidth = 560;
  }
  var newHeight = newWidth * aspect;
  console.log("new width ="+newWidth+" old ="+width);
  console.log("new height ="+newHeight+" old ="+height);
  player = new YT.Player(ytId + '_thePlayer', {
    height: newHeight,
    width: newWidth,
    videoId: ytId,
    events: {
      'onReady': onPlayerReady
    }
  });
});

jQuery(document).on('closed.zf.reveal', '[data-reveal]', function() {
  jQuery(this).children("iframe").remove();

});

var onPlayerReady = function(event) {
  event.target.seekTo(0, false);
  event.target.playVideo();
};