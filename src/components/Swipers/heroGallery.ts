export function initHeroGallery(Swiper: any, EffectCoverflow: any, Autoplay: any) {
    let heroGallerySwiper: typeof Swiper | null = null;
    try {
        const isMobile = window.innerWidth <= 991;

        const mobileConfig = {
            modules: [Autoplay],
            slidesPerView: 'auto' as const,
            spaceBetween: 16,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            grabCursor: true,
            loop: true,
            speed: 3000,
            effect: 'slide',
        };

        const desktopConfig = {
            modules: [EffectCoverflow, Autoplay],
            slidesPerView: 'auto' as const,
            spaceBetween: 16,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            speed: 3000,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 50,
                depth: 20,
                scale: 0.85,
                modifier: 1,
                slideShadows: true,
            },
        };

        const swiperConfig = isMobile ? mobileConfig : desktopConfig;
        heroGallerySwiper = new Swiper('.swiper-hero-gallery', swiperConfig);
    } catch (error) {
        console.error('Error initializing hero gallery Swiper:', error);
    }
}
