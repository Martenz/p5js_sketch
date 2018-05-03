//alert('Duccio is here');

function readURL(input) {
       if (input.files && input.files[0]) {
           var reader = new FileReader();

           reader.onload = function (e) {
               $('#your-tenz-icon').html('<img id="loaded-image" src="#" alt="your image" />');
               $('#loaded-image').attr('src', e.target.result);
               $('#loaded-image').css('height','100%');
               $('#export-icon-code').val($('#your-tenz-icon').html());
           }

           reader.readAsDataURL(input.files[0]);
       }
};

//..load fontawsome 5 icons
var fawsome_json = './font-awesome-v5.0.1.json';

function load_fontawsome(){
  $.getJSON( fawsome_json, function( data ) {
    var items = [];
    var row;
    $('#fontawsome-list > tbody').empty();
    $.each( data.icons, function( key, val ) {
      //items.push( "<li id='" + key + "'>" + val + "</li>" );
      row = '<tr><td><span class="'+val+'"></span></td><td>'+val+'</td><td><button onclick="use_fa_icon(this)" class="use-this-fontawsome"><i class="fa fa-crosshairs"></i></button></td></tr>';
      $('#fontawsome-list > tbody').append(row);
      //console.log(row);
    });

    $('#fontawsome-list').DataTable({
      "lengthMenu": [[5,10, 25, 50, -1], [5,10, 25, 50, "All"]]
    });

    // $( "<ul/>", {
    //   "class": "my-new-list",
    //   html: items.join( "" )
    // }).appendTo( "body" );
  });
};

function use_fa_icon(elem){
  //..load fontawsome icons
    var selected = $(elem).closest('td').prev('td').text();
    var icon_sel = '<i class="'+selected+'"></i>';
    $('#your-tenz-icon').html(icon_sel);
    $('#export-icon-code').val(icon_sel);
    resize_content($('#your-tenz-icon').children().prop('nodeName'));
};

function resize_content(elem){
  $('#your-tenz-icon').css('width',$('#icon-width').val());
  $('#your-tenz-icon').css('height',$('#icon-height').val());
  if (elem == 'I'){
    var height_opt = $('#icon-height').val() - 15;
    $('#your-tenz-icon').children().css('font-size',height_opt+'px');
  }else{
    //$('#your-tenz-icon').children().css('width',$('#icon-width').val());
    $('#your-tenz-icon').children().css('height','100%');
  }
};

function copy2clipboard(){
  $('#export-icon-code').attr('disabled', false);
  document.getElementById("export-icon-code").select();
  document.execCommand("Copy");
  $('#button-copy-to-clipboard').attr('data-original-title','Copied')
    .tooltip('show');
    $('#export-icon-code').attr('disabled', true);

};

$(document).ready(function() {

    //..Image List datatable (not used)
    $('#available-images').DataTable({
      "lengthMenu": [[5,10, 25, 50, -1], [5,10, 25, 50, "All"]]
    });

    //..link copy to copyToClipboard
    // $('#copy-source-code').on('click',function(){
    //   copyToClipboard();
    // });
    var copy2clipboard = $('#button-copy-to-clipboard').tooltip();

    $('#button-copy-to-clipboard').on( "mouseout",function(){
      $(this).attr('data-original-title','Copy to Clipboard').tooltip();
    });

    //..FontAwsome include html and link functions
    $('#includedFontAwsome').load("./fawsome.html",function(){
      var loadfa = load_fontawsome();
    });

    //..load image locally
    $("#imgInput").change(function(){
           readURL(this);
    });

    //..save to png icon
    $("#save-canvas-2png").click(function() {
        html2canvas($("#icon-canvas"), {
            backgroundColor: '#fff',

            onrendered: function(canvas) {
                theCanvas = canvas;
                // Clean up
                $('#exported').empty();
                $('#exported').html(canvas);

                // Convert and download as image
                var width = $('#icon-width').val();
                var height = $('#icon-height').val();
                Canvas2Image.saveAsPNG(canvas,width,height);
                //$("#img-out").append(canvas);
                // Clean up
                //document.body.removeChild(canvas);
            }
        });
    });

    resize_content($('#your-tenz-icon').children().prop('nodeName'));
    $('#icon-width').on('change',function(){
      resize_content($('#your-tenz-icon').children().prop('nodeName'));
    });
    $('#icon-height').on('change',function(){
      resize_content($('#your-tenz-icon').children().prop('nodeName'));
    });

} );

// Populate table
