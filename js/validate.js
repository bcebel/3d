console.log(document.body);

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("deviceorientationabsolute", handleOrientation, true);

  function handleOrientation(event) {
    const compassDirection = event.alpha;
    console.log(compassDirection);
    const photoCompass = document.querySelector("#photoTime");

    function setCompassDirection(direction) {
      AMP.setState({
        compassData: {
          compassNumber: direction,
        },
      });
    }
    setCompassDirection(compassDirection);
    console.log(AMP.getState("compassData"));

    if (compassDirection > 337 || compassDirection <= 22) {
      photoCompass.setAttribute("src", "6.jpg");
      console.log(photoCompass);
      window.location.href = "home.html#page=six";
    }

    if (compassDirection > 22 && compassDirection <= 67) {
      photoCompass.setAttribute("src", "5.jpg");
      console.log(photoCompass);
      window.location.href = "home.html#page=five";
    }

    if (compassDirection > 67 && compassDirection <= 112) {
      photoCompass.setAttribute("src", "4.jpg");
      console.log(photoCompass);
      window.location.href = "home.html#page=four";
    }

    if (compassDirection > 112 && compassDirection <= 157) {
      photoCompass.setAttribute("src", "3.jpg");
      console.log(photoCompass);
      window.location.href = "home.html#page=three";
    }

    if (compassDirection > 157 && compassDirection <= 202) {
      photoCompass.setAttribute("src", "2.jpg");
      console.log(photoCompass);
      window.location.href = "home.html#page=two";
    }

    if (compassDirection > 202 && compassDirection <= 247) {
      photoCompass.setAttribute("src", "1.jpg");
      console.log(photoCompass);
      window.location.href = "home.html#page=one";
    }
    if (compassDirection > 247 && compassDirection <= 292) {
      photoCompass.setAttribute("src", "8.jpg");
      console.log(photoCompass);
      window.location.href = "home.html#page=eight";
    }
    if (compassDirection > 292 && compassDirection <= 337) {
      photoCompass.setAttribute("src", "7.jpg");
      console.log(photoCompass);
      window.location.href = "home.html#page=seven";
    }
  }
});
