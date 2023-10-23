
       window.addEventListener('deviceorientationabsolute', handleOrientation);

        function handleOrientation(event) {
            const compassDirection = event.alpha;

            if (compassDirection !== null) {
                // Update the DOM element with the compass direction value
                document.getElementById('compassDirection').innerText = `Compass Direction: ${compassDirection}°`;
            }
        }