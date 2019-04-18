const gly = document.querySelectorAll(".glyphicon-hand-up");
const motive = document.querySelectorAll(".motive");
const notes = document.querySelectorAll(".col-sm-1");

const tl = new TimelineMax();

tl.staggerTo(notes, 1,
        { top: "-=1", opacity: 1 }
        , 0.2)
    .fromTo(gly,0.5,
        { autoAlpha: 0 }, 
        { autoAlpha: 1 },
        1)
    .fromTo(motive, 1, 
        { scale: 0.8 },
        { scale: 1 }
        , 1);
