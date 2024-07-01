import { gsap } from "../../gsap/utils/config";
import { applySplitText } from "./SplitText";
export function createScrubAnimation(targets: string) {
    const elements = document.querySelectorAll(targets);
    if (elements.length > 0) {
        applySplitText(targets, 'words');
        gsap.fromTo(targets + ' .wordChild', 
            { autoAlpha: 0.3 }, 
            { autoAlpha: 1,
                stagger: 0.3, // Increased stagger for smoother transition
                duration: 2, // Added duration for slower animation
                scrollTrigger: { 
                    trigger: targets,
                    start: 'top bottom',
                    end: 'center center',
                    scrub: 1 // Increased scrub value for smoother effect
                } 
            }
        );
    }
}