console.log("hello");
console.log(document.body);

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("deviceorientationabsolute", handleOrientation, true);

  function handleOrientation(event) {
    const compassDirection = event.alpha;
    console.log("wombats", compassDirection);

    if (compassDirection > 337 || compassDirection <= 22) {
      window.location.href = "home.html#page=five";
    }

    if (compassDirection > 22 && compassDirection <= 67) {
      window.location.href = "home.html#page=four";
    }

    if (compassDirection > 67 && compassDirection <= 112) {
      window.location.href = "home.html#page=three";
    }

    if (compassDirection > 112 && compassDirection <= 157) {
      window.location.href = "home.html#page=two";
    }

    if (compassDirection > 157 && compassDirection <= 202) {
      window.location.href = "home.html#page=one";
    }

    if (compassDirection > 202 && compassDirection <= 247) {
      window.location.href = "home.html#page=eight";
    }
    if (compassDirection > 247 && compassDirection <= 292) {
      window.location.href = "home.html#page=seven";
    }
    if (compassDirection > 292 && compassDirection <= 337) {
      window.location.href = "home.html#page=six";
    }
  }
});
