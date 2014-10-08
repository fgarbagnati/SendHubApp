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
  var name = this.innerHTML;
  var tableRow = this.parentElement.parentElement;
  var number = tableRow.children[2].innerHTML;
  appendMessageBox(name, number);
}

function appendMessageBox(contact_name, contact_number) {
  var data = {'name': contact_name, 'phone_number': contact_number }
  var source = $('#message-form-template').html();
  var template = Handlebars.compile(source);
  var placeholder = $('.send_message');
  var html = template( data );
  placeholder.append(html);

  setButtonListener();
}

function setButtonListener() {
  $('button').on('click', function( e ) {
    e.preventDefault();
    var message = $('textarea').val()
    var name = $('#update-name').val()
    var phone_number = $('#update-number').val()
    var messageData = {"name": name, "phone_number": phone_number, "messageBody": message}
    // debugger

    sendMessage( messageData )
  });
}

function sendMessage( messageData ) {
  console.log( messageData )
}