import { gsap } from './config';

export function createPageTransition(): Promise<void> {
    return new Promise((resolve) => {
        gsap.timeline({ onComplete: resolve })
            .to(".transition_column", { yPercent: -100, stagger: 0.1, duration: 0.8, ease: "power2.inOut" })
            .set(".transition_wrap", { display: "none" });
    });
}

export function handleClickTransition(): Promise<void> {
    return new Promise((resolve) => {
        document.querySelectorAll<HTMLAnchorElement>("a:not(.excluded-class)").forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                const currentUrl = anchor.getAttribute("href");
                if (currentUrl && anchor.hostname === window.location.hostname && !currentUrl.includes("#") && anchor.target !== "_blank") {
                    e.preventDefault();
                    gsap.timeline({ onComplete: () => { 
                        window.location.href = currentUrl; 
                        resolve();
                    }})
                        .set(".transition_wrap", { display: "flex" })
                        .fromTo(".transition_column", { yPercent: 100 }, { yPercent: 0, stagger: 0.1, duration: 0.8, ease: "power2.inOut" }, 0)
                }
            });
        });
    });
}