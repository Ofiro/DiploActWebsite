import { SplitText } from "../../gsap/utils/config";
/**
 * Applies the SplitText effect to the specified elements.
 * @param {string} selector - The CSS selector for the elements to split.
 * @param {'chars' | 'words' | 'lines'} splitType - The type of split to apply.
 */
export function applySplitText(selector: string, splitType: 'chars' | 'words' | 'lines'): void {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    elements.forEach(element => {
        switch (splitType) {
            case 'lines':
                new SplitText(element, { type: 'lines', linesClass: 'lineChild' });
                new SplitText(element, { type: 'lines', linesClass: 'lineParent' });
                break;
            case 'words':
                new SplitText(element, { type: 'words', wordsClass: 'wordParent' });
                new SplitText(element, { type: 'words', wordsClass: 'wordChild' });
                break;
            case 'chars':
                new SplitText(element, { type: 'chars', charsClass: 'charChild' });
                new SplitText(element, { type: 'chars', charsClass: 'charParent' });
                break;
            default:
                console.error(`Invalid splitType value for element: ${element}`);
        }
    });
}