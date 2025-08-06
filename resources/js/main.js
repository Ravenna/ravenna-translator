import updateElement from './core.js';

const truthful = element => element.dataset.rt_translate === 'true' || element.dataset.rt_translate === '1' || parseInt(element.dataset.rt_translate) === 1;

window.addEventListener('DOMContentLoaded', () => {
    const elements = [...document.querySelectorAll('[data-rt_translate]')].filter(el => truthful(el));
    elements.forEach(element => {
        updateElement(element);
    });
});