'use strict';

$(document).ready(function() {

    $( function() {
        $( "#datepicker" ).datepicker({
            dateFormat: "dd-mm-yy",
        });
    } );

    createTiles();

    document.getElementById("tilesEven").classList.add('fade-in');
    document.getElementById("tilesOdd").classList.add('fade-in');
    document.getElementById("yellowCheckers").classList.add('fade-in');
    document.getElementById("orangeCheckers").classList.add('fade-in');
    document.getElementById("start").classList.add('fade-in');

}); /* End document ready */

function hideDefault() {
    document.getElementById("datepicker-calendar").classList.add("hide");
}

function startGame() {
    document.getElementById("start").classList.add("hide");
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
    let topYellow = 147;
    let leftYellow = 352;
    let topOrange = 533;
    let leftOrange = 390.5;

    for (let i = 0; i < numberOfTiles; i++) {
        let offset = 77;
        leftOdd = leftOdd + offset;
        leftEven = leftEven + offset;
        leftYellow = leftYellow + offset/2;
        leftOrange = leftOrange + offset/2;

        if (leftOdd > 877) {
            topOdd = topOdd + offset;
            leftOdd = 415;
        }

        if (leftEven > 877) {
            topEven = topEven + offset;
            leftEven = 415;
        }

        if (leftYellow > 954 && topYellow < 224) {
            topYellow = topYellow + offset;
            leftYellow = 429;
        }

        if (leftOrange > 891) {
            topOrange = topOrange + offset;
            leftOrange = 390.5;
        }

        if (i % 2 === 0 && i !== 48) {

            // Squares
            let obj = document.createElement('div');
            obj.className = `white-${i}`;
            obj.style.cssText = `position: absolute; top: ${topEven}px; left: ${leftEven}px; width: 77px; height: 77px; background: #000000 0% 0% no-repeat padding-box; opacity: 1;`;

            document.getElementById("tilesEven").appendChild(obj);

            // Checker
            if (i < 28) {
                let checker = document.createElement('div');
                checker.className = `orange-${i}`;
                checker.style.cssText = `position: absolute; top: ${topOrange}px; left: ${leftOrange}px; width: 50px; height: 50px; background: #F67B5B 0 0 no-repeat padding-box; opacity: 1; border-radius: 50%;`;

                document.getElementById("orangeCheckers").appendChild(checker);
            }
        } else {
            let obj = document.createElement('div');
            obj.className = `blue-${i}`;
            obj.style.cssText = `position: absolute; top: ${topOdd}px;left: ${leftOdd}px;width: 77px;height: 77px;background: #0066A1 0 0 no-repeat padding-box;opacity: 1;`;

            document.getElementById("tilesOdd").appendChild(obj);

            if (i < 28) {
                let checker = document.createElement('div');
                checker.className = `yellow-${i}`;
                checker.style.cssText = `position: absolute; top: ${topYellow}px; left: ${leftYellow}px; width: 50px; height: 50px; background: #F8EB75 0 0 no-repeat padding-box;border-radius: 50%; opacity: 1;`;

                document.getElementById("yellowCheckers").appendChild(checker);
            }
        }
    }
}



