console.log("hello");
console.log(document.body);

let num = 0;

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("myButton").addEventListener("click", myButton);

  function myButton() {
    window.addEventListener(
      "deviceorientationabsolute",
      handleOrientation,
      true
    );
  }

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

    openPageBasedOnDirection(num);
  }

  function openPageBasedOnDirection(num) {
    let url = "";
    switch (num) {
      case 1:
        url = "https://bcebel.github.io/3d/home.html#page=six";
        break;
      case 2:
        url = "https://bcebel.github.io/3d/home.html#page=five";
        break;
      case 3:
        url = "https://bcebel.github.io/3d/home.html#page=four";
        break;
      case 4:
        url = "https://bcebel.github.io/3d/home.html#page=three";
        break;
      case 5:
        url = "https://bcebel.github.io/3d/home.html#page=two";
        break;
      case 6:
        url = "https://bcebel.github.io/3d/home.html#page=one";
        break;
      case 7:
        url = "https://bcebel.github.io/3d/home.html#page=eight";
        break;
      case 8:
        url = "https://bcebel.github.io/3d/home.html#page=seven";
        break;
    }

    if (url) {
      window.open(url);
    }
  }
});
