$(function() {
    var dialog, form,

    emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    first_name = $( "#first_name" ),
    last_name = $( "#last_name" ),
    phone = $( "#phone" ),
    email = $( "#email" ),
    birthdate = $( "#birthdate" ),
    allFields = $( [] ).add( first_name ).add( last_name ).add( phone ).add( email ).add( birthdate ),
    tips = $( ".validateTips" );
 
    function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
      setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
      }, 500 );
    }
 
    function checkLength( o, n, min, max ) {
      if ( o.val().length > max || o.val().length < min ) {
        o.addClass( "ui-state-error" );
        updateTips( "Length of " + n + " must be between " +
          min + " and " + max + "." );
        return false;
      } else {
        return true;
      }
    }
 
    function checkRegexp( o, regexp, n ) {
      if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
      } else {
        return true;
      }
    }
 
    function addUser() {
      var valid = true;
      allFields.removeClass( "ui-state-error" );
 
      valid = valid && checkLength( first_name, "first name", 3, 16 );
      valid = valid && checkLength( last_name, "last name", 3, 16 );
      valid = valid && checkLength( email, "email", 6, 80 );
      valid = valid && (phone.val()=='' || checkLength( phone, "phone", 10, 16 ));
      valid = valid && (birthdate.val()=='' || checkLength( birthdate, "birthdate", 10, 10 ));
 
      valid = valid && checkRegexp( first_name, /^([A-Za-z\s])+$/i, "First name may consist of A-z letters and spaces." );
      valid = valid && checkRegexp( last_name, /^([A-Za-z\s])+$/i, "Last name may consist of A-z letters and spaces." );
      valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
      valid = valid && (phone.val()=='' || checkRegexp( phone, /^([0-9])+$/i, "Phone number may consist of 0-9 letters."));
      valid = valid && (birthdate.val()=='' || checkRegexp( birthdate, /^([0-9\/])+$/, "Birthdate in format mm/dd/yyyy" ));
 
      if ( valid ) {
        console.log("adding..")
        dialog.dialog( "close" );
      }
      return valid;
    }

    dialog = $( "#customer_form" ).dialog({
      autoOpen: false,
      height: 400,
      width: 350,
      modal: true,
      buttons: {
        'Add': addUser,
        Cancel: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
    });
 
    $( "#new_customer" ).button().on( "click", function() {
      dialog.dialog( "open" );
      $("#birthdate").datepicker();
    });

    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      addUser();
    });
})