import gsap from "gsap";

const xTo = gsap.quickTo(".cursor", "x", {duration: 0.1});
const yTo = gsap.quickTo(".cursor", "y", {duration: 0.1});

window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
});