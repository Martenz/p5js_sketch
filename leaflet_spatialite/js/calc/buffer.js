/* Buffer Calc */
function execute_buffer(buffer) {
	var db_path = 'data/spatialdb.sqlite';
	/* buffer query*/
	var thequery = "SELECT AsGeoJSON(ST_Buffer(geometry, "+buffer+")),OGC_FID,name,tel,url,address1,city,zip FROM theater";
	/* execute the query and add results to the map */
	/* Parameters: ( query , map object to add layer, layer label, element id to print out query geojson output */
	layerlabel = 'Buffer: ' + buffer;
	execute_query(db_path,thequery,map,layerlabel,['#query-output',false]);
};

/* Append Buffer button and input*/
$('#calc-1').append(
	"<button id='calc-buffer' class='btn btn-default'>Buffer</button><br></br><input type='number' step='any' id='buffer-value'/>\
	<hr>"
);

/* link button click event */
$('#calc-buffer').click(function(){
	var buffer = $('#buffer-value').val();
	execute_buffer(buffer);
});
