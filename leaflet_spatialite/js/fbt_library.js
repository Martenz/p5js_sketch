/* MAIN Function to query SpatiaLite db */
/* Parameters: ( query, map object to add layers results [set false to avoid adding layers], layer label, html id where print query GeoJson result as text */

function execute_query(db_path,thequery,map,layerlabel,id_output){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', db_path, true);
	xhr.responseType = 'arraybuffer';
	
	var dbgeoms = {"type": "FeatureCollection", "features": [] };

	xhr.onload = function(e) {
		var uInt8Array = new Uint8Array(this.response);
		var db = new SQL.Database(uInt8Array);
		var contents = db.exec(thequery);
		/* contents is now [{columns:['col1','col2',...], values:[[first row], [second row], ...]}] */
		var elements = contents[0].values;
		var fields = contents[0].columns; 	
		/* if map parameter is defined then generate the Leaflet FeatureCollection object */
		if (map){
			//var dbgeoms = {"type": "FeatureCollection", "features": [] };
			for (i = 0; i < elements.length; i++) {
			dbgeoms.features.push( { 
				"type": "Feature", 
				"id": i, 
				"properties": get_db_fields_properties(elements[i],fields), 
				/* NOTE!!! the query should call a table or view with first column the Geometry !!! */
				"geometry": $.parseJSON( elements[i][0] ) 
				} );
			};
			
			/* generate the popup using the formatting function */
			var dataLayer = L.geoJson(dbgeoms, {
				onEachFeature: function(feature, layer) {
					var popupText = format_html_properties(feature.properties);
					layer.bindPopup(popupText); }
				});
			/* Add layer to the map if the passed parameter is not false*/
			dataLayer.addTo(map);
			/* Add layer to the layer Control */
			layerControl.addOverlay(dataLayer, layerlabel);
		};
		/* Add query output formatted as Json/GeoJson if the passed parameter is not false */
		if (id_output[1]){ 
			if (map) {
				/* if map parameter is defined print out the GeoJson */
				$(id_output[0]).val(JSON.stringify(dbgeoms));
			} else {
				/* otherwise just format in Json the output of the query */
				$(id_output[0]).val(JSON.stringify(elements));
			};
		}else{
			/* if id_output is false then clean the html object if defined */
			$(id_output[1]).val("");
		};
	};
	xhr.send();
	
	return dbgeoms;
};


/* iterate through the output of the call to the db and get fields values form the second column to the end */
function get_db_fields_properties(thearray,fields){
	properties = {};
	var keys = Object.keys(thearray);
	/* skip first element of array that has to be the geometry!!! all other db columns following */
	for (j=1; j < keys.length; j++){
		properties[fields[j]] = thearray[keys[j]]; 
	};
	return properties
};

/* iterate through the properties and format to html objects for the popup */
function format_html_properties(thearray){
	popupText = "<table class='table table-hover table-striped table-condensed'>";
	var keys = Object.keys(thearray);
			for (p=0; p < keys.length; p++){
				popupText = popupText + "<tr><td>" + keys[p] + "</td><td>" + thearray[keys[p]] + "</td></tr>";
			};
	popupText = popupText + "</table>";
	return popupText;
};