const fullJar = document.querySelector(".fulljar");
const jarTop = document.querySelector(".top");

const heart = document.querySelector(".heart");

TweenMax.to(heart, 0.3, { scale: 1.1, repeat: -1 })

const tl = new TimelineMax();


tl.to(fullJar, 0.05,
        { x: "+=20", yoyo: true, repeat: 10 },
    1)
    .to(jarTop, 0.2, {
            x: 91, rotation: 10, ease: Power2.easeOut,
        }, 1.02
)
    .to(jarTop, 0.2, {
            y: 108,
            rotation: 90
    }, 1.04)
    .to(jarTop, 0.2, {
            x: 89,
            rotation: 45
    }, 1.06)
    .to(alert, 1, { autoAlpha: 1, scale: 1.2 });