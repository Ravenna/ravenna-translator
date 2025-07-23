import axios from 'axios';
import { md5 } from 'js-md5';

const STORAGE_KEY = 'rt-translations';
const API_URL = '/translations-api/v1';

function getLanguage() {
    return navigator.language || 'en';
}

function getStoredTranslations() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
}

function storeTranslation(key, lang, value) {
    const translations = getStoredTranslations();

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

async function fetchTranslation(text, lang) {
    console.log(`Fetching translation for "${text}" in language "${lang}"`);
    try {
        const { data } = await axios.post(API_URL, {
            lang,
            texts: [text]
        });

        console.log("Fetch translation data", data);

        const translated = data.translations || text;
        console.log(`Translation for "${text}" in "${lang}":`, translated[0]);
        storeTranslation(text, lang, translated[0].value);
        return translated[0].value;
    } catch (err) {
        console.error(`Error fetching translation for "${text}"`, err);
        return text;
    }
}

function applyTranslation(el, text, isChildren = false) {
    if (isChildren) {
        el.querySelectorAll('*').forEach(child => {
            if (child.childNodes.length === 1 && child.childNodes[0].nodeType === 3) {
                child.textContent = text;
            }
        });
    } else {
        el.textContent = text;
    }
}

async function updateElement(el, isChildren = false) {
    const lang = getLanguage();
    const key = md5(el.textContent.trim());
    let translated = getTranslationFromStorage(key, lang);

    if (!translated) {
        translated = await fetchTranslation(el.textContent, lang);
    }

    applyTranslation(el, translated, isChildren);
    storeTranslation(key, lang, translated);
}

const translate = {
    mounted(el, binding) {
        // clear local storage for testing purposes
        localStorage.removeItem(STORAGE_KEY);

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
