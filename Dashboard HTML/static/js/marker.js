

var url = "http://127.0.0.1:5000/venue";

d3.json(url).then(function(data) {

var eventMarkers = [];
var markers = []

function markerSize(events) {
    return events * 15;
  }
  

  for (var z = 0; z < data.length; z++) {
    if (data[z].lat > 0) {
    var lat = data[z].lat ;
    var long = data[z].long;
    var event = data[z].total;
    var arr = [lat,long];    
    var venue = data[z].name;
  
    // var address = response._embedded.venues[z].address.line1 + " "+ response._embedded.venues[z].city.name +" "+response._embedded.venues[z].postalCode;
    var list = "<dl><dt>Venue Name:" + venue +"</dt>"+"<dt>address:"+"address"+"</dt>"+"<dt>upcoming events!:"+event+"</dt>"+ "</dl>";
  // Setting the marker radius for the state by passing population into the markerSize function
    
    eventMarkers.push(
    L.circle(arr, {
      stroke: false,
      fillOpacity: 0.75,
      color: "black",
      fillColor: "purple",
      radius: markerSize(event)
    }).bindPopup(list));
  
  }
 
}
console.log(eventMarkers)
  createMap(L.layerGroup(eventMarkers))
  });



function createMap(event_pop) {

// Define variables for our base layers
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

var piratemap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.pirates",
  accessToken: API_KEY
});

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap,
  "Pirate Map": piratemap
};

// Create an overlay object
var overlayMaps = {
  // "City Population": cities,
  "Event population": event_pop,
  
};

// Define a map object
var myMap = L.map("map", {
  center: [45.512, -122.658],
  zoom: 12,
  layers: [streetmap, event_pop]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false, autoZIndex: true
}).addTo(myMap)};
