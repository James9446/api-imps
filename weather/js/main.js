
function geoSuccess(position) {
  var latitude  = position.coords.latitude;
  var longitude = position.coords.longitude;
  console.log(longitude, + " " + latitude);
  return "lat=" + latitude + "&lon=" + longitude;
}

function getWeather() {
	var results = document.getElementById("weather-port").innerHTML = '';
	var geo = navigator.geolocation.getCurrentPosition(geoSuccess);;
	$.ajax({
		url: "https://fcc-weather-api.glitch.me/api/current?" + geo,
		dataType: "json",
		success: function(data) {
			results.innerHTML += "<h2>" + data.weather[0].description + "</h2>";
			// var results = document.getElementById("weather-port")

		// 	for (var i = 0; i <data.length; i++) {
		// 		results.innerHTML += "<h2>" + data.weather[0].description + "</h2>";
		// 		// if (data.items[i].volumeInfo.authors) {
		// 		// 	results.innerHTML += "<h2>" + "Author: " + data.items[i].volumeInfo.authors[0] + "</h2>";
		// 		// }
		// 		// results.innerHTML += "<h2>" + "Publisher: " + data.items[i].volumeInfo.publisher + "</h2>";
		// 		// results.innerHTML += "<h2>" + "Published Date: " + data.items[i].volumeInfo.publishedDate + "</h2>"
		// 		// results.innerHTML += "<p>" + "Description: " + data.items[i].volumeInfo.description + "</p>"
		// 	}
		},
		// type: "GET"
	})
}

// document.getElementById("searchBtn").addEventListener("click", bookSearch, false);
// document.getElementById('weather-port').addEventListener('click', showLocation, false);
// navigator.geolocation.getCurrentPosition(geoSuccess);
// event.addDomListener(window, "load", getWeather)
document.getElementById('weather-btn').addEventListener('click', getWeather, false);
