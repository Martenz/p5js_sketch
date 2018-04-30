var map = L.map('map').setView([12, 42], 2);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.light'
}).addTo(map);

function popupFeature(feature,layer){
  layer.bindPopup(

    //..Single properties
    //feature.properties.name

    //..list all properties
    function(){
      var properties="GeoJson Properties<hr></hr>";
      $.each(feature.properties, function(key, element) {
         properties += key + ' : ' + element + '<br></br>';
      });
      return properties;
   }
  );
};

//GeoJson Static example
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};
L.geoJSON(geojsonFeature,{
   onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name);
  }
}).addTo(map);

// geojson api example
var geojson_api = "https://www.mapbox.com/help/data/stations.geojson";
$.getJSON(geojson_api,function(data){
  L.geoJson(data, {
     onEachFeature: popupFeature
  }).addTo(map);

});
