var baseLayer = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });
  

  var url_event = "http://127.0.0.1:5000/event"

  d3.json(url_event).then(function(genre) { 
  

    //["NONE", "ARREST, BOOKED", "JUVENILE BOOKED", "EXCEPTIONAL CLEARANCE", "UNFOUNDED", "CLEARED-CONTACT JUVENILE FOR MORE INFO"]
  
    var aalt = [];
    var acont = [];
    var alt = [];
    var altcount = [];
    var altrock = [];
    var bigband = [];
    var blues = [];
    var childrens = [];
    var circus = [];
    var classical = [];
    var college = [];
    var comedy = [];
    var contrb = [];
    var country = [];
    var countryfolk = [];
    var dance = [];
    var electronic = [];
    var deathmetal = [];
    var deepsoul = [];
    var doommetal = [];
    var electrojazz = [];
    var electropop = [];
    var freefunk = [];
    var frenchrap = [];
    var fusion = [];
    var garagerock = [];
    var gospel = [];
    var hardrock = [];
    var hiphop = [];
    var hobby = [];
    var holiday = [];
    var iceshows = [];
    var inmetal = [];
    var instrumental = [];
    var jazz = [];
    var jazzblues = [];
    var jazzfunk = [];
    var latin = [];
    var latinrock = [];
    var metal = [];
    var minorleague = [];
    var misc = [];
    var motorsports = [];
    var musical = [];
    var nba = [];
    var neoelectro = [];
    var neopsych= [];
    var neosoul = [];
    var numetal = [];
    var opera = [];
    var other = [];
    var peru = [];
    var pop = [];
    var poprock = [];
    var postpunk = [];
    var progrock = [];
    var psychobilly = [];
    var punk = [];
    var rb = [];
    var reggae = [];
    var rock = [];
    var rnr = [];
    var rockabilly = [];
    var soul = [];
    var southrock = [];
    var southsoul = [];
    var surf = [];
    var urban = [];
    var witchstep = [];
    var world = [];
    var wrestling = [];

  
    for (var i = 0; i < genre.length; i++) {
      var lat = genre[i].place_lat;
    var long = genre[i].place_long;
  
      switch (genre[i].subg_name) {
          case "Adult Alternative":
            aalt.push([lat, long]);
            break;
          case "Adult Contemporary":
            acont.push([lat, long]);
            break;
          case "Alternative":
            alt.push([lat, long]);
            break;
          case "Alternative Country":
            altcount.push([lat, long]);
            break;
          case "Alternative Rock":
            altrock.push([lat, long]);
            break;
          case "Big Band":
            bigband.push([lat, long]);
            break;
          case "Blues":
            blues.push([lat, long]);
            break;
          case "Children's Theatre":
            childrens.push([lat, long]);
            break;
          case "Circus":
            circus.push([lat, long]);
            break;
          case "Classical/Vocal":
            classical.push([lat, long]);
            break;
          case "College":
            college.push([lat, long]);
            break;
          case "Comedy":
            comedy.push([lat, long]);
            break; 
          case "Contemporary R&B":
            contrb.push([lat, long]);
            break; 
          case "Country":
            country.push([lat, long]);
            break; 
          case "Country Folk":
            countryfolk.push([lat, long]);
            break; 
          case "Dance":
            dance.push([lat, long]);
            break; 
          case "Dance/Electronic":
            electronic.push([lat, long]);
            break; 
          case "Death Metal/Black Metal":
            deathmetal.push([lat, long]);
            break; 
          case "Deep Soul":
            deepsoul.push([lat, long]);
            break; 
          case "Doom Metal":
            doommetal.push([lat, long]);
            break; 
          case "Electro-Jazz":
            electrojazz.push([lat, long]);
            break; 
          case "Electronic Pop":
            electropop.push([lat, long]);
            break; 
          case "Free Funk":
            freefunk.push([lat, long]);
           break;
           case "French Rap":
            frenchrap.push([lat, long]);
           break;
           case "Fusion":
            fusion.push([lat, long]);
           break;
           case "Garage Rock":
            garagerock.push([lat, long]);
           break;
           case "Gospel":
            gospel.push([lat, long]);
           break;
           case "Hard Rock":
            hardrock.push([lat, long]);
           break;
           case "Hip-Hop/Rap":
            hiphop.push([lat, long]);
           break;
           case "Hobby/Special Interest Expos":
            hobby.push([lat, long]);
           break;
           case "Holiday":
            holiday.push([lat, long]);
           break;
           case "Ice Shows":
            iceshows.push([lat, long]);
           break;
           case "Industrial Metal":
            inmetal.push([lat, long]);
           break;
           case "Instrumental Rock":
            instrumental.push([lat, long]);
           break;
           case "Jazz":
            jazz.push([lat, long]);
           break;
           case "Jazz Blues":
            jazzblues.push([lat, long]);
           break;
           case "Jazz Funk":
            jazzfunk.push([lat, long]);
           break;
           case "Latin":
            latin.push([lat, long]);
           break;
           case "Latin Rock":
            latinrock.push([lat, long]);
           break;
           case "Metal":
            metal.push([lat, long]);
           break;
           case "Minor League":
           minorleague.push([lat, long]);
           break;
            case "Miscellaneous":
            misc.push([lat, long]);
            break;
            case "Motorsports/Racing":
            motorsports.push([lat, long]);
            break;
            case "Musical":
            musical.push([lat, long]);
            break;
            case "NBA":
            nba.push([lat, long]);
            break;
            case "Neo-Electro":
            neoelectro.push([lat, long]);
            break;
            case "Neo-Psychedelia":
            neopsych.push([lat, long]);
            break;
            case "Neo-Soul":
            neosoul.push([lat, long]);
            break;
            case "Nu-Metal":
            numetal.push([lat, long]);
            break;
            case "Opera":
            opera.push([lat, long]);
            break;
            case "Other":
            other.push([lat, long]);
            break;
            case "Peru":
            peru.push([lat, long]);
            break;
            case "Pop":
            pop.push([lat, long]);
            break;
            case "Pop Rock":
            poprock.push([lat, long]);
            break;
            case "Post-Punk":
            postpunk.push([lat, long]);
            break;
            case "Progressive Rock":
            progrock.push([lat, long]);
            break;
            case "Psychobilly":
            psychobilly.push([lat, long]);
            break;
            case "Punk":
            punk.push([lat, long]);
            break;
            case "R&B":
            rb.push([lat, long]);
            break;
            case "Reggae":
            reggae.push([lat, long]);
            break;
            case "Rock":
            rock.push([lat, long]);
            break;
            case "Rock & Roll":
            rnr.push([lat, long]);
            break;
            case "Rockabilly":
            rockabilly.push([lat, long]);
            break;
            case "Soul":
            soul.push([lat, long]);
            break;
            case "Southern Rock":
            southrock.push([lat, long]);
            break;
            case "Southern Soul":
            southsoul.push([lat, long]);
            break;
            case "Surf":
            surf.push([lat, long]);
            break;
            case "Urban":
            urban.push([lat, long]);
            break;
            case "Witchstep":
            witchstep.push([lat, long]);
            break;
            case "World":
            world.push([lat, long]);
            break;
            case "Wrestling":
            wrestling.push([lat, long]);
            break;
          default:
            break;
      }
    }
    var heataalt = L.heatLayer(aalt, {
      radius: 50,
      blur: 35
    });
  
    var heatacont = L.heatLayer(acont, {
      radius: 50,
      blur: 35
    });
  
    var heatalt = L.heatLayer(alt, {
      radius: 50,
      blur: 35
    });
  
    var heataltcount = L.heatLayer(altcount, {
      radius: 50,
      blur: 35
    });

    var heataltrock = L.heatLayer(altrock, {
      radius: 50,
      blur: 35
    });

    var heatbigband = L.heatLayer(bigband, {
      radius: 50,
      blur: 35
    });

    var heatblues = L.heatLayer(blues, {
      radius: 50,
      blur: 35
    });

    var heatchildrens = L.heatLayer(childrens, {
      radius: 50,
      blur: 35
    });


    var heatcircus = L.heatLayer(circus, {
      radius: 50,
      blur: 35
    });


    var heatclassical = L.heatLayer(classical, {
      radius: 50,
      blur: 35
    });

    var heatcollege = L.heatLayer(college, {
      radius: 50,
      blur: 35
    });

    var heatcomedy = L.heatLayer(comedy, {
      radius: 50,
      blur: 35
    });

    var heatcontrb = L.heatLayer(contrb, {
      radius: 50,
      blur: 35
    });

    var heatcountry = L.heatLayer(country, {
      radius: 50,
      blur: 35
    });

    var heatcountryfolk = L.heatLayer(countryfolk, {
      radius: 50,
      blur: 35
    });

    var heatdance = L.heatLayer(dance, {
      radius: 50,
      blur: 35
    });

    var heatelectronic = L.heatLayer(electronic, {
      radius: 50,
      blur: 35
    });

    var heatdeathmetal = L.heatLayer(deathmetal, {
      radius: 50,
      blur: 35
    });

    var heatdeepsoul = L.heatLayer(deepsoul, {
      radius: 50,
      blur: 35
    });

    var heatdoommetal = L.heatLayer(doommetal, {
      radius: 50,
      blur: 35
    });

    var heatelectrojazz = L.heatLayer(electrojazz, {
      radius: 50,
      blur: 35
    });

    var heatelectropop = L.heatLayer(electropop, {
      radius: 50,
      blur: 35
    });

    var heatfreefunk = L.heatLayer(freefunk, {
      radius: 50,
      blur: 35
    });

    var heatfrenchrap = L.heatLayer(frenchrap, {
      radius: 50,
      blur: 35
    });

    var heatfusion = L.heatLayer(fusion, {
      radius: 50,
      blur: 35
    });

    var heatgaragerock = L.heatLayer(garagerock, {
      radius: 50,
      blur: 35
    });

    var heatgospel = L.heatLayer(gospel, {
      radius: 50,
      blur: 35
    });

    var heathardrock = L.heatLayer(hardrock, {
      radius: 50,
      blur: 35
    });

    var heathiphop = L.heatLayer(hiphop, {
      radius: 50,
      blur: 35
    });

    var heathobby = L.heatLayer(hobby, {
      radius: 50,
      blur: 35
    });

    var heatholiday = L.heatLayer(holiday, {
      radius: 50,
      blur: 35
    });
    
    var heaticeshows = L.heatLayer(iceshows, {
      radius: 50,
      blur: 35
    });

    var heatinmetal = L.heatLayer(inmetal, {
      radius: 50,
      blur: 35
    });

    var heatinstrumental = L.heatLayer(instrumental, {
      radius: 50,
      blur: 35
    });


    var heatjazz = L.heatLayer(jazz, {
      radius: 50,
      blur: 35
    });

    var heatjazzblues = L.heatLayer(jazzblues, {
      radius: 50,
      blur: 35
    });

    var heatjazzfunk = L.heatLayer(jazzfunk, {
      radius: 50,
      blur: 35
    });

    var heatlatin = L.heatLayer(latin, {
      radius: 50,
      blur: 35
    });

    var heatlatinrock = L.heatLayer(latinrock, {
      radius: 50,
      blur: 35
    });

    var heatmetal = L.heatLayer(metal, {
      radius: 50,
      blur: 35
    });

    var heatminorleague = L.heatLayer(minorleague, {
      radius: 50,
      blur: 35
    });

    var heatmisc = L.heatLayer(misc, {
      radius: 50,
      blur: 35
    });

    var heatmotorsports = L.heatLayer(motorsports, {
      radius: 50,
      blur: 35
    });

    var heatmusical = L.heatLayer(musical, {
      radius: 50,
      blur: 35
    });

    var heatnba = L.heatLayer(nba, {
      radius: 50,
      blur: 35
    });

    var heatneoelectro = L.heatLayer(neoelectro, {
      radius: 50,
      blur: 35
    });

    var heatneopsych = L.heatLayer(neopsych, {
      radius: 50,
      blur: 35
    });

    var heatneosoul = L.heatLayer(neosoul, {
      radius: 50,
      blur: 35
    });

    var heatnumetal = L.heatLayer(numetal, {
      radius: 50,
      blur: 35
    });

    var heatopera = L.heatLayer(opera, {
      radius: 50,
      blur: 35
    });

    var heatother = L.heatLayer(other, {
      radius: 50,
      blur: 35
    });

    var heatperu = L.heatLayer(peru, {
      radius: 50,
      blur: 35
    });

    var heatpop = L.heatLayer(pop, {
      radius: 50,
      blur: 35
    });

    var heatpoprock = L.heatLayer(poprock, {
      radius: 50,
      blur: 35
    });

    var heatpostpunk = L.heatLayer(postpunk, {
      radius: 50,
      blur: 35
    });

    var heatprogrock = L.heatLayer(progrock, {
      radius: 50,
      blur: 35
    });

    var heatpsychobilly = L.heatLayer(psychobilly, {
      radius: 50,
      blur: 35
    });

    var heatpunk = L.heatLayer(punk, {
      radius: 50,
      blur: 35
    });

    var heatrb = L.heatLayer(rb, {
      radius: 50,
      blur: 35
    });

    var heatreggae = L.heatLayer(reggae, {
      radius: 50,
      blur: 35
    });
    var heatrock = L.heatLayer(rock, {
      radius: 50,
      blur: 35
    });

    var heatrnr = L.heatLayer(rnr, {
      radius: 50,
      blur: 35
    });

    var heatrockabilly = L.heatLayer(rockabilly, {
      radius: 50,
      blur: 35
    });

    var heatsoul = L.heatLayer(soul, {
      radius: 50,
      blur: 35
    });

    var heatsouthrock = L.heatLayer(southrock, {
      radius: 50,
      blur: 35
    });

    var heatsouthsoul = L.heatLayer(southsoul, {
      radius: 50,
      blur: 35
    });

    var heatsurf = L.heatLayer(surf, {
      radius: 50,
      blur: 35
    });

    var heaturban = L.heatLayer(urban, {
      radius: 50,
      blur: 35
    });

    var heatwitchstep = L.heatLayer(witchstep, {
      radius: 50,
      blur: 35
    });

    var heatworld = L.heatLayer(world, {
      radius: 50,
      blur: 35
    });

    var heatwrestling = L.heatLayer(wrestling, {
      radius: 50,
      blur: 35
    });

    // Create a baseMaps object
    var baseMaps = {
      "Street Map": baseLayer
    };
    
    // Create an overlay object
    var overlayMaps = {
      "Adult Alternative": heataalt,
      "Adult Contemporary": heatacont,
      "Alternative": heatalt,
      "Alternative Country": heataltcount,
      "Alternative Rock": heataltrock,
      "Big Band": heatbigband,
      "Blues": heatblues,
      "Children's Theatre": heatchildrens,
      "Circus": heatcircus,
      "Classical/Vocal": heatclassical,
      "College": heatcollege,
      "Comedy": heatcomedy,
      "Contemporary R&B": heatcontrb,
      "Country": heatcountry,
      "Country Folk": heatcountryfolk,
      "Dance": heatdance,
      "Dance/Electronic": heatelectronic,
      "Death Metal/Black Metal": heatdeathmetal,
      "Deep Soul": heatdeepsoul,
      "Doom Metal": heatdoommetal,
      "Electro-Jazz": heatelectrojazz,
      "Electronic Pop": heatelectropop,
      "Free Funk": heatfreefunk,
      "French Rap": heatfrenchrap,
      "Fusion": heatfusion,
      "Garage Rock": heatgaragerock,
      "Gospel": heatgospel,
      "Hard Rock": heathardrock,
      "Hip-Hop/Rap": heathiphop,
      "Hobby/Special Interest Expos": heathobby,
      "Holiday": heatholiday,
      "Ice Shows": heaticeshows,
      "Industrial Metal": heatinmetal,
      "Instrumental Rock": heatinstrumental,
      "Jazz": heatjazz,
      "Jazz Blues": heatjazzblues,
      "Jazz Funk": heatjazzfunk,
      "Latin": heatlatin,
      "Latin Rock": heatlatinrock,
      "Metal": heatmetal,
      "Minor League": heatminorleague,
      "Miscellaneous": heatmisc,
      "Motorsports/Racing": heatmotorsports,
      "Musical": heatmusical,
      "NBA": heatnba,
      "Neo-Electro": heatneoelectro,
      "Neo-Psychedelia": heatneopsych,
      "Neo-Soul": heatneosoul,
      "Nu-Metal": heatnumetal,
      "Opera": heatopera,
      "Other": heatother,
      "Peru": heatperu,
      "Pop": heatpop,
      "Pop Rock": heatpoprock,
      "Post-Punk": heatpostpunk,
      "Post-Punk": heatprogrock,
      "Psychobilly": heatpsychobilly,
      "Punk": heatpunk,
      "R&B": heatrb,
      "Reggae": heatreggae,
      "Rock": heatrock,
      "Rock & Roll": heatrnr,
      "Rockabilly": heatrockabilly,
      "Soul": heatsoul,
      "Southern Rock": heatsouthrock,
      "Southern Soul": heatsouthsoul,
      "Surf": heatsurf,
      "Urban": heaturban,
      "Witchstep": heatwitchstep,
      "World": heatworld,
      "Wrestling": heatwrestling
    };
  
    var map = L.map("heat_map", {
      center: [45.512, -122.658],
  zoom: 13,
      layers: [baseLayer, heatalt]
    });
  
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);
  
  });
  