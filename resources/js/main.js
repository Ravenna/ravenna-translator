import updateElement from './core.js';

const truthful = element => element.dataset.rt_translate === 'true' || element.dataset.rt_translate === '1' || parseInt(element.dataset.rt_translate) === 1;

window.addEventListener('DOMContentLoaded', () => {
    const elements = [...document.querySelectorAll('[data-rt_translate]')].filter(el => truthful(el));

    elements.forEach(element => {
        updateElement(element);
    });

    // set up mutation observer to watch for other elements with data-rt_translate being added to the dom
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                const addedElements = [...mutation.addedNodes].filter(node => node.nodeType === 1 && truthful(node));
                addedElements.forEach(element => {
                    updateElement(element);
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});