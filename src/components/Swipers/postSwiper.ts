import { setupNavigationButtons } from './setupNavigation';

export function initializePostSwiper(Swiper: any) {
    try {
        const swiper = new Swiper('.swiper-posts', {
            modules: [],
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            autoplay: false,
            pagination: false,
            speed: 1000,
            effect: 'slide',
            navigation: false,
        });

        setupNavigationButtons(swiper, '.custom-swiper-button-prev', '.custom-swiper-button-next');
    } catch (error) {
        console.error('Error initializing post Swiper:', error);
    }
}