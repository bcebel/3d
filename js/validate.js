console.log("hello");
console.log(document.body);

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("deviceorientationabsolute", handleOrientation, true);

  function handleOrientation(event) {
    const compassDirection = event.alpha;
    console.log("wombats", compassDirection);

    if (compassDirection > 337 || compassDirection <= 22) {
      window.open("https://bcebel.github.io/3d/home.html#page=six");
    }

    if (compassDirection > 22 && compassDirection <= 67) {
      window.open("https://bcebel.github.io/3d/home.html#page=five");
    }

    if (compassDirection > 67 && compassDirection <= 112) {
      window.open("https://bcebel.github.io/3d/home.html#page=four");
    }

    if (compassDirection > 112 && compassDirection <= 157) {
      window.open("https://bcebel.github.io/3d/home.html#page=three");
    }

    if (compassDirection > 157 && compassDirection <= 202) {
      window.open("https://bcebel.github.io/3d/home.html#page=two");
    }

    if (compassDirection > 202 && compassDirection <= 247) {
      window.open("https://bcebel.github.io/3d/home.html#page=one");
    }
    if (compassDirection > 247 && compassDirection <= 292) {
      window.open("https://bcebel.github.io/3d/home.html#page=eight");
    }
    if (compassDirection > 292 && compassDirection <= 337) {
      window.open("https://bcebel.github.io/3d/home.html#page=seven");
    }
  }
});
