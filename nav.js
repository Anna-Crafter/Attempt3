//creates an alert

alert('Hello World!')

 

/* Toggle between adding and removing the "responsive" class to topnav  */

function openMenu() {

    var x = document.getElementById("portfolioTopnav");

    if (x.className === "topnav") {

      x.className += "responsive";

    } else {

      x.className = "topnav";

    }

  }