console.log("this");


       window.addEventListener('deviceorientationabsolute', handleOrientation);

        function handleOrientation(event) {
            const compassDirection = event.alpha;
            console.log(compassDirection);
            const p = document.createElement("p");
        p.textContent = compassDirection;
        document.body.appendChild(p);
        }
