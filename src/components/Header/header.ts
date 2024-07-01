import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
type Styles = Record<string, string>;

/**
 * Manages the state of the header styles.
 */
class HeaderState {
    private currentStyle: Styles;
    private previousStyle: Styles;
    private readonly defaultStyle: Styles;
    private readonly transparentStyle: Styles;
    private readonly initialMode: 'default' | 'transparent';

    constructor(defaultStyle: Styles, transparentStyle: Styles, initialMode: 'default' | 'transparent') {
        this.defaultStyle = { ...defaultStyle };
        this.transparentStyle = { ...transparentStyle };
        this.initialMode = initialMode;
        this.currentStyle = initialMode === 'default' ? { ...defaultStyle } : { ...transparentStyle };
        this.previousStyle = { ...this.currentStyle };
    }

    getCurrentStyle(): Styles {
        return { ...this.currentStyle };
    }

    setWhiteMode(): void {
        this.updateStyle(this.defaultStyle);
    }

    setTransparentMode(): void {
        this.updateStyle(this.transparentStyle);
    }

    returnToDefault(): void {
        const style = this.initialMode === 'default' ? this.defaultStyle : this.transparentStyle;
        this.updateStyle(style);
    }

    returnToPrevState(): void {
        [this.currentStyle, this.previousStyle] = [this.previousStyle, this.currentStyle];
        applyStyles(this.currentStyle);
    }

    private updateStyle(newStyle: Styles): void {
        this.previousStyle = { ...this.currentStyle };
        this.currentStyle = { ...newStyle };
        applyStyles(this.currentStyle);
    }
}

export default HeaderState;

const styleMap: Record<string, Styles> = {
    white: {
        '--header--link-color': 'var(--colors--brand--900)',
        '--header--background-color': 'var(--colors--base--white)',
        '--header--border-color': 'var(--colors--brand--950)',
        '--header--logo-color-1': 'var(--brand-colors--dark-blue)',
        '--header--logo-color-2': 'var(--brand-colors--middle-blue)',
        '--header--hamburger-color': 'var(--brand-colors--middle-blue)'
    },
    transparent: {
        '--header--link-color': 'var(--colors--base--white)',
        '--header--hamburger-color': 'var(--colors--base--white)',
        '--header--background-color': 'var(--colors--base--transparent)',
        '--header--border-color': 'var(--component-colors--alpha--alpha-white-30)',
        '--header--logo-color-1': 'var(--brand-colors--middle-blue)',
        '--header--logo-color-2': 'var(--brand-colors--light-blue)'
    }
};

/**
 * Applies the given styles to the document root.
 * @param styles - The styles to apply.
 */
function applyStyles(styles: Styles): void {
    const root = document.documentElement;
    Object.entries(styles).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });
}

/**
 * Sets the overflow property of the document body.
 * @param overflow - The overflow value to set.
 */
function setBodyOverflow(overflow: 'hidden' | 'auto'): void {
    document.body.style.overflow = overflow;
}

/**
 * Initializes the header animation and scroll triggers.
 */
export function initializeHeaderAnimation(): void {
    const header = document.querySelector<HTMLElement>('.main-header');
    if (!header) {
        console.error('Header element not found');
        return;
    }

    const currentMode = (header.getAttribute('data-mode') as 'default' | 'transparent') || 'default';
    const headerState = new HeaderState(styleMap.white, styleMap.transparent, currentMode);
    applyStyles(headerState.getCurrentStyle());

    const showAnim = createShowAnimation(header);
    let hasScrolled = false;

    ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
            if (!hasScrolled) {
                hasScrolled = true;
            } else {
                handleScroll(self, showAnim, headerState);
            }
        }
    });

    onReachTop(() => headerState.returnToDefault());
    setupMenuToggle('.hamburger_mobile', true, headerState);
    setupMenuToggle('.close_menu', false, headerState);
    setupHeaderHover(header, headerState);
}

/**
 * Creates the animation for showing the header.
 * @param header - The header element.
 * @returns The GSAP tween animation.
 */
function createShowAnimation(header: HTMLElement): gsap.core.Tween {
    return gsap.from(header, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
        ease: "power1.inOut"
    }).progress(1);
}

/**
 * Sets up the menu toggle functionality.
 * @param selector - The selector for the toggle element.
 * @param isOpen - Whether the menu is opening or closing.
 * @param headerState - The header state instance.
 */
function setupMenuToggle(selector: string, isOpen: boolean, headerState: HeaderState): void {
    const element = document.querySelector<HTMLElement>(selector);
    element?.addEventListener('click', () => {
        const smoother = ScrollSmoother.get();
        smoother?.paused(isOpen);
        setBodyOverflow(isOpen ? 'hidden' : 'auto');
        if (isOpen) {
            headerState.setWhiteMode();
        } else {
            headerState.returnToPrevState();
        }
    });
}

let lastScrollDirection: number | null = null;

/**
 * Handles the scroll event to show or hide the header.
 * @param self - The ScrollTrigger instance.
 * @param showAnim - The show animation.
 * @param headerState - The header state instance.
 */
function handleScroll(self: ScrollTrigger, showAnim: gsap.core.Tween, headerState: HeaderState): void {
    if (self.direction !== lastScrollDirection) {
        if (self.direction === -1) {
            showAnim.play();
            headerState.setWhiteMode();
        } else {
            showAnim.reverse();
            headerState.returnToDefault();
        }
        lastScrollDirection = self.direction;
    }
}

/**
 * Sets up a ScrollTrigger to call a callback when the top of the page is reached.
 * @param callback - The callback to call when the top is reached.
 */
function onReachTop(callback: () => void): void {
    ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top top",
        onEnterBack: callback
    });
}
// ... existing code ...

// ... existing code ...

/**
 * Sets up hover functionality to change the header state and styles to white if the initial mode or current mode is transparent.
 * @param header - The header element.
 * @param headerState - The header state instance.
 */
function setupHeaderHover(header: HTMLElement, headerState: HeaderState): void {
    header.addEventListener('mouseenter', () => {
        if (JSON.stringify(headerState.getCurrentStyle()) === JSON.stringify(styleMap.transparent)) {
            headerState.setWhiteMode();
        }
    });

    header.addEventListener('mouseleave', () => {
        if (JSON.stringify(headerState.getCurrentStyle()) === JSON.stringify(styleMap.white)) {
            headerState.returnToPrevState();
        }
    });
}

// ... existing code ...
// ... existing code ...