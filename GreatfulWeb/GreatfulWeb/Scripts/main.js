const fullJar = document.querySelector(".fulljar");
//const secfullJar = document.querySelector(".secfullJar");
//const secjarTop = document.querySelector(".sectop");
const jarTop = document.querySelector(".top");
//const bodyJar = document.querySelector(".jar");
//const note1 = document.querySelectorAll(".note1");
//const note2 = document.querySelectorAll(".note2");
//const note3 = document.querySelectorAll(".note3");
//const btn = document.querySelector("#add");
//const gly = document.querySelector("#hand");

const tl = new TimelineMax();


    tl.to(fullJar, 0.05,
        { x: "+=20", yoyo: true, repeat: 10 },
        0.3).to(jarTop, 0.2, {
            x: 91, rotation: 10, ease: Power2.easeOut,
        }, 0.5
        ).to(jarTop, 0.2, {
            y: 108,
            rotation: 90
        }, 0.7).to(jarTop, 0.2, {
            x: 89,
            rotation: 45
        }, 0.9)
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


