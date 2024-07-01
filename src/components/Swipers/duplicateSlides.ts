export function duplicateSlides() {
    try {
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
        } else {
            console.error('Error duplicating slides: Gallery elements not found or no slides available');
        }
    } catch (error) {
        console.error('Error duplicating slides:', error);
    }
}
function startAnimation(galleryWrapper: HTMLElement, totalWidth: number) {
    try {
        const duration = (totalWidth / 100) * 1; // Adjust duration based on total width
        galleryWrapper.style.animation = `scroll ${duration}s linear infinite`;

        galleryWrapper.addEventListener('animationiteration', () => {
            // Restart the animation
            galleryWrapper.style.animation = 'none';
            galleryWrapper.offsetHeight; // Trigger reflow
            galleryWrapper.style.animation = `scroll ${duration}s linear infinite`;
        });
    } catch (error) {
        console.error('Error starting animation:', error);
    }
}

// Function to pause the animation when hovering over a gallery slide   
function pauseAnimation(galleryWrapper: HTMLElement) {
    try {
        galleryWrapper.style.animationPlayState = 'paused';
    } catch (error) {
        console.error('Error pausing animation:', error);
    }
}

function resumeAnimation(galleryWrapper: HTMLElement) {
    try {
        galleryWrapper.style.animationPlayState = 'running';
    } catch (error) {
        console.error('Error resuming animation:', error);
    }
}

function setHoverEvents(gallerySlide: HTMLElement, galleryWrapper: HTMLElement) {
    try {
        gallerySlide.addEventListener('mouseenter', () => pauseAnimation(galleryWrapper));
        gallerySlide.addEventListener('mouseleave', () => resumeAnimation(galleryWrapper));
    } catch (error) {
        console.error('Error setting hover events:', error);
    }
}
