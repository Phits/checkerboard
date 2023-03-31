'use strict';

$( function() {
    $( "#datepicker" ).datepicker({
        dateFormat: "dd-mm-yy",
    });
} );

function hideDefault() {
    console.log('Hide');
    document.getElementById("datepicker-calendar").classList.add("hide");

    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    let input, filter, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    let div;
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        let txtValue;
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

$(document).ready(function() {

    // let defaultDate = 'Calendar (dd-mm-yyy)';
    // $("#datepicker").val(defaultDate);

}); /* End document ready */

