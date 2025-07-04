import Rt from "./components/vue/rt.vue";

console.log('Ravenna Translate loading');

document.addEventListener('DOMContentLoaded', function () {
    console.log(app);
    if (typeof app !== 'undefined' && typeof app.__vue_app__ !== 'undefined') {
        console.log('Ravenna Translate Vue detected');
        app.__vue_app__.component('ravenna-translate', Rt);
    } else {
        console.error('Ravenna Translate Vue not detected. Please ensure Vue is loaded before this script.');
    } 
});

console.log('Ravenna Translate loaded');