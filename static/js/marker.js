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

var baseURL = "https://app.ticketmaster.com/discovery/v2/venues.json?apikey=";
var venue = "&latlong=45.5051064,-122.6750261&radius=50&locale=*";
var accessTM = API_Key_TM;

var url = baseURL + accessTM + venue;

// https://app.ticketmaster.com/discovery/v2/venues?apikey={accessTM}
// &latlong=45.5051064,-122.6750261&radius=25&locale=*

// Grab the data with d3
// function showvenue(json) {
//   for(var i=0; i<json.page.size; i++) {
//     $("#venue").append("<p>"+json._embedded.venue[i].name+"</p>");
//   }
//   console.log(json)
// }

d3.json(url, function(response) {
  
  // for(var j = 0; j < response.page.size; j++) {
        
  //   var number = response.page.number[1];
    
  //   // ("#venue").append("<p>"+response._embedded.venue[i].name+"</p>");
  //  console.log(number)
  //  console.log(re)
  // }})
  console.log(response)
  
  
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response._embedded.venues.length; i++) {

    // Set the data location property to a variable
    var location = response._embedded.venues[i].location;

    // Check for location property
    if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([location.latitude, location.longitude])
        .bindPopup("Address:"+ ""+ response._embedded.venues[i].name +" "+ 'Address:'+" " + response._embedded.venues[i].address));
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});
