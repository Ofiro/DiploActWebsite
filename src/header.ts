/**
 * Apply styles to the document root.
 * @param styles - An object containing CSS variable names and their corresponding values.
 */
function applyStyles(styles: { [key: string]: string }): void {
    const root = document.documentElement;
    for (const [property, value] of Object.entries(styles)) {
        root.style.setProperty(property, value);
    }
}

/**
 * Set the header to transparent mode.
 */
function setTransparentHeader(): void {
    const styles = getHeaderStyles('transparent');
    applyStyles(styles);
}

/**
 * Set the header to default mode.
 */
function setDefaultHeader(): void {
    const styles = getHeaderStyles('default');
    applyStyles(styles);
}

/**
 * Get the styles for the header based on the mode.
 * @param mode - The mode of the header ('default' or 'transparent').
 * @returns An object containing CSS variable names and their corresponding values.
 */
function getHeaderStyles(mode: 'default' | 'transparent'): { [key: string]: string } {
    const styleMap: { [key: string]: { [key: string]: string } } = {
        default: {
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
    return styleMap[mode];
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        const header = document.querySelector('.main-header') as HTMLElement | null;
        if (!header) throw new Error('Header element not found');

        const mode = header.getAttribute('data-mode');
        let isDefaultMode = false;

        if (mode === 'default') {
            setDefaultHeader();
            isDefaultMode = true;
        } else if (mode === 'transparent') {
            setTransparentHeader();
        } else {
            throw new Error(`Unknown header mode: ${mode}`);
        }

        if (!isDefaultMode) {
            header.addEventListener('mouseenter', setDefaultHeader);
            header.addEventListener('mouseleave', setTransparentHeader);
        }

        const hamburgerMobile = document.querySelector('.hamburger_mobile') as HTMLElement | null;
        const closeMenu = document.querySelector('.close_menu') as HTMLElement | null;

        if (hamburgerMobile) {
            hamburgerMobile.addEventListener('click', () => {
                document.body.style.overflow = 'hidden';
            });
        }

        if (closeMenu) {
            closeMenu.addEventListener('click', () => {
                document.body.style.overflow = 'auto';
            });
        }
    } catch (error) {
        console.error('Error initializing header:', error);
    }
});



