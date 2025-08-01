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
    if (texts.length === 0) {
        return [];
    }

    const chunkSize = 10;
    const chunked = [];

    for (let i = 0; i < texts.length; i += chunkSize) {
        const chunk = texts.slice(i, i + chunkSize);
        chunked.push(fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                lang,
                texts: chunk
            })
        }));
    }

    const data = await Promise.all(chunked)
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(data => data.flatMap(item => item.translations));

    console.log("Fetch translation data", data);

    return data;
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

const truthful = element => element.dataset.rt_translate === 'true' || element.dataset.rt_translate === '1' || parseInt(element.dataset.rt_translate) === 1;

const elements = [...document.querySelectorAll('[data-rt_translate]')].filter(el => truthful(el));

elements.forEach(element => {
    updateElement(element);
});