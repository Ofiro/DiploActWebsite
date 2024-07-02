import { initializeHeaderAnimation } from "../../components/Header/header";
import { initializeScrollSmoother } from "../../components/Animations/ScrollSmoother";
import { createScrubAnimation } from "../../components/Animations/ScrubAnimation";
import { sectionConfigs } from "../../components/Animations/configs/AnimationConfig";
import { createSectionTimeline } from "../../components/Animations/Timelines";
import { createPageTransition , handleClickTransition } from "./pageTransition";
import "../../styles/main.scss";

document.addEventListener('DOMContentLoaded', async () => {
    initializeScrollSmoother();
    initializeHeaderAnimation();
    if (window.innerWidth > 991) {
        handleClickTransition();
        createPageTransition();
    }
    
    if (!window.location.pathname.includes('news')) {
        initializeTimelines();
        createScrubAnimation('.section_centered_intro p');
    } 

});

/**
 * Initializes the timelines for different sections.
 */
export function initializeTimelines(): void {
    sectionConfigs.forEach(config => {
        if (document.querySelector(config.trigger)) {
            createSectionTimeline(config);
        }
    });
}
