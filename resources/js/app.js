import * as RTTranslate from './vue/directive.vue.js';

document.addEventListener('DOMContentLoaded', () => {
    if(app) {
        console.log(app);
        app.__vue_app__.directive('translate', RTTranslate.default);
    }
});

console.log('RTTranslate directive loaded');