/* =========================================================
SPACE LANDING PAGE JAVASCRIPT
========================================================= */

/* =========================================================
PARTICLE SYSTEM
========================================================= */

const particleContainer =
document.getElementById("particles");

const PARTICLE_COUNT = 90;

function createParticles() {

```
if (!particleContainer) {
    return;
}


for (
    let i = 0;
    i < PARTICLE_COUNT;
    i++
) {

    const particle =
        document.createElement("div");


    particle.classList.add(
        "particle"
    );


    /* RANDOM POSITION */

    particle.style.left =
        Math.random() * 100 + "%";


    /* RANDOM SIZE */

    const size =
        Math.random() * 3 + 1;


    particle.style.width =
        size + "px";


    particle.style.height =
        size + "px";


    /* RANDOM ANIMATION */

    const duration =
        Math.random() * 12 + 8;


    particle.style.animationDuration =
        duration + "s";


    /* RANDOM DELAY */

    particle.style.animationDelay =
        Math.random() * -20 + "s";


    /* RANDOM MOVEMENT */

    const randomX =
        Math.random() * 150 - 75;


    particle.style.setProperty(
        "--random-x",
        randomX + "px"
    );


    particleContainer.appendChild(
        particle
    );

}
```

}

createParticles();

/* =========================================================
MOUSE PARALLAX
========================================================= */

const background =
document.querySelector(
".space-background"
);

document.addEventListener(
"mousemove",
function (event) {

```
    if (!background) {
        return;
    }


    const x =
        (
            event.clientX /
            window.innerWidth
        ) - 0.5;


    const y =
        (
            event.clientY /
            window.innerHeight
        ) - 0.5;


    background.style.transform =
        `translate(
            ${x * -5}px,
            ${y * -5}px
        )`;

}
```

);

/* =========================================================
RESET PARALLAX ON MOUSE LEAVE
========================================================= */

document.addEventListener(
"mouseleave",
function () {

```
    if (!background) {
        return;
    }


    background.style.transform =
        "translate(0, 0)";

}
```

);

/* =========================================================
BUTTON CLICK EFFECT
========================================================= */

const buttons =
document.querySelectorAll(
".space-button"
);

buttons.forEach(
function (button) {

```
    button.addEventListener(
        "click",
        function () {

            button.classList.add(
                "clicked"
            );


            setTimeout(
                function () {

                    button.classList.remove(
                        "clicked"
                    );

                },
                300
            );

        }
    );

}
```

);

/* =========================================================
RANDOM LIGHTNING
========================================================= */

function randomLightning() {

```
const lightningElements =
    document.querySelectorAll(
        ".lightning"
    );


if (
    lightningElements.length === 0
) {

    return;
}


const randomIndex =
    Math.floor(
        Math.random() *
        lightningElements.length
    );


const lightning =
    lightningElements[
        randomIndex
    ];


/* RESET ANIMATION */

lightning.style.animation =
    "none";


/*
   Force browser to recalculate
   animation
*/

void lightning.offsetWidth;


/* PLAY LIGHTNING */

lightning.style.animation =
    "lightningStrike 0.8s ease-out";


/* RESET */

setTimeout(
    function () {

        lightning.style.animation =
            "";

    },
    900
);
```

}

/* =========================================================
LIGHTNING INTERVAL
========================================================= */

setInterval(
function () {

```
    const chance =
        Math.random();


    if (
        chance > 0.35
    ) {

        randomLightning();

    }

},
4500
```

);

/* =========================================================
VISIBILITY PERFORMANCE
========================================================= */

document.addEventListener(
"visibilitychange",
function () {

```
    const animatedElements =
        document.querySelectorAll(
            `
            .particle,
            .asteroid,
            .main-logo,
            .space-button,
            .note-box,
            .stars
            `
        );


    if (
        document.hidden
    ) {

        animatedElements.forEach(
            function (element) {

                element.style.animationPlayState =
                    "paused";

            }
        );

    } else {

        animatedElements.forEach(
            function (element) {

                element.style.animationPlayState =
                    "running";

            }
        );

    }

}
```

);

/* =========================================================
DISABLE CONTEXT MENU
OPTIONAL
========================================================= */

/*
document.addEventListener(
"contextmenu",
function (event) {
event.preventDefault();
}
);
*/
