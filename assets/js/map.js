function initMap() {

    
    var lac = {lat: 46.508955, lng: 6.616422};
    var lac_offset = {lat: 46.512, lng: 6.61422};
    google.maps.event.addDomListener(window, 'resize', function() {
        google.maps.event.trigger(map, "resize");
        map.setCenter(lac);
    });

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: lac_offset,
      draggable: false,
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      streetViewControl: false,
      fullscreenControl: false,
      styles: [
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "stylers": [
            {
              "lightness": -100
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
            {
              "color": "#4F6BA4"
            }
          ]
        }
      ]
    });

    var salmon = {
      url: "./images/salmonsvg.svg", // url
      scaledSize: new google.maps.Size(70, 70), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(35, 70) // anchor
    };

    var marker = new google.maps.Marker({
        position: lac,
        map: map
    });

}

