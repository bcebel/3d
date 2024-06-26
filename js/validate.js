console.log("hello");
console.log(document.body);

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("deviceorientationabsolute", handleOrientation, true);

  function handleOrientation(event) {
    const compassDirection = event.alpha;
    console.log("wombats", compassDirection);

    let targetUrl = "";

    if (compassDirection > 337 || compassDirection <= 22) {
      targetUrl = "https://bcebel.github.io/3d/home.html#page=six";
    } else if (compassDirection > 22 && compassDirection <= 67) {
      targetUrl = "https://bcebel.github.io/3d/home.html#page=five";
    } else if (compassDirection > 67 && compassDirection <= 112) {
      targetUrl = "https://bcebel.github.io/3d/home.html#page=four";
    } else if (compassDirection > 112 && compassDirection <= 157) {
      targetUrl = "https://bcebel.github.io/3d/home.html#page=three";
    } else if (compassDirection > 157 && compassDirection <= 202) {
      targetUrl = "https://bcebel.github.io/3d/home.html#page=two";
    } else if (compassDirection > 202 && compassDirection <= 247) {
      targetUrl = "https://bcebel.github.io/3d/home.html#page=one";
    } else if (compassDirection > 247 && compassDirection <= 292) {
      targetUrl = "https://bcebel.github.io/3d/home.html#page=eight";
    } else if (compassDirection > 292 && compassDirection <= 337) {
      targetUrl = "https://bcebel.github.io/3d/home.html#page=seven";
    }

    if (targetUrl) {
      generateButton(targetUrl);
    }
  }

  function generateButton(targetUrl) {
    const buttonContainer = document.getElementById("button-container");
    const button = document.createElement("a");
    button.href = targetUrl;
    button.innerText = "Go to Page";
    button.className = "ampstart-btn";
    buttonContainer.appendChild(button);
  }
});
