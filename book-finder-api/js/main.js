function bookSearch() {
	var search = document.getElementById("search").value
	document.getElementById("results").innerHTML = '';
	console.log(search);
	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: "json",
		success: function(data) {
			var results = document.getElementById("results")
			for (var i = 0; i <data.items.length; i++) {
				results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>";
				if (data.items[i].volumeInfo.authors) {
					results.innerHTML += "<h2>" + "Author: " + data.items[i].volumeInfo.authors[0] + "</h2>";
				}
				results.innerHTML += "<h2>" + "Publisher: " + data.items[i].volumeInfo.publisher + "</h2>";
				results.innerHTML += "<h2>" + "Published Date: " + data.items[i].volumeInfo.publishedDate + "</h2>"
				results.innerHTML += "<p>" + "Description: " + data.items[i].volumeInfo.description + "</p>"
			}
		},
		type: "GET"
	})
}

document.getElementById("searchBtn").addEventListener("click", bookSearch, false);