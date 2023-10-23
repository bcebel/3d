console.log("this");

window.addEventListener("deviceorientationabsolute", handleOrientation);

function handleOrientation(event) {
    const compassDirection = 360-event.alpha;
    <template type="amp-mustache">{{ compassDirection }}</template>;
  console.log(compassDirection);
  if (compassDirection !== null) {
    // Update the DOM element with the compass direction value
    document.getElementById(
      "compassDirection"
    ).innerText = `Compass Direction: ${compassDirection}°`;
  }
}

