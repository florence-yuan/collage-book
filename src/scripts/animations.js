import gsap from "gsap";
import { eyeAnim } from "./cursor";
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const animTls = [];

function anim1() {
    gsap.set("#anim1 > *", {
        backgroundPositionX: (i) => `${i * 100 / 5}%`
    });
    gsap.set("#fig-arm", { transformOrigin: '45% 34%' });

    animTls[0] = gsap.timeline({
        repeat: -1,
        yoyo: true,
        paused: true,
        defaults: {
            ease: "power1.inOut",
            duration: 0.7
        }
    });
    animTls[0]
        .fromTo(
            "#fig-arm",
            { rotateZ: 20 },
            { rotateZ: -10, }
        )
        .fromTo(
            "#fig-body",
            { y: -10, x: -10, },
            { y: 5, },
            "<"
        )
        .fromTo(
            "#fish",
            { y: 5, },
            { y: -10, },
            "<"
        )
        .fromTo(
            "#frame",
            { y: -10, },
            { y: 5, },
            "<"
        )
        .fromTo(
            "#hook1",
            { y: -23 },
            { y: 10, },
            "<"
        )
        .fromTo(
            "#hook2",
            { y: -23 },
            { y: 2, },
            "<"
        )
}

function anim2() {
    console.log(MotionPathPlugin.convertToPath("#motion-circle")[0])
    animTls[1] = gsap.timeline({
        repeat: -1,
        smoothChildTiming: true,
        paused: true,
        defaults: {
            ease: "none",
            duration: 2
        }
    });
    animTls[1]
        .to(
            "#leg_left",
            // { y: -5 },
            // { y: 5 },
            { motionPath: {
                path: MotionPathPlugin.convertToPath("#motion-circle")[0],
                // autoRotate: true
            }, },
        )
        .to(
            "#leg_right",
            {
                motionPath: {
                    start: 1,
                    end: 0,
                    path: MotionPathPlugin.convertToPath("#motion-circle")[0]
                },
            },
            "<"
        )
        .to(
            "#wheel_front",
            {
                rotateZ: 360
            },
            "<"
        )
        .to(
            "#wheel_rear",
            {
                rotateZ: 360
            },
            "<"
        )
    /*         .to(
                "#leg_right",
                { y: 5, x: -3 },
                "<"
            )
            .to(
                "#leg_right",
                { y: 5, x: 3 },
            )
            .to(
                "#leg_right",
                { y: -5, x: 3 },
            )
            .to(
                "#leg_right",
                { y: -5, x: -3 },
            ) */
}

anim1();
anim2();

document.querySelectorAll(".animation-frame").forEach((frame, i) => {
    if (i >= animTls.length)
        return;

    frame.addEventListener("mouseenter", () => {
        animTls[i].play();
        document.body.classList.add("has-eye");
        eyeAnim.play();
    });
    frame.addEventListener("mouseleave", () => {
        animTls[i].pause();
        document.body.classList.remove("has-eye");
        eyeAnim.pause();
    });
});