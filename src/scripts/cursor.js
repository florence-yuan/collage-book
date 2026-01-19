import gsap from "gsap";

const cursor = document.querySelector(".cursor");

const xTo = gsap.quickTo(cursor, "x", {duration: 0.1});
const yTo = gsap.quickTo(cursor, "y", {duration: 0.1});

window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
});

const hoverEles = [...document.querySelectorAll("a")].concat([...document.querySelectorAll(".hoverable")]);
hoverEles.forEach(ele => {
    ele.addEventListener("mouseenter", () => {
        // cursor.classList.add("hovered");
        gsap.to(cursor, {scale: 2, duration: 0.2});
    });
    ele.addEventListener("mouseleave", () => {
        // cursor.classList.remove("hovered");
        gsap.to(cursor, {scale: 1, duration: 0.2});
    });
});

console.log(hoverEles)

const eyeTl = gsap.timeline({
    repeat: -1,
    repeatDelay: 2,
    // yoyo: true,
    defaults: {
        duration: 0.3,
        ease: "power1.in"
    }
});
gsap.set(".cursor #pupil", { x: -2, y: -0.6 });
eyeTl
.to(".cursor #pupil", { x: -2, y: -0.6 })
.to(".cursor #pupil", { x: 2, y: 0 }, "+=2")
.to(".cursor svg", {scaleY: 0.1, ease: "power2.in"}, "+")
.to(".cursor #eye-frame", {fill: 'black'}, "<+=0.1")
.to(".cursor #iris", {fill: 'black'}, "<+=0.1")
.to(".cursor #eye-frame", {fill: 'transparent'}, "+=0.3")
.to(".cursor #iris", {fill: 'rgba(255, 255, 255, 0.6)'}, "<")
.to(".cursor svg", {scaleY: 1, ease: "power2.out"}, "<")
.to(".cursor #pupil", { x: -1, y: 0.3 }, "+=2")
.to(".cursor #pupil", { x: 1.5, y: 0.4 }, "+=2")
.to(".cursor #pupil", { x: -2, y: -0.6 }, "+=2");

export const eyeAnim = {
    play: () => {
        eyeTl.play();
    },
    pause: () => {
        eyeTl.pause();
    }
}