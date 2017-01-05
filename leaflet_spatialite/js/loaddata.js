var map = L.map('map');
var cartoDB = L.tileLayer.provider('CartoDB');
//cartoDB.addTo(map);
var OpenStreetMap = L.tileLayer.provider('OpenStreetMap');
//OpenStreetMap.addTo(map);
var OpenTopoMap = L.tileLayer.provider('OpenTopoMap');
OpenTopoMap.addTo(map)


var baseMaps = {
	"OpenTopoMap": OpenTopoMap,
    "cartoDB": cartoDB,
    "OpenStreetMap": OpenStreetMap
};
var overlayMaps = {
};
map.setView([45.911495,8.643337], 13);
var layerControl = new L.control.layers(baseMaps,overlayMaps).addTo(map);

var layers = {};

/* R Factor Russia */
//var db_path = 'data/r_factor_russia.sqlite';
//var thequery = "SELECT AsGeoJSON(geometry),station_code,station_name,station_name_en,ydeg,xdeg,period,nyear,r_factor_tot,r_factor,note,country,temporal_scale_min FROM r_factor_russia";

/* Theaters from SpatiaLite db TENZ*/
var db_path = 'data/spatialdb.sqlite';
//var thequery = "SELECT AsGeoJSON(geometry),OGC_FID,name,tel,url,address1,city,zip FROM theater";
var thequery = "SELECT AsGeoJSON(geom), ele, time FROM track0001points";


/* execute the query and add results to the map */
/* Parameters: ( query , map object to add layer, layer label, element id to print out query geojson output */
layers['track'] = execute_query(db_path,thequery,map,'Track 01',['#query-output',false]);







