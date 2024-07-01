export function setupNavigationButtons(swiper: any, prevSelector: string, nextSelector: string): void {
    try {
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
    } catch (error) {
        console.error('Error setting up navigation buttons:', error);
    }
}