



// Load the confetti effect if activated in the settings
console.log("effects.js loaded");

let confettiLoaded = false;

function imported_effects_setup(isConfeti) {

    console.log("isConfeti: " + isConfeti);

    // tsparticles.js

    // const cdnLink = "https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js"

    if (isConfeti) {
        const script = document.createElement("script")
        // script.src = cdnLink;7
        script.src = "tsparticles.js";

        // script.onload = onLoadFinished;
        script.onload = onLoadFinished;
        script.onerror = function () {
            console.error("Failed to load script:", cdnLink);
        };
        document.body.appendChild(script);

    }
}

function onLoadFinished() {

    console.log("effects.js onLoadFinished called");

    confettiLoaded = true;

    // callConfetti();
}



function imported_effects_callConfetti(){
    callConfetti();
}

function imported_effects_callFireworks(){
    callFireworks();
}
function callFireworks(){
    const duration = 3 * 1000,
        animationEnd = Date.now() + duration,
        defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, 250);
}


function callConfetti() {
    
    console.log("callConfetti called");

    if (confettiLoaded) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.3 },
        });
    }
   
}


//on press any key trigger confetti
// document.addEventListener("keydown", function (event) {
//     callConfetti();
// });