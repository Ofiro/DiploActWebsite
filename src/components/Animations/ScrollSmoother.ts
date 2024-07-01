import { gsap, ScrollSmoother } from "../../gsap/utils/config";
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
