export function initMissionsSwiper(Swiper: any, Parallax: any, Autoplay: any) {
    try {
        const swiper = new Swiper('.swiper.is-gallery', {
            modules: [Parallax, Autoplay],
            slidesPerView: 'auto',
            centeredSlides: true,
            speed: 800,
            loop: true,
            spaceBetween: 60,
            grabCursor: true,
            parallax: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    } catch (error) {
        console.error('Error initializing material Swiper:', error);
    }
}

