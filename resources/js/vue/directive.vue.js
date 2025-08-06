import updateElement from '../core.js';

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
        if (el._translateCleanup) {
            el._translateCleanup();
        }
    }
};

export { translate };
