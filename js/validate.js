document.addEventListener("DOMContentLoaded", function () {
  console.log("hello");
  console.log(document.body);
  let num = 0;

  document.getElementById("myButton").addEventListener("click", myButton);

  window.addEventListener("deviceorientationabsolute", handleOrientation, true);

  function handleOrientation(event) {
    const compassDirection = event.alpha;
    console.log("wombats", compassDirection);

    if (compassDirection > 337 || compassDirection <= 22) {
      num = 1;
    } else if (compassDirection > 22 && compassDirection <= 67) {
      num = 2;
    } else if (compassDirection > 67 && compassDirection <= 112) {
      num = 3;
    } else if (compassDirection > 112 && compassDirection <= 157) {
      num = 4;
    } else if (compassDirection > 157 && compassDirection <= 202) {
      num = 5;
    } else if (compassDirection > 202 && compassDirection <= 247) {
      num = 6;
    } else if (compassDirection > 247 && compassDirection <= 292) {
      num = 7;
    } else if (compassDirection > 292 && compassDirection <= 337) {
      num = 8;
    }
  }

  function myButton() {
  var linkElement = document.createElement("a");

  window.document.body.appendChild(linkElement);

  // When the button is clicked, I replaced window.open() with the following code
  //window.open(menuAddress);

  // Thanks https://stackoverflow.com/a/44487883



    setTimeout(() => {
      if (num == 1) {
       var menuAddress = "https://bit.ly/4cxXOc2";
      } else if (num == 2) {
        var menuAddress = "https://bit.ly/3XSGxFY";
      } else if (num == 3) {
        var menuAddress = "https://bit.ly/3zyJNMH";
      } else if (num == 4) {
         var menuAddress = "https://bit.ly/3zGFKxO";
      } else if (num == 5) {
         var menuAddress = "https://bit.ly/45SPrp9";
      } else if (num == 6) {
         var menuAddress = "https://bit.ly/45WW3CT";
      } else if (num == 7) {
         var menuAddress = "https://bit.ly/4bFakFs";
      } else if (num == 8) {
         var menuAddress = "https://bit.ly/4bu7h2U";
      }
        var link = document.getElementById("buttony");
        link.setAttribute("href", menuAddress);
        link.click();
    });
    
  }
});


  // Add a <a> to use to download an image file

