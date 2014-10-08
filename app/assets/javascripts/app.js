$(document).ready( function() {
  $('form').on('ajax:success', function (e, data) {
    appendData( data )
  })
})

appendData = function( data ) {
  $( 'table' ).append('<tr><td>' + data.name + '</td></tr>')
}