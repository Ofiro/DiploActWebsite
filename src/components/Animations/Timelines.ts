import { gsap } from "../../gsap/utils/config";
import { applySplitText } from "./SplitText";
import { SectionTimelineConfig } from "./configs/AnimationConfig";


/**
 * Creates a timeline for a given section configuration.
 * @param {SectionTimelineConfig} config - The configuration for the section timeline.
 * @returns {gsap.core.Timeline} - The created timeline.
 */
export function createSectionTimeline(config: SectionTimelineConfig): gsap.core.Timeline {
    if (config.splitText) {
        config.splitText.forEach(split => {
            applySplitText(split.selector, split.type);
        });
    }

    const elements = document.querySelectorAll(config.trigger);
    const timelines: gsap.core.Timeline[] = [];

    const applyAnimations = (element: Element) => {
        const q = gsap.utils.selector(element);
        const tl = gsap.timeline({
            scrollTrigger: config.scrollTrigger ? {
                trigger: element,
                start: 'top 80%', // Adjusted to start earlier
                toggleActions: 'play reverse play reverse',
            } : undefined
        });

        config.animations.forEach(animation => {
            const targetElements = q(animation.targets);
            if (targetElements.length > 0) {
                const fromVars = { ...animation.from, ease: animation.ease || 'power1.inOut' }; // Default ease
                const toVars = { ...animation.to, ease: animation.ease || 'power1.inOut' }; // Default ease

                if (animation.from && animation.to) {
                    tl.fromTo(targetElements, fromVars, toVars, animation.offset);
                } else if (animation.from) {
                    tl.from(targetElements, fromVars, animation.offset);
                } else if (animation.to) {
                    tl.to(targetElements, toVars, animation.offset);
                }
            }
        });

        timelines.push(tl);
    };

    if (config.multiple) {
        elements.forEach(applyAnimations);
    } else if (elements.length > 0) {
        applyAnimations(elements[0]);
    }

    return timelines.length > 0 ? timelines[0] : gsap.timeline(); // Return the first timeline or an empty one
}