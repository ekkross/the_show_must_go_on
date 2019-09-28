var myMap = L.map("map", {
  center: [45.512, -122.658],
  zoom: 12
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var baseURL = "https://app.ticketmaster.com/discovery/v2/venues?apikey=";
var venue = "&latlong=45.5051064,-122.6750261&radius=25&locale=*";
var accessTM = API_Key_TM;

var url = baseURL + accessTM + venue;

// https://app.ticketmaster.com/discovery/v2/venues?apikey={accessTM}
// &latlong=45.5051064,-122.6750261&radius=25&locale=*

// Grab the data with d3
d3.json(url, function(response) {

  console.log(response);

  // // Create a new marker cluster group
  // var markers = L.markerClusterGroup();

  // // Loop through data
  // for (var i = 0; i < response.length; i++) {

  //   // Set the data location property to a variable
  //   var location = response[i].location;

  //   // Check for location property
  //   if (location) {

  //     // Add a new marker to the cluster group and bind a pop-up
  //     markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
  //       .bindPopup("Address:"+ ""+ response[i].address+""+ 'situation:'+"" + response[i].primary_situation));
  //   }

  // }

  // // Add our marker cluster layer to the map
  // myMap.addLayer(markers);

});
