import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import EffectMaterial from './effect-material.esm.js';
import './effect-material.scss';


import { Autoplay, EffectCoverflow, FreeMode } from 'swiper/modules';
/**
 * Initialize Swiper instances and set up event listeners.
 */
document.addEventListener('DOMContentLoaded', () => {
    initializePostSwiper();
    duplicateSlides();
    initMaterialSwiper();
    initHeroGallery();
});

/**
 * Initialize the Swiper for posts.
 */
function initializePostSwiper() {
    const swiper = new Swiper('.swiper-posts', {
        modules: [],
        loop: true,
        slidesPerView: 4,
        spaceBetween: 16, // 1rem = 16px
        autoplay: false,
        pagination: false,
        speed: 1000,
        effect: 'slide',
        navigation: false, // Disable default navigation
        breakpoints: {
            1200: { slidesPerView: 5, spaceBetween: 16 },
            999: { slidesPerView: 3, spaceBetween: 50 },
            766: { slidesPerView: 2, spaceBetween: 50 },
            498: { slidesPerView: 1, spaceBetween: 50 }
        }
    });

    setupNavigationButtons(swiper, '.custom-swiper-button-prev', '.custom-swiper-button-next');
}

/**
 * Set up custom navigation buttons for the Swiper instance.
 * @param {Swiper} swiper - The Swiper instance.
 * @param {string} prevSelector - The selector for the previous button.
 * @param {string} nextSelector - The selector for the next button.
 */
function setupNavigationButtons(swiper: Swiper, prevSelector: string, nextSelector: string): void {
    const leftArrow = document.querySelector<HTMLButtonElement>(prevSelector);
    const rightArrow = document.querySelector<HTMLButtonElement>(nextSelector);

    if (leftArrow) {
        leftArrow.addEventListener('click', () => swiper.slidePrev());
    } else {
        console.error('Left arrow element not found');
    }

    if (rightArrow) {
        rightArrow.addEventListener('click', () => swiper.slideNext());
    } else {
        console.error('Right arrow element not found');
    }
}

function duplicateSlides() {
    const swiperGallery = document.querySelector<HTMLElement>('.swiper-gallery');
    const galleryWrapper = swiperGallery?.querySelector<HTMLElement>('.gallery_wrapper');
    const swiperGallerySlides = galleryWrapper?.querySelectorAll<HTMLElement>('.swiper-slide-gallery');

    if (galleryWrapper && swiperGallery && swiperGallerySlides && swiperGallerySlides.length > 0) {
        swiperGallerySlides.forEach(slide => {
            const clone = slide.cloneNode(true) as HTMLElement;
            galleryWrapper.appendChild(clone);
        });

        // Delay the width calculation to ensure slides are fully rendered
        setTimeout(() => {
            // Calculate total width
            const totalWidth = Array.from(swiperGallerySlides).reduce((acc, slide) => {
                return acc + slide.getBoundingClientRect().width;
            }, 0);

            galleryWrapper.style.width = `${totalWidth * 2}px`; // Set dynamic width
            // Start the animation
            startAnimation(galleryWrapper, totalWidth);
            swiperGallerySlides.forEach(slide => setHoverEvents(slide, galleryWrapper));
        }, 100); // Adjust the delay as needed
    }
}
function startAnimation(galleryWrapper: HTMLElement, totalWidth: number) {
    const duration = (totalWidth / 100) * 1; // Adjust duration based on total width
    galleryWrapper.style.animation = `scroll ${duration}s linear infinite`;

    galleryWrapper.addEventListener('animationiteration', () => {
        // Restart the animation
        galleryWrapper.style.animation = 'none';
        galleryWrapper.offsetHeight; // Trigger reflow
        galleryWrapper.style.animation = `scroll ${duration}s linear infinite`;
    });
}
// Function to pause the animation when hovering over a gallery slide   
function pauseAnimation(galleryWrapper: HTMLElement) {
    galleryWrapper.style.animationPlayState = 'paused';
}
function resumeAnimation(galleryWrapper: HTMLElement) {
    galleryWrapper.style.animationPlayState = 'running';
}

function setHoverEvents(gallerySlide: HTMLElement, galleryWrapper: HTMLElement) {
    gallerySlide.addEventListener('mouseenter', () => pauseAnimation(galleryWrapper));
    gallerySlide.addEventListener('mouseleave', () => resumeAnimation(galleryWrapper));
}

function initMaterialSwiper() {
    // Init Material Effect with responsive settings
    const swiper = new Swiper('.swiper-material', {
        modules: [EffectMaterial, Autoplay],
        slidesPerView: 2, // Default slides per view
        centeredSlides: true,
        spaceBetween: 16, // Default space between slides
        speed: 600,
        loop: true,
        grabCursor: true,
        effect: 'material',
        // @ts-ignore       
        materialEffect: {
            slideSplitRatio: 0.65,
        },

    });
}

let heroGallerySwiper: Swiper | null = null;

function initHeroGallery() {
    const isMobile = window.innerWidth <= 991;

    const swiperConfig = {
        modules: [EffectCoverflow, Autoplay, FreeMode],
        slidesPerView: 'auto' as const,
        spaceBetween: 32,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        freeMode: isMobile ? {
            momentum: false,
            enabled: true,
        } : false,
        resizeObserver: true,
        updateOnWindowResize: true,
        centeredSlides: true,
        loop: true,
        speed: 6000,
        grabCursor: true,
        effect: isMobile ? 'slide' : 'coverflow',
        coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 20,
            scale: 0.85,
            modifier: 1,
            slideShadows: true,
        },
    };

    if (heroGallerySwiper) {
        heroGallerySwiper.destroy(true, true);
    }

    heroGallerySwiper = new Swiper('.swiper-hero-gallery', swiperConfig);
}

window.addEventListener('resize', () => {
    initHeroGallery();
});

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initHeroGallery();
});




