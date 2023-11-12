console.log("this");

window.addEventListener("deviceorientationabsolute", handleOrientation);

function handleOrientation(event) {
  //    const compassDirection = 360-event.alpha;
  const compassDirection = event.alpha;
 // <template type="amp-mustache">{{ compassDirection }}</template>;
  console.log(compassDirection);
 // if (compassDirection !== null) {
    // Update the DOM element with the compass direction value
 //   document.getElementById("inputCompass").setAttribute =
 //     (heading - end, compassDirection);
   // console.log(inputCompass.compassDirection);
  }
//}

