var baseLayer = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });
  

  var url_event = "http://127.0.0.1:5000/event"

  d3.json(url_event).then(function(genre) { 
  

    //["NONE", "ARREST, BOOKED", "JUVENILE BOOKED", "EXCEPTIONAL CLEARANCE", "UNFOUNDED", "CLEARED-CONTACT JUVENILE FOR MORE INFO"]
  
    var resoArts = [];
    var resoMusic = [];
    var resoSports = [];
    var resoMisc = [];
  
    for (var i = 0; i < genre.length; i++) {
      var lat = genre[i].place_lat;
    var long = genre[i].place_long;
  
      switch (genre[i].seg_name) {
          case "Arts & Theatre":
            resoArts.push([lat, long]);
            break;
          case "Music":
            resoMusic.push([lat, long]);
            break;
          case "Sports":
            resoSports.push([lat, long]);
            break;
            case "Miscellaneous":
            resoMisc.push([lat, long]);
            break;
          default:
            break;
      }
    }
  
    var heatArts = L.heatLayer(resoArts, {
      radius: 20,
      blur: 35
    });
  
    var heatMusic = L.heatLayer(resoMusic, {
      radius: 20,
      blur: 35
    });
  
    var heatSports = L.heatLayer(resoSports, {
      radius: 20,
      blur: 35
    });
  
    var heatMisc = L.heatLayer(resoMisc, {
      radius: 20,
      blur: 35
    });
  
  
    // Create a baseMaps object
    var baseMaps = {
      "Street Map": baseLayer
    };
    
    // Create an overlay object
    var overlayMaps = {
      "Arts & Theatre": heatArts,
      "Music": heatMusic,
      "Sports": heatSports,
      "Miscellaneous": heatMisc
    };
  
    var map = L.map("heat_map", {
      center: [45.512, -122.658],
  zoom: 13,
      layers: [baseLayer, heatMusic]
    });
  
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);
  
  });
  