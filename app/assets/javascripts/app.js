$(document).ready( function() {
  $('form').on('ajax:success', function (e, data) {
    appendData( data )
  })
})

appendData = function( data ) {
  // $( 'table' ).append('<tr><td><a href="#">' + data.name + '</a></td></tr>')
  var source = $('#table-template').html();
  var template = Handlebars.compile(source);
  var placeHolder = $('table');
  var html = template(data);
  placeHolder.append(html);
}