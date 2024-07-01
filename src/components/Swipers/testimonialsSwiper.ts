export function initTestimonialsSwiper(Swiper: any, Parallax: any, Autoplay: any) {
    try {
        const swiperConfig = {
            modules: [Parallax, Autoplay],
            slidesPerView: 'auto' as const,
            centeredSlides: true,
            spaceBetween: 32,
            loop: true,
            speed: 6000,
            parallax: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
        };
        const testimonialsSwiper = new Swiper('.swiper-testimonials', swiperConfig);
    } catch (error) {
        console.error('Error initializing testimonials Swiper:', error);
    }
}