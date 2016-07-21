function myFunction() {
	"use strict";
	var pic = document.getElementById("orange").style.backgroundImage;
	if (pic.src.match("orange.jpg")) {
		pic.src = "green.jpg";
	}
	else {
		pic.src = "orange.jpg";
	}
}

function init() {
	var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 39.8628, lng: 4.0273},
            zoom: 8
        });
}
