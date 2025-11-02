import { gsap } from "gsap";
    
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const imgModal = document.querySelector(".img-modal");
const modalBg = imgModal.querySelector(".modal__bg");
const enlarged = imgModal.querySelector(".enlarged-img");
const enlargedImg = enlarged.querySelector("img");
const enlargedCaption = enlarged.querySelector("figcaption");
console.log(enlargedImg);

function windowMin() {
    if (activeImg) {
        decrease(activeImg);
    }
}

function enlarge(img) {
    const onload = () => {
        Flip.fit(imgModal, img, {scale: true, fitChild: enlargedImg});

        const minState = Flip.getState(enlarged);

        gsap.set(imgModal, {clearProps: true});
        gsap.set(imgModal, {
            visibility: "visible",
        });

        enlargedCaption.innerText = img.alt;

        gsap.fromTo(modalBg, {
            duration: 0.3,
            ease: 'power1.inOut',
            autoAlpha: 0
        }, {autoAlpha: 1});

        gsap.fromTo(enlargedCaption, {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        });

        Flip.from(minState, {
            duration: 0.3,
            ease: 'power1.inOut',
            scale: true,
        });

        enlargedImg.removeEventListener("load", onload);
        window.addEventListener("click", windowMin);
    };

    enlargedImg.src = img.src;
    enlargedImg.addEventListener("load", onload);
}

function decrease(img) {
    window.removeEventListener("click", windowMin);
    // gsap.to(imgModal, { autoAlpha: 0, duration: 0.2, ease: 'power1.inOut' });


    const maxState = Flip.getState(enlarged);

    Flip.fit(imgModal, img, {scale: true, fitChild: enlargedImg});

    gsap.to(modalBg, { autoAlpha: 0, duration: 0.4, ease: 'power1.inOut' });
    gsap.to(enlargedCaption, { autoAlpha: 0, duration: 0.4, ease: 'power1.inOut' });

    Flip.from(maxState, {
        duration: 0.4,
        scale: true,
    }).set(imgModal, {
        visibility: 'hidden'
    });

    activeImg = null;
}

const imgs = document.querySelectorAll(".flip-img");
let activeImg;
imgs.forEach(img => {
    img.addEventListener("click", () => {
        if (activeImg)
            return;

        activeImg = img;
        enlarge(img);
    });
});