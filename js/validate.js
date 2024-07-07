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
    setTimeout(() => {
      if (num == 1) {
        window.open("./home.html#page=six");
      } else if (num == 2) {
        window.open("./home.html#page=five");
      } else if (num == 3) {
        window.open("./home.html#page=four");
      } else if (num == 4) {
        window.open("./home.html#page=three");
      } else if (num == 5) {
        window.open("./home.html#page=two");
      } else if (num == 6) {
        window.open("./home.html#page=one");
      } else if (num == 7) {
        window.open("./home.html#page=eight");
      } else if (num == 8) {
        window.open("./home.html#page=seven");
      }
    });
  }
});
