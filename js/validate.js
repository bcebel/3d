document.addEventListener("DOMContentLoaded", function () {
  console.log("Feng Shui 360: Initialized");
  let num = 0;
  let isPermissionGranted = false;

  // Get DOM elements
  const permissionButton = document.getElementById("permissionButton");
  const navigateButton = document.getElementById("navigateButton"); // For two-button approach
  const directionDisplay = document.getElementById("directionDisplay"); // Optional: Display direction

  if (!permissionButton) {
    console.error("Permission button not found");
    alert("App initialization failed: Permission button not found.");
    return;
  }

  // Single-button approach: permissionButton handles everything
  permissionButton.addEventListener("click", requestOrientationPermission);

  // Two-button approach: Add navigateButton listener if it exists
  if (navigateButton) {
    navigateButton.addEventListener("click", navigateToPage);
    navigateButton.disabled = true; // Disable until permission is granted
  }

  async function requestOrientationPermission() {
    try {
      // Check if device supports orientation events
      if (!window.DeviceOrientationEvent) {
        console.error("Device orientation not supported");
        alert("This device does not support compass functionality.");
        return;
      }

      // Handle iOS permission
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        const permission = await DeviceOrientationEvent.requestPermission();
        if (permission === "granted") {
          console.log("Device orientation permission granted");
          isPermissionGranted = true;
          if (navigateButton) navigateButton.disabled = false; // Enable navigate button
          window.addEventListener(
            "deviceorientationabsolute",
            handleOrientation,
            true
          );
          // For single-button approach, navigation happens in handleOrientation
        } else {
          console.error("Device orientation permission denied");
          alert(
            "Please allow device orientation access in Safari settings to use this app."
          );
        }
      } else {
        // Non-iOS devices
        console.log("No permission required, adding orientation listener");
        isPermissionGranted = true;
        if (navigateButton) navigateButton.disabled = false;
        window.addEventListener(
          "deviceorientationabsolute",
          handleOrientation,
          true
        );
      }
    } catch (err) {
      console.error("Error requesting permission:", err);
      alert(
        "Failed to access device orientation. Please ensure motion and orientation access is enabled in your device settings."
      );
    }
  }

  function handleOrientation(event) {
    const compassDirection = event.alpha;

    // Check for valid compass direction
    if (compassDirection === null || compassDirection === undefined) {
      console.warn("Invalid compass direction, device may need calibration");
      if (directionDisplay) {
        directionDisplay.textContent =
          "Compass unavailable. Move device in a figure-8 to calibrate.";
      }
      return;
    }

    console.log("Compass Direction:", compassDirection);
    if (directionDisplay) {
      directionDisplay.textContent = `Direction: ${Math.round(
        compassDirection
      )}°`;
    }

    // Map compass direction to num
    if (compassDirection > 337 || compassDirection <= 22) num = 1;
    else if (compassDirection > 22 && compassDirection <= 67) num = 2;
    else if (compassDirection > 67 && compassDirection <= 112) num = 3;
    else if (compassDirection > 112 && compassDirection <= 157) num = 4;
    else if (compassDirection > 157 && compassDirection <= 202) num = 5;
    else if (compassDirection > 202 && compassDirection <= 247) num = 6;
    else if (compassDirection > 247 && compassDirection <= 292) num = 7;
    else if (compassDirection > 292 && compassDirection <= 337) num = 8;

    // Single-button approach: Navigate automatically when direction is detected
    if (!navigateButton) {
      navigateToPage();
    }
  }

  function navigateToPage() {
    if (!isPermissionGranted) {
      console.error("Cannot navigate: Permission not granted");
      alert("Please grant device orientation permission first.");
      return;
    }
    if (num === 0) {
      console.warn("No valid direction detected yet");
      alert("No valid compass direction detected. Please try again.");
      return;
    }

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
    const pageId = pageMap[num] || "cover"; // Fallback to cover
    const menuAddress = `https://bcebel.github.io/3d/home.html#page=${pageId}`;
    console.log("Navigating to:", menuAddress);
    window.location.href = menuAddress;
  }

  // Clean up event listeners on page unload
  window.addEventListener("unload", () => {
    window.removeEventListener(
      "deviceorientationabsolute",
      handleOrientation,
      true
    );
  });
});
