import { gsap } from "gsap";  
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { initializeHeaderAnimation } from "../../components/Header/header";
import { clipPathDirections } from "./config";

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
    initializeScrollSmoother();
    initializeHeaderAnimation();
    initializeTimelines();
    createScrubAnimation('.section_centered_intro p');
});
export function logMessage(): void {
    console.log('Hello, !!');
}
/**
 * Initializes the ScrollSmoother plugin.
 * Only enable on screens larger or equal to 992px.
 */
export function initializeScrollSmoother(): void {
    if (window.innerWidth >= 992) {
        try {
            ScrollSmoother.create({
                wrapper: ".page-wrapper",
                content: ".main-wrapper",
                smooth: 0.8,
                effects: true,
                normalizeScroll: true,
                onUpdate: (self: any) => {},
                onStop: (self: any) => {}
            });
        } catch (error) {
            console.error("Error creating ScrollSmoother:", error);
        }
    }
}

/**
 * Initializes the timelines for different sections.
 */
export function initializeTimelines(): void {
    console.log('initializing timelines');
    const sectionConfigs: SectionTimelineConfig[] = [
        {
            trigger: '.section_video_hero',
            animations: [
                { targets: '.section_video_hero', from: { opacity: 0 }, to: { opacity: 1 } },
                { targets: '.section_video_hero .display_xl-bold .lineChild', from: { opacity: 0.8, y: 100 }, to: { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, offset: "-=0.4" },
                { targets: '.hero_arrow_down_wrapper', from: { scale: 2, opacity: 0 }, to: { scale: 1, opacity: 1 } }
            ],
            splitText: [
                { selector: '.section_video_hero .display_xl-bold', type: 'lines' }
            ]
        },
        {
            trigger: '.section_intro',
            scrollTrigger: true,
            animations: [
                { targets: '.intro_image-content img', from: { scale: 2, autoAlpha: 0.2, duration: 1.5 } },
                { targets: '.intro_image-content', from: { clipPath: clipPathDirections.center, scale: 1 }, to: { clipPath: clipPathDirections.full, duration: 1, ease: 'power2.inOut' }, offset: 0 },
                { targets: '.intro_image-content', to: { scale: 0.95, duration: 1, ease: 'power2.out' }, offset: 0 },
                { targets: '.intro_content .display_small_bold .lineChild', from: { opacity: 0.4, yPercent: 100 }, to: { opacity: 1, yPercent: 0, duration: 1.4, stagger: 0.1, ease: 'power2.out' }, offset: 0 },
                { targets: '.intro_content .display_xs_medium', from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0, duration: 1.4, ease: 'power2.out' }, offset: 0.8 },
                { targets: '.intro_content .outline-button', from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0, duration: 1.4, ease: 'power2.out' }, offset: 1 }
            ],
            splitText: [
                { selector: '.intro_content .display_small_bold', type: 'lines' }
            ]
        },
        {
            trigger: '.section_latest_news',
            scrollTrigger: true,
            animations: [
                { targets: '.section_latest_news .news_item', from: { opacity: 0 }, to: { opacity: 1, duration: 0.8, stagger: 0.5, ease: 'power2.out' } },
                { targets: '.section_latest_news .news_item_image_wrapper', from: { clipPath: clipPathDirections.midX }, to: { clipPath: clipPathDirections.full, stagger: 0.5, duration: 1, ease: 'power2.out' }, offset: 0 },
                { targets: '.section_latest_news .button', from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0, stagger: 0.5, duration: 1.4, ease: 'power2.out' }, offset: 1 }
            ]
        },
        {
            trigger: '.section_cta',
            scrollTrigger: true,
            animations: [
                { targets: '.section_cta .display_xl-bold .lineChild', from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0, duration: 1, stagger: 0.5 }, offset: 0 },
                { targets: '.section_cta .pattern_overlay', from: { opacity: 0, duration: 1, ease: 'power2.out' }, offset: 0 },
                { targets: '.section_cta .button', from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0, stagger: 0.5, duration: 1.4, ease: 'power2.out' }, offset: 1 }
            ],
            splitText: [
                { selector: '.section_cta .display_xl-bold', type: 'lines' }
            ]
        },
        {
            trigger: '.section_social_feed',
            scrollTrigger: true,
            animations: [
                { targets: '.section_social_feed .display_lg-bold .lineChild', from: { opacity: 0.6, yPercent: 200 }, to: { opacity: 1, yPercent: 0, duration: 0.6, stagger: 0.1 }, offset: 0 },
                { targets: '.section_social_feed .social_icon_linkblock', from: { opacity: 0 }, to: { opacity: 1, duration: 1, stagger: 0.2 }, offset: 0 },
                { targets: '.section_social_feed .ig_post_wrapper', from: { opacity: 0.3, scale: 0.9, clipPath: clipPathDirections.bottom }, to: { opacity: 1, scale: 1, clipPath: clipPathDirections.full, duration: 1, stagger: 0.2 }, offset: 0 }
            ],
            splitText: [
                { selector: '.section_social_feed .display_lg-bold', type: 'lines' }
            ]
        },
        {
            trigger: '.section_footer',
            scrollTrigger: true,
            animations: [
                { targets: '.section_footer .footer_link', from: { autoAlpha: 0.2, duration: 1.2 }, offset: 0 },
                { targets: '.section_footer .display_md-bold .lineChild', from: { opacity: 0.8, y: 100 }, to: { opacity: 1, y: 0, duration: 0.8, stagger: 0.075 }, offset: 0 },
                { targets: '.section_footer .text-field', from: { opacity: 0 }, to: { opacity: 1, duration: 0.4, stagger: 0.15 }, offset: 1 },
                { targets: '.section_footer .footer_form_button_wrapper', from: { opacity: 0 }, to: { opacity: 1, duration: 1.2 }, offset: 1 },
                { targets: '.section_footer .footer_logo', from: { opacity: 0, scale: 0.5 }, to: { opacity: 1, scale: 1, duration: 0.4 }, offset: 1.5 }
            ],
            splitText: [
                { selector: '.section_footer .display_md-bold', type: 'lines' }
            ]
        },
        {
            trigger: '.section_page_header',
            scrollTrigger: true,
            animations: [
                { targets: '.section_page_header h1 .wordChild', from: { opacity: 0, yPercent: 120 }, to: { opacity: 1, yPercent: 0, duration: 1, stagger: 0.5 }, offset: 0 },
                { targets: '.section_page_header h2 .lineChild', from: { opacity: 0, yPercent: 100 }, to: { opacity: 1, yPercent: 0, duration: 1, stagger: 0.2 }, offset: 0.3 }
            ],
            splitText: [
                { selector: '.section_page_header h1', type: 'words' },
                { selector: '.section_page_header h2', type: 'lines' }
            ]
        },
        {
            trigger: '.section_project',
            scrollTrigger: true,
            multiple: true,
            animations: [
                { targets: '.section_project h3 .lineChild', from: { opacity: 0.3, yPercent: 150 }, to: { opacity: 1, yPercent: 0, duration: 1, stagger: 0.5 }, offset: 0 },
                { targets: '.section_project .project_picture img', from: { scale: 2, autoAlpha: 0.2, duration: 0.5 }, offset: 0 },
                { targets: '.section_project .project_picture', from: { clipPath: clipPathDirections.center, scale: 1 }, to: { clipPath: clipPathDirections.full, duration: 1, ease: 'power2.inOut' }, offset: 0 },
                { targets: '.section_project .project_picture', to: { scale: 0.95, duration: 1, ease: 'power2.out' }, offset: 1 },
                { targets: '.section_project h4', from: { opacity: 0 }, to: { opacity: 1, duration: 1, stagger: 0.2 }, offset: 1 },
                { targets: '.section_project .button', from: { yPercent: 100, opacity: 0 }, to: { yPercent: 0, opacity: 1, duration: 1, stagger: 0.2 }, offset: 1 }
            ],
            splitText: [
                { selector: '.section_project h3', type: 'lines' }
            ]
        },
        {
            trigger:'.section_impact_numbers',
            scrollTrigger: true,
            animations: [
                { targets: '.section_impact_numbers h3', from: { autoAlpha: 0 }, to: { autoAlpha: 1, duration: 1, stagger: 0.3 }, offset: 0 },
                { targets: '.section_impact_numbers h4', from: { autoAlpha: 0 }, to: { autoAlpha: 1, duration: 1, stagger: 0.5 }, offset: 0.5 }
            ],
        },
        {
            trigger: '.section_blocks',
            scrollTrigger: true,
            animations: [
                { targets: '.section_blocks .block_wrapper', from: {autoAlpha: 0.4, clipPath: clipPathDirections.center}, to: {autoAlpha: 1, clipPath: clipPathDirections.full, duration: 1, stagger: 0.35, ease: 'power5.inOut'}, offset: 0 },
                { targets: '.section_blocks h3', from: {autoAlpha: 0}, to: {autoAlpha: 1, duration: 1, stagger: 0.5}, offset: 1 },
                { targets: '.section_blocks .block_arrow_wrapper', from: {autoAlpha: 0}, to: {autoAlpha: 1, duration: 1, stagger: 0.5}, offset: 1 }
            ]
        },
        {
            trigger: '.section_gallery_carousel',
            scrollTrigger: true,
            animations: [
                {targets: '.section_gallery_carousel .swiper-slide-gallery', from: {autoAlpha: 0.4, clipPath: clipPathDirections.top}, to: {autoAlpha: 1, clipPath: clipPathDirections.full, duration: 1, stagger: 0.35, ease: 'power5.inOut'}, offset: 0 }
            ]
       },
       {
        trigger: '.section_hero_header',
        scrollTrigger: true,
        animations: [
            { targets: '.section_hero_header h1 .lineChild', from: { opacity: 0.8, yPercent: 100 }, to: { opacity: 1, yPercent: 0, duration: 1, stagger: 0.5 } },
            { targets: '.section_hero_header p', from: { opacity: 0, yPercent: 10 }, to: { opacity: 1, yPercent: 0, duration: 1, stagger: 0.5 }, offset: 1 },
            { targets: '.section_hero_header .button', from: { opacity: 0, yPercent: 50 }, to: { opacity: 1, yPercent: 0, duration: 1, stagger: 0.5 }, offset: 1 }
        ],
        splitText: [
            { selector: '.section_hero_header h1', type: 'lines' }
        ]
       }

       

    ];

    sectionConfigs.forEach(createSectionTimeline);
}

/**
 * Interface for animation configuration.
 */
interface AnimationConfig {
    targets: string;
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    offset?: string | number;
    ease?: string; // Add default ease property
}

/**
 * Interface for section timeline configuration.
 */
interface SectionTimelineConfig {
    trigger: string;
    scrollTrigger?: boolean;
    animations: AnimationConfig[];
    splitText?: { selector: string, type: 'chars' | 'words' | 'lines' }[];
    multiple?: boolean; // Add this line
}

/**
 * Creates a timeline for a given section configuration.
 * @param {SectionTimelineConfig} config - The configuration for the section timeline.
 * @returns {gsap.core.Timeline} - The created timeline.
 */
function createSectionTimeline(config: SectionTimelineConfig): gsap.core.Timeline {
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

/**
 * Applies the SplitText effect to the specified elements.
 * @param {string} selector - The CSS selector for the elements to split.
 * @param {'chars' | 'words' | 'lines'} splitType - The type of split to apply.
 */
function applySplitText(selector: string, splitType: 'chars' | 'words' | 'lines'): void {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    elements.forEach(element => {
        switch (splitType) {
            case 'lines':
                new SplitText(element, { type: 'lines', linesClass: 'lineChild' });
                new SplitText(element, { type: 'lines', linesClass: 'lineParent' });
                break;
            case 'words':
                new SplitText(element, { type: 'words', wordsClass: 'wordParent' });
                new SplitText(element, { type: 'words', wordsClass: 'wordChild' });
                break;
            case 'chars':
                new SplitText(element, { type: 'chars', charsClass: 'charChild' });
                new SplitText(element, { type: 'chars', charsClass: 'charParent' });
                break;
            default:
                console.error(`Invalid splitType value for element: ${element}`);
        }
    });
}

function createScrubAnimation(targets: string) {
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
