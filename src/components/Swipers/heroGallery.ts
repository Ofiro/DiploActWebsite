export function initHeroGallery(Swiper: any, EffectCoverflow: any, Autoplay: any) {
    let heroGallerySwiper: typeof Swiper | null = null;
    try {
        const isMobile = window.innerWidth <= 991;

        const swiperConfig = {
            modules: [EffectCoverflow, Autoplay],
            slidesPerView: 'auto' as const,
            spaceBetween: 32,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            grabCursor: false,
            resizeObserver: true,
            updateOnWindowResize: true,
            centeredSlides: true,
            loop: true,
            speed: 6000,
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
    } catch (error) {
        console.error('Error initializing hero gallery Swiper:', error);
    }
}