

var map;
      
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
        center: new google.maps.LatLng(36.290919000, -92.601611000),
           mapTypeId: google.maps.MapTypeId.SATELLITE
        });

        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          parking: {
            icon: iconBase + 'parking_lot_maps.png'
          },
          library: {
            icon: iconBase + 'library_maps.png'
          },
          info: {
            icon: iconBase + 'info-i_maps.png'
          }
        };

        var features = [
          {
            position: new google.maps.LatLng(36.290919000, -92.601611000),
            type: 'info'
          }
        ];

        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            animation: google.maps.Animation.BOUNCE
            
          });
          marker.setMap(map);
        });
    