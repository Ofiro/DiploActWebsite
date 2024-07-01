import { initializeHeaderAnimation } from "../../components/Header/header";
import { initializeScrollSmoother } from "../../components/Animations/ScrollSmoother";
import { createScrubAnimation } from "../../components/Animations/ScrubAnimation";
import { sectionConfigs } from "../../components/Animations/configs/AnimationConfig";
import { createSectionTimeline } from "../../components/Animations/Timelines";
import "../../styles/main.scss";

document.addEventListener('DOMContentLoaded', () => {
    initializeScrollSmoother();
    initializeHeaderAnimation();
    initializeTimelines();
    createScrubAnimation('.section_centered_intro p');
});

/**
 * Initializes the timelines for different sections.
 */
export function initializeTimelines(): void {
    console.log('initializing timelines');
    sectionConfigs.forEach(config => {
        if (document.querySelector(config.trigger)) {
            createSectionTimeline(config);
        }
    });
}

if (window.location.pathname.includes('news')) {
    // @ts-ignore
    window.fsAttributes = window.fsAttributes || [];
    // @ts-ignore
    window.fsAttributes.push([
        'cmsfilter',
        // @ts-ignore
        (filterInstances) => {
            console.log('cmsfilter Successfully loaded!');
            // @ts-ignore
            const [filterInstance] = filterInstances;
            // @ts-ignore
            filterInstance.listInstance.on('renderitems', (renderedItems) => {
                console.log('resize');
                window.dispatchEvent(new Event('resize'));
            });
        }
    ]);
}
