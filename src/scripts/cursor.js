import gsap from "gsap";

const cursor = document.querySelector(".cursor");

const xTo = gsap.quickTo(cursor, "x", {duration: 0.1});
const yTo = gsap.quickTo(cursor, "y", {duration: 0.1});

window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
});

const hoverEles = [...document.links].concat([...document.querySelectorAll(".hoverable")]);
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