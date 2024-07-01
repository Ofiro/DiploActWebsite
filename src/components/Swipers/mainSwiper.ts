import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Autoplay, EffectCoverflow, FreeMode, Parallax } from 'swiper/modules';
import { initializePostSwiper } from './postSwiper';
import { duplicateSlides } from './duplicateSlides';
import { initHeroGallery } from './heroGallery';
import { initTestimonialsSwiper } from './testimonialsSwiper';
import { initMissionsSwiper } from './materialSwiper';

/**
 * Initialize Swiper instances and set up event listeners.
 */
const initSwipers = () => {
    try {
        if (document.querySelector('.swiper-posts')) {
            initializePostSwiper(Swiper);
        }
        if (document.querySelector('.swiper-gallery')) {
            duplicateSlides();
        }
        if (document.querySelector('.swiper.is-gallery')) {
            initMissionsSwiper(Swiper, Parallax, Autoplay);
        }
        if (document.querySelector('.swiper-hero-gallery')) {
            initHeroGallery(Swiper, EffectCoverflow, Autoplay);
        }
        if (document.querySelector('.swiper-testimonials')) {
            initTestimonialsSwiper(Swiper, Parallax, Autoplay);
        }
    } catch (error) {
        console.error('Error initializing Swiper instances:', error);
    }
};

document.addEventListener('DOMContentLoaded', initSwipers);
//if page has 'news' in its url