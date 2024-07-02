import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
// Register GSAP plugins if they were imported and not already registered
export function initializeGSAPPlugins(): void {
    const registerPlugins = () => {
        try {
            if (gsap && !(gsap as any).plugins.ScrollTrigger) {
                gsap.registerPlugin(ScrollTrigger);
            }
            if (gsap && !(gsap as any).plugins.ScrollSmoother) {
                gsap.registerPlugin(ScrollSmoother);
            }
            if (gsap && !(gsap as any).plugins.SplitText) {
                gsap.registerPlugin(SplitText);
            }
        } catch (error) {
            console.error("Error registering GSAP plugins:", error);
        }
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(registerPlugins, 0);
    } else {
        document.addEventListener("DOMContentLoaded", registerPlugins);
    }
}

initializeGSAPPlugins();

export { gsap, ScrollTrigger, ScrollSmoother, SplitText };
export const clipPathDirections = {
    top: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    bottom: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    left: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    right: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    full: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    midX: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    midY: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
    center: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)"
};