var map;
function rangerMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(36.290919000, -92.601611000),
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
  createMap(map);
}

function createMap(map){
  
  var image = {
  
  
      url: '/assets/img/map-marker.png',
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(30, 30)
    
  };

  
console.log(image);
  
         var marker = new google.maps.Marker({
           position: map.center,
           icon: image,
           map: map
         });
    

}
var isMap = jQuery('#map');
if (isMap.length > 0) {
  rangerMap();
}