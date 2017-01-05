/* Execute textarea Query */
function execute_textarea_query() {
	var db_path = 'data/spatialdb.sqlite';
	/* get textarea query*/
	var thequery = $('#query-text').val();
	/* execute the query and add results to the map */
	/* Parameters: ( query , map object to add layer, layer label, element id to print out query geojson output */
	execute_query(db_path,thequery,false,"",['#query-output',true]);
};

/* append query form textarea input */
$('#generic-query').append('<div class="form-group"> \
	  <textarea class="form-control" rows="5" id="query-text">\
\
SELECT AsGeoJSON(ST_Buffer(geometry, 0.001)),OGC_FID,name,tel,url,address1,city,zip FROM theater; \
\
	  </textarea> \
	  <button id="run-query" class="btn btn-success">Execute</button> \
	</div>'
);

/* link button click event */
$('#run-query').click(function(){
	execute_textarea_query();
});

/* copy button event */
function copy_to_clipboard(elem){
	var text = $(elem).parent().find('#query-output').val();
	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
};
