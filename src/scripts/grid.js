import gsap from "gsap";

window.addEventListener("DOMContentLoaded", () => {
    let isMouseDown = false;

    window.addEventListener("mousedown", () => { isMouseDown = true; });
    window.addEventListener("mouseup", () => { isMouseDown = false; });
    window.addEventListener("mouseleave", () => { isMouseDown = false; });

    let xMoveTo = gsap.quickTo(".grid", "x", {duration: 0.3});
    let yMoveTo = gsap.quickTo(".grid", "y", {duration: 0.3});

    window.addEventListener("mousemove", (e) => {
        if (!isMouseDown)
            return;

        xMoveTo(e.clientX);
        yMoveTo(e.clientY);
    })
});