console.log("this");
const p = document.createElement("p");

       window.addEventListener('deviceorientationabsolute', handleOrientation);

        function handleOrientation(event) {
            const compassDirection = event.alpha;
            console.log(compassDirection);
        p.textContent = compassDirection;
        document.body.appendChild(p);
        }
