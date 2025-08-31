document.addEventListener("DOMContentLoaded", function () {
  console.log("Feng Shui 360: Initialized");
  let num = 0;

  const button = document.getElementById("myButton");
  if (!button) {
    console.error("Button not found");
    return;
  }

  button.addEventListener("click", requestOrientationPermission);

  async function requestOrientationPermission() {
    // Handle iOS permission for device orientation
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      try {
        const permission = await DeviceOrientationEvent.requestPermission();
        if (permission === "granted") {
          window.addEventListener(
            "deviceorientationabsolute",
            handleOrientation,
            true
          );
          myButton();
        } else {
          console.error("Device orientation permission denied");
          alert("Please allow device orientation access to use this app.");
        }
      } catch (err) {
        console.error("Error requesting permission:", err);
        alert("Failed to access device orientation.");
      }
    } else {
      // Non-iOS devices
      window.addEventListener(
        "deviceorientationabsolute",
        handleOrientation,
        true
      );
      myButton();
    }
  }

  function handleOrientation(event) {
    const compassDirection = event.alpha;
    console.log("Compass Direction:", compassDirection);

    if (compassDirection > 337 || compassDirection <= 22) num = 1;
    else if (compassDirection > 22 && compassDirection <= 67) num = 2;
    else if (compassDirection > 67 && compassDirection <= 112) num = 3;
    else if (compassDirection > 112 && compassDirection <= 157) num = 4;
    else if (compassDirection > 157 && compassDirection <= 202) num = 5;
    else if (compassDirection > 202 && compassDirection <= 247) num = 6;
    else if (compassDirection > 247 && compassDirection <= 292) num = 7;
    else if (compassDirection > 292 && compassDirection <= 337) num = 8;
  }

  function myButton() {
    const pageMap = {
      1: "six",
      2: "five",
      3: "four",
      4: "three",
      5: "two",
      6: "one",
      7: "eight",
      8: "seven",
    };
    const pageId = pageMap[num] || "cover"; // Fallback to cover if num is invalid
    const menuAddress = `https://bcebel.github.io/3d/home.html#page=${pageId}`;
    console.log("Navigating to:", menuAddress);
    window.location.href = menuAddress;
  }
});
