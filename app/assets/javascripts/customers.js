$(function() {
    var dialog;

    dialog = $( "#customer_form" ).dialog({
      autoOpen: false,
      height: 400,
      width: 350,
      modal: true,
      buttons: {
        Cancel: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
//        form[ 0 ].reset();
//        allFields.removeClass( "ui-state-error" );
      }
    });
 
    $( "#new_customer" ).button().on( "click", function() {
      dialog.dialog( "open" );
      $("#birthdate").datepicker();
    });
})