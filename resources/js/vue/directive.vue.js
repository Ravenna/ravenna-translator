import axios from 'axios';
import { md5 } from 'js-md5';

const STORAGE_KEY = 'rt-translations';
const API_URL = '/translations-api/v1';

const verifyText = (text) => {
    // regex to verify text content contains text and is not newline/punctuation only
    const regex = /[^\s.,!?;:()]+/;
    return regex.test(text);    
}

function getLanguage() {
    return navigator.language || 'en-US';
}

function getStoredTranslations() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
}

function storeTranslation(key, lang, value) {
    const translations = getStoredTranslations();

    console.log("Store translation", { key, lang, value });

    if (!translations[key]) {
        translations[key] = {};
    }

    translations[key][lang] = value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(translations));
}

function getTranslationFromStorage(key, lang) {
    const translations = getStoredTranslations();
    return translations[key]?.[lang] || null;
}

async function fetchTranslation(texts = [], lang) {
    const { data } = await axios.post(API_URL, {
        lang,
        texts: texts
    });

    console.log("Fetch translation data", data);

    const translated = data.translations;

    return translated;
}

function applyTranslation(parent, index, text) {
    // query selector dataset contains the key
    const child = parent.childNodes[index];
    if (child) {
        child.textContent = text;
    } else {
        // if no parent found, apply directly to the element
        el.textContent = text;
    }

    // remove the animation after applying translation
    removeAnimation(parent);
}

function walkElement(el, index, texts) {
    if (el.nodeType === Node.TEXT_NODE && el.textContent.trim() && verifyText(el.textContent)) {
        const text = el.textContent.trim();
        const locale = getLanguage();
        const key = md5(locale + text);
        const parent = el.parentNode;
        parent.dataset.translateKey = key;
        // simple pulse animation for visual feedback using opacity
        addPulseAnimation(parent);
        texts.push({ text, key, parent, index });
    } else if (el.nodeType === Node.ELEMENT_NODE) {
        el.childNodes.forEach((child, index) => walkElement(child, index, texts));
    }
}

async function updateElement(el, isChildren = false) {
    const lang = getLanguage();
    const texts = [];
    walkElement(el, 0, texts);

    const toTranslate = texts.filter(item => {
        const storedValue = getTranslationFromStorage(item.key, lang);

        if (storedValue) {
            applyTranslation(item.parent, item.index, storedValue);
            return false; // already translated
        }

        return true;
    });

    if (toTranslate.length === 0) {
        return;
    }

    try {
        const translated = await fetchTranslation(toTranslate.map(item => item.text), lang);

        translated.forEach(item => {
            const oldText = toTranslate.find(t => t.key === item.key);
            applyTranslation(oldText.parent, oldText.index, item.value);
            storeTranslation(item.key, lang, item.value);
        });
    } catch (error) {
        // remove any ongoing animations
        texts.forEach(item => {
            removeAnimation(item.parent);
        });
        console.error('Translation error:', error);
    }
}

function removeAnimation(el) {
    el.getAnimations().forEach(animation => {
        animation.cancel();
    });
}

function addPulseAnimation(el) {
    el.animate([
        { opacity: 1 },
        { opacity: 0.5 },
        { opacity: 1 }
    ], {
        duration: 1500,
        iterations: Infinity
    });
}

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
