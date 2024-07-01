document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('mousemove', (event) => {
        const container = document.querySelector('.light_gradient') as HTMLElement | null;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const mouseXpercentage = Math.round((event.clientX - containerRect.left) / containerRect.width * 100);
        const mouseYpercentage = Math.round((event.clientY - containerRect.top) / containerRect.height * 100);

        container.style.background = `radial-gradient(circle at ${mouseXpercentage}% ${mouseYpercentage}%, var(--brand-colors--light-blue) 50%, var(--brand-colors--middle-blue))`;
    });
    
    const faqItems: NodeListOf<HTMLElement> = document.querySelectorAll('.faq_item_question');
    
    if (faqItems.length === 0) {
        return;
    }

    const toggleFaq = (item: HTMLElement) => {
        const answerWrapper = item.nextElementSibling as HTMLElement | null;
        if (answerWrapper && answerWrapper.classList.contains('faq_answer_wrapper')) {
            // Close all other faq answers
            faqItems.forEach(otherItem => {
                const otherAnswerWrapper = otherItem.nextElementSibling as HTMLElement | null;
                if (otherAnswerWrapper && otherAnswerWrapper !== answerWrapper) {
                    otherAnswerWrapper.classList.remove('is--active');
                    const otherSecondLine = otherItem.querySelector('.faq_icon_line.is--second-line') as HTMLElement | null;
                    if (otherSecondLine) {
                        otherSecondLine.classList.remove('is--active');
                    }
                }
            });

            // Toggle the clicked faq answer
            answerWrapper.classList.toggle('is--active');
            
            const secondLine = item.querySelector('.faq_icon_line.is--second-line') as HTMLElement | null;
            if (secondLine) {
                secondLine.classList.toggle('is--active');
            }
        }
    }
});

export {};