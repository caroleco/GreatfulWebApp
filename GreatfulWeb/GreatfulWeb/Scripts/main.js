const jarTop = document.querySelector(".top");
const bodyJar = document.querySelector(".jar");
const note1 = document.querySelectorAll(".note1");
const note2 = document.querySelectorAll(".note2");
const note3 = document.querySelectorAll(".note3");

const tl = new TimelineMax();

tl.to(jarTop, 1, {
    x: 91,
}, 1
).to(jarTop, 1, {
    y: 115,
    rotation: 90
}, 2).to(jarTop, 1, {
    x: 89,
    rotation: 45
});

TweenMax.to(note1, 0, { rotation: 45 });
TweenMax.to(note2, 0, { rotation: -45 });
TweenMax.to(note3, 0, { rotation: 50 });