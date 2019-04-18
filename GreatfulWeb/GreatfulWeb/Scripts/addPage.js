const fullJar = document.querySelector(".fulljar");
//const secfullJar = document.querySelector(".secfullJar");
//const secjarTop = document.querySelector(".sectop");
const jarTop = document.querySelector(".top");
//const bodyJar = document.querySelector(".jar");
const note1 = document.querySelectorAll(".note1");
//const note2 = document.querySelectorAll(".note2");
//const note3 = document.querySelectorAll(".note3");
//const btn = document.querySelector("#add");
//const gly = document.querySelector("#hand");

const tl = new TimelineMax();


    tl.to(fullJar, 0.5, {
        x: 91,
    }, 1
    ).to(jarTop, 0.5, {
        x:83,
        rotation: 90
    }, 2).to(jarTop, 0.5, {
        y: 110,
            rotation: 45
        }, 2.5).fromTo(note1, 1, { autoAlpha: 0, rotation: -45, x: 100 },
        { autoAlpha: 1, rotation: 85, y: 136,x:90 },
        2.5).to(note1, 0.2, { rotation:45 });

