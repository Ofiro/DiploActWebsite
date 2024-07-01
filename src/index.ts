import "./gsap/utils/main";
import "./components/Swipers/mainSwiper";
import "./components/FAQ/faqs";

document.addEventListener("DOMContentLoaded", () => {
    try {
        console.log("DOM fully loaded and parsed");

        // If you have any additional initialization code, you can add it here
        console.log("Modules imported and executed");
    } catch (error) {
        console.error("Error during DOMContentLoaded initialization:", error);
    }
});

// Fallback to window load event
window.addEventListener("load", () => {
    try {
        console.log("Window fully loaded");

        // If you have any additional initialization code, you can add it here
        console.log("Modules imported and executed");
    } catch (error) {
        console.error("Error during window load initialization:", error);
    }
});