var baseURL = "https://app.ticketmaster.com/discovery/v2/venues.json?apikey=";
var local = "&latlong=45.5051064,-122.6750261&radius=50&locale=*";
var accessTM = API_Key_TM;

var url = baseURL + accessTM + local;

d3.json(url, createMarkers)

function createMarkers(response){    

var eventMarkers = [];

function markerSize(events) {
    return events * 5;
  }

  for (var z = 0; z < response._embedded.venues.length; z++) {
    var lat = response._embedded.venues[z].location.latitude ;
    var long = response._embedded.venues[z].location.longitude;
    var event = response._embedded.venues[z].upcomingEvents._total;
    var arr = [lat,long];
    
    var venue = response._embedded.venues[z].name;
    var address = response._embedded.venues[z].address.line1 + " "+ response._embedded.venues[z].city.name +" "+response._embedded.venues[z].postalCode;
    var list = "<dl><dt>Venue Name:" + venue +"</dt>"+"<dt>address:"+address+"</dt>"+"<dt>upcoming events!:"+event+"</dt>"+ "</dl>";
  // Setting the marker radius for the state by passing population into the markerSize function
  eventMarkers.push(
    L.circle(arr, {
      stroke: true,
      fillOpacity: 0.75,
      color: "black",
      fillColor: "purple",
      radius: markerSize(event)
    }).bindPopup(list));
  }
  createMap(L.layerGroup(eventMarkers));

};
  

 
  
  

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
