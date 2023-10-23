console.log("this");
const p = document.createElement("p");



       window.addEventListener('deviceorientationabsolute', handleOrientation);

        function handleOrientation(event) {
            const compassDirection = event.alpha;
            console.log(compassDirection);
            if (compassDirection !== null) {
                // Update the DOM element with the compass direction value
                document.getElementById('compassDirection').innerText = `Compass Direction: ${compassDirection}°`;
            }
        }
        p.textContent = "A second line of text";
        document.body.appendChild(p);