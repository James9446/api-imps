function initialize(lat, lng) {
	var mapProp = {
		center: new google.maps.LatLng(lat, lng),
		zoom: 5,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
	}
	var map = new google.maps.Map(document.getElementById("google-map"), mapProp)
}

google.maps.event.addDomListener(window, "load", initialize)



function showLocation() {
	var lat = document.getElementById("lat").value;
	var lng = document.getElementById("lng").value;
	initialize(lat, lng) 
	// google.maps.event.addDomListener(window, "load", initialize)
	console.log(lat, lng);
}

document.getElementById('map-btn').addEventListener('click', showLocation, false);

// 37.788890, -122.398104