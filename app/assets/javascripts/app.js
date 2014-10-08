$(document).ready( function() {
  $('form').on('ajax:success', function (e, data) {
    appendData( data )
  });
})

function appendData( data ) {
  var source = $('#table-template').html();
  var template = Handlebars.compile(source);
  var placeHolder = $('table');
  var html = template(data);
  placeHolder.append(html);
  setLinkListeners();
}

function setLinkListeners() {
  $('.table-link').on('click', triggerMessageBox);
}

function triggerMessageBox(e) {
  e.preventDefault();
  var name = this.innerHTML
  var tableRow = this.parentElement.parentElement
  var number = tableRow.children[2].innerHTML
  appendMessageBox(name, number);
}

function appendMessageBox(name, number) {
  debugger
}