function initMap() {

    var lac = {lat: 46.508955, lng: 6.616422};
    var lac_offset = {lat: 46.512, lng: 6.61422};
    google.maps.event.addDomListener(window, 'resize', function() {
        google.maps.event.trigger(map, "resize");
        map.setCenter(lac);
    });

    // Create an array of styles.
    var mapStyles = [
        { //hide all fills
            elementType: 'labels',
            stylers: [
                { visibility: 'off' }
            ]
        },
        {
            elementType: 'geometry.fill',
            stylers: [
                { visibility: 'off' }
            ]
        },  {
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
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
            "featureType": "administrative.land_parcel",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
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
            "featureType": "road",
            "stylers": [
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
            "featureType": "transit",
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
            elementType: 'geometry.fill',
            stylers: [
            {
                color: "#8c9292"
            }
        ]
        }
    ];





    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var mapOptions = {
        zoom: 14,
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

};
