import updateElement, {removeMutationObserver} from '../core.js';

const translate = {
    mounted(el, binding) {
        const isChildren = binding.modifiers.children;
        const isGlobal = binding.modifiers.global;

        updateElement(el, isChildren);

        if (isGlobal) {
            window.addEventListener('language-changed', () => {
                updateElement(el, isChildren);
            });
        }
    },

    unmounted(el) {
        removeMutationObserver(el);
    }
};

export { translate };
