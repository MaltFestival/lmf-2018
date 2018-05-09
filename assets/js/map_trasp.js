function initMap() {

    var lac = {lat: 46.504881, lng: 6.627434};
    var lac_offset = {lat: 46.5085, lng: 6.627434};
    google.maps.event.addDomListener(window, 'resize', function() {
        google.maps.event.trigger(map, "resize");
        map.setCenter(lac);
    });

    // Create an array of styles.
    var mapStyles = [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
            "featureType": 'landscape',
            "elementType": "geometry.fill",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
              "featureType": 'transit',
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
          {
              "featureType": 'water',
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
          {
                    featureType: 'landscape.man_made',
                    elementType: 'geometry.fill',
                    stylers: [
                        {
                            visibility: 'on'
                        }
                    ]
                },
        {
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4c4c4c"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            }
          ]
        },
        {
          "featureType": "road",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8a8a8a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#373737"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e4e4e"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        }
      ];
    
    
    
    // [
    //     { //hide all fills
    //         elementType: 'labels',
    //         stylers: [
    //             { visibility: 'off' }
    //         ]
    //     },
    //     {
    //         elementType: 'geometry.fill',
    //         stylers: [
    //             { visibility: 'off' }
    //         ]
    //     },  {
    //         "elementType": "labels",
    //         "stylers": [
    //             {
    //                 "visibility": "off",
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "administrative",
    //         "elementType": "geometry",
    //         "stylers": [
    //             {
    //                 "visibility": "off"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "administrative.locality",
    //         "elementType": "labels",
    //         "stylers": [
    //             {
    //                 "visibility": "on"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "administrative.land_parcel",
    //         "stylers": [
    //             {
    //                 "visibility": "off"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "administrative.neighborhood",
    //         "elementType": "labels",
    //         "stylers": [
    //             {
    //                 "visibility": "off"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "poi",
    //         "stylers": [
    //             {
    //                 "visibility": "off"
    //             }
    //         ]
    //     },{
    //         "featureType": "poi.park",
    //         "stylers": [
    //             {
    //                 "lightness": -100
    //             },
    //             {
    //                 "visibility": "off"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "road",
    //         "elementType": "labels.icon",
    //         "stylers": [
    //             {
    //                 "visibility": "off"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "road.arterial",
    //         "elementType": "labels",
    //         "stylers": [
    //             {
    //                 "visibility": "off"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "road.highway",
    //         "elementType": "labels",
    //         "stylers": [
    //             {
    //                 "visibility": "off"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "road",
    //         "stylers": [
    //             {
    //                 "visibility": "off"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "road.local",
    //         "stylers": [
    //             {
    //                 "visibility": "on"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "transit",
    //         "stylers": [
    //             {
    //                 "visibility": "off"
    //             }
    //         ]
    //     },
    //     {
    //         "featureType": "road",
    //         "elementType": "labels.icon",
    //         "stylers": [
    //             {
    //                 "visibility": "off"
    //             }
    //         ]
    //     },
    //     {
    //         featureType: 'landscape.man_made',
    //         elementType: 'geometry.fill',
    //         stylers: [
    //             {
    //                 visibility: 'on'
    //             }
    //         ]
    //     },
    //     {
    //         elementType: 'geometry.fill',
    //         stylers: [
    //         {
    //             // color: "#5b5b5b"
    //             color: "#6c6c6c"
    //         }
    //     ]
    //     }
    // ];





    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var mapOptions = {
        zoom: 15,
        center: lac_offset,
        draggable: false,
        //zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        streetViewControl: false,
        fullscreenControl: false,
        styles: mapStyles,
        // The following line is essential for making the map background transparent:
        backgroundColor: 'hsla(0, 0%, 0%, 0)',
    };

    //create map object
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: lac,
        map: map
    });

}
