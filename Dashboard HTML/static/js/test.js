var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var layers = {
  venueMarkers: new L.LayerGroup(),
  eventMarkers: new L.LayerGroup(),
};

var baseMaps = {
  "Light Map": lightmap
};

// var upcoming_events = L.layerGroup(eventMarkers)
// Create an overlayMaps object to hold the bikeStations layer
var overlayMaps = {
  "Venue Details": layers.venueMarkers,
  "Number of Events": layers.eventMarkers,
};



var map = L.map("map", {
  center: [45.512, -122.658],
  zoom: 12,
  layers: [lightmap, layers.venueMarkers,
    layers.eventMarkers,]
});
// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlayMaps).addTo(map);

// Create a legend to display information about our map
var info = L.control({
  position: "bottomright"
});

// When the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};
// Add the info legend to the map
info.addTo(map);