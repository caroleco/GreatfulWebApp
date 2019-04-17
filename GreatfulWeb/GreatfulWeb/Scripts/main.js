const fullJar = document.querySelector(".fulljar");
const jarTop = document.querySelector(".top");
/*const g = document.querySelector("#g");
const r = document.querySelector("#r");
const a = document.querySelector("#a");
const t = document.querySelector("#t");
const i = document.querySelector("#i");
const d = document.querySelector("#d");
const a2 = document.querySelector("#a2");
const o = document.querySelector("#o");*/

const heart = document.querySelector(".heart");

TweenMax.to(heart, 0.3, { scale: 1.1, repeat: -1 })



const tl = new TimelineMax();


tl.to(fullJar, 0.05,
        { x: "+=20", yoyo: true, repeat: 10 },
        1).to(jarTop, 0.2, {
            x: 91, rotation: 10, ease: Power2.easeOut,
        }, 1.02
        ).to(jarTop, 0.2, {
            y: 108,
            rotation: 90
    }, 1.04).to(jarTop, 0.2, {
            x: 89,
            rotation: 45
    }, 1.06)
        .to(alert, 1, { autoAlpha: 1, scale: 1.2 });

    

//TweenMax.to(gly, { autoAlpha: 1, scale: 1.2, delay: 1 });

    /*tl.to(secfullJar, 1, {
        x: 91,
    }, 1
    ).to(secjarTop, 1, {
        y: 105,
        rotation: 90
    }, 2).to(secjarTop, 1, {
        x: 83,
        rotation: 45
    });

    TweenMax.to(note1, 0, { rotation: 45 });
    TweenMax.to(note2, 0, { rotation: -45 });
    TweenMax.to(note3, 0, { rotation: 50 });*/


