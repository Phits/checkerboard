'use strict';

$(document).ready(function() {

    $( function() {
        $( "#datepicker" ).datepicker({
            dateFormat: "dd-mm-yy",
        });
    } );

    createTiles();

}); /* End document ready */

function hideDefault() {
    document.getElementById("datepicker-calendar").classList.add("hide");
}

function toggleDrop() {
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

function createTiles() {

    const numberOfTiles = 50;
    let leftOdd = 261;
    let leftEven = 415;
    let topOdd = 133;
    let topEven = 133;

    for (let i = 0; i < numberOfTiles; i++) {
        leftOdd = leftOdd + 77;
        leftEven = leftEven + 77;

        if (leftOdd > 877) {;
            topOdd = topOdd + 77;
            leftOdd = 415;
        }

        if (leftEven > 877) {;
            topEven = topEven + 77
            leftEven = 415;
        }

        console.log(i)
        if (i % 2 === 0 && i !== 48) {

            let obj = document.createElement('div');
            obj.className = `white-${1}`;
            obj.style.cssText = `position: absolute; top: ${topEven}px; left: ${leftEven}px; width: 77px; height: 77px; background: #000000 0% 0% no-repeat padding-box; opacity: 1;`;

            document.getElementById("tilesEven").appendChild(obj);

        } else {
            let obj = document.createElement('div');
            obj.className = `blue-${1}`;
            obj.style.cssText = `position: absolute; top: ${topOdd}px;left: ${leftOdd}px;width: 77px;height: 77px;background: #0066A1 0 0 no-repeat padding-box;opacity: 1;`;

            document.getElementById("tilesOdd").appendChild(obj);
        }



    }

}



