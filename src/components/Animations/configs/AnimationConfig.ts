import { clipPathDirections } from '../../../gsap/utils/config';

/**
 * Interface for animation configuration.
 */
export interface AnimationConfig {
    targets: string;
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    offset?: string | number;
    ease?: string; // Add default ease property
}

export interface SectionTimelineConfig {
    trigger: string;
    scrollTrigger?: boolean;
    animations: AnimationConfig[];
    splitText?: { selector: string, type: 'chars' | 'words' | 'lines' }[];
    multiple?: boolean; // Add this line
}

// Convert sectionConfigs array to a Map for efficient lookups
const sectionConfigsArray: SectionTimelineConfig[] = [
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

// Create a Map from the array
export const sectionConfigs = new Map(sectionConfigsArray.map(config => [config.trigger, config]));

/**
 * Function to get animations based on the trigger.
 * @param trigger - The trigger to search for.
 * @returns The matching SectionTimelineConfig or undefined if not found.
 */
export function getAnimationsByTrigger(trigger: string): SectionTimelineConfig | undefined {
    return sectionConfigs.get(trigger);
}