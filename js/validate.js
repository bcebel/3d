console.log("hello");
console.log(document.body);
let num = 0;
document.getElementById("myButton").addEventListener("click", myButton());
document.addEventListener("DOMContentLoaded", function () {
window.addEventListener("deviceorientationabsolute", handleOrientation, true);

 


  function handleOrientation(event) {
    const compassDirection = event.alpha;
    console.log("wombats", compassDirection);

    if (compassDirection > 337 || compassDirection <= 22) {
      num = 1;
    }

    if (compassDirection > 22 && compassDirection <= 67) {
      num = 2;
    }

    if (compassDirection > 67 && compassDirection <= 112) {
      num = 3;
    }

    if (compassDirection > 112 && compassDirection <= 157) {
      num = 4;
    }

    if (compassDirection > 157 && compassDirection <= 202) {
      num = 5;
    }

    if (compassDirection > 202 && compassDirection <= 247) {
      num = 6;
    }
    if (compassDirection > 247 && compassDirection <= 292) {
      num = 7;
    }
    if (compassDirection > 292 && compassDirection <= 337) {
      num = 8;
    }
  }
});

function myButton() {
  if (num == 1) {
    window.open("https://bcebel.github.io/3d/home.html#page=six");
  } else if (num == 2) {
    window.open("https://bcebel.github.io/3d/home.html#page=five");
  } else if (num == 3) {
    window.open("https://bcebel.github.io/3d/home.html#page=four");
  } else if (num == 4) {
    window.open("https://bcebel.github.io/3d/home.html#page=three");
  } else if (num == 5) {
    window.open("https://bcebel.github.io/3d/home.html#page=two");
  } else if (num == 6) {
    window.open("https://bcebel.github.io/3d/home.html#page=one");
  } else if (num == 7) {
    window.open("https://bcebel.github.io/3d/home.html#page=eight");
  } else if (num == 8) {
    window.open("https://bcebel.github.io/3d/home.html#page=seven");
  }
}