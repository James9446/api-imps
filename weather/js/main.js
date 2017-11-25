
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

// ---=== Amy C  code pen JS ===--- // 

// https://www.wunderground.com/weather/api/d/docs?d=resources/code-samples
$(function getWeather() {
      var url = 'https://api.wunderground.com/api/35d9c39ec27c86b6/geolookup/conditions/q/autoip.json';
      $.getJSON(url, function(data) {
        $('#city').append(data.location.city + ", " + data.location.state);
        $('#temp').append(data.current_observation.feelslike_f + '&deg;F');
        $('#icon').attr('src', data.current_observation.icon_url);
        $('#condition').append(data.current_observation.weather);
        /* photos based on conditions
        var $body = $('body');
        if(data.current_observation.weather === "Snow") {
           $body.removeClass().addClass('snow');
        }else if(data.current_observation.weather === "Rain") {
           $body.removeClass().addClass('rain');
        }else if(data.current_observation.weather === "Clear"){
           $body.removeClass().addClass('clear');
        }else {
           $body.removeClass();
        }*/
        
        // jQuery temp toggle
        $("#c").click(function(){
          $("#f").removeClass("ui-state-active");
          $(this).addClass("ui-state-active");
          $("#temp").html(data.current_observation.feelslike_c + '&deg;C');
        });
        $("#f").click(function(){
          $("#temp").html(data.current_observation.feelslike_f + "&deg;F");
        });
    });
});

// use radio button without icons (https://jqueryui.com/checkboxradio/#no-icons) 
$(function() {
    $("input").checkboxradio({icon: false});
});


// ---=== free code camp JS ===--- //
var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = 'C';
var currentTempInCelsius;

$( document ).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  $("#tempunit").click(function () {
    var currentTempUnit = $("#tempunit").text();
    var newTempUnit = currentTempUnit == "C" ? "F" : "C";
    $("#tempunit").text(newTempUnit);
    if (newTempUnit == "F") {
      var fahTemp = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
      $("#temp").text(fahTemp + " " + String.fromCharCode(176));
    } else {
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
    }
  });
  
})

function getWeather(lat, lon) {
  var urlString = api + lat + "&" + lon;
  $.ajax({
    url: urlString, success: function (result) {
      $("#city").text(result.name + ", ");
      $("#country").text(result.sys.country);
      currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
      $("#tempunit").text(tempUnit);
      $("#desc").text(result.weather[0].main);
      IconGen(result.weather[0].main);
    }
  });
}

function IconGen(desc) {
  var desc = desc.toLowerCase()
  switch (desc) {
    case 'drizzle':
      addIcon(desc)
      break;
    case 'clouds':
      addIcon(desc)
      break;
    case 'rain':
      addIcon(desc)
      break;
    case 'snow':
      addIcon(desc)
      break;
    case 'clear':
      addIcon(desc)
      break;
    case 'thunderstom':
      addIcon(desc)
      break;
    default:
      $('div.clouds').removeClass('hide');
  }
}

function addIcon(desc) {
  $('div.' + desc).removeClass('hide');
}

