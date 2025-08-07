import { md5 } from 'js-md5';

const STORAGE_KEY = 'rt-translations';
const API_URL = '/translations-api/v1';
const CHUNK_SIZE = 100;

function verifyText(text) {
    // regex to verify text content contains text and is not newline/punctuation only
    const regex = /[^\s.,!?;:()]+/;
    return regex.test(text);    
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

    const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lang,
                texts: texts
            })
        })
        .then(response => response.json())
        .then(data => data.translations || [])
        .catch(error => {
            console.error('Error fetching translations:', error);
            throw new Error('Failed to fetch translations');
        });

    console.log("Fetched translations:", response);

    return response;
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

async function fetchTranslations(texts, lang) {
    for (let i = 0; i < texts.length; i += CHUNK_SIZE) {
        const chunk = texts.slice(i, i + CHUNK_SIZE);
        const invalid = [];
        let validTexts = chunk.reduce((acc, item) => {
            if (verifyText(item.text)) {
                acc.push(item);
            } else {
                console.warn(`Skipping invalid text: "${item.text}"`);
                invalid.push(item);
            }
            return acc;
        }, []);

        validTexts = validTexts.filter(item => {
            if (getTranslationFromStorage(item.key, lang)) {
                console.log("Using stored translation for", item.text);
                applyTranslation(item.parent, item.index, getTranslationFromStorage(item.key, lang));
                invalid.push(item);
                return false; // already translated
            }
            return true;
        });

        invalid.forEach(item => {
            console.warn(`Invalid text skipped: "${item.text}"`);
            removeAnimation(item.parent);
        });

        if (validTexts.length === 0) {
            continue;
        }

        console.log("Fetching translations for chunk:", validTexts);

        try {
            const translations = await fetchTranslation(validTexts.map(item => item.text), lang);
            
            translations.forEach((item) => {
                console.log(`Applying translation for key: ${item.key}, lang: ${lang}, text: ${item.value}`);
                const from = texts.filter(t => t.key === item.key);

                from.forEach(from => {
                    applyTranslation(from.parent, from.index, item.value);
                    storeTranslation(from.key, lang, item.value);
                });
            });
        } catch (error) {
            validTexts.forEach(item => {
                console.error(`Error fetching translation for: "${item.text}"`, error);
            });
            continue; // skip to next chunk on error
        }

        // always remove animations after processing a chunk
        chunk.forEach(item => {
            removeAnimation(item.parent);
        });
    }
};

function filterAndTranslateStoredTexts(texts, lang) {
    return texts.filter(item => {
        const storedValue = getTranslationFromStorage(item.key, lang);
        if (storedValue) {
            console.log("Using stored translation for", item.text, ":", storedValue);
            applyTranslation(item.parent, item.index, storedValue);
            return false; // already translated
        }
        return true;
    });
};

async function handleTexts(texts, lang) {
    const toTranslate = filterAndTranslateStoredTexts(texts, lang);

    if (toTranslate.length === 0) {
        return;
    }

    try {
        await fetchTranslations(toTranslate, lang);
    } catch (error) {
        // remove any ongoing animations
        texts.forEach(item => {
            removeAnimation(item.parent);
        });
        console.error('Translation error:', error);
    }
}

function storeMutationObserver(observer, el) {
    const translationStore = window._ravennaTranslate;

    if (!translationStore.mutationObservers) {
        translationStore.mutationObservers = {};
    }

    translationStore.mutationObservers[el] = observer;
}

function removeMutationObserver(el) {
    const translationStore = window._ravennaTranslate;

    if (translationStore.mutationObservers && translationStore.mutationObservers[el]) {
        translationStore.mutationObservers[el].disconnect();
        delete translationStore.mutationObservers[el];
    }
}

function fetchMutationTexts(mutationsList) {
    const texts = [];

    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                walkElement(node, 0, texts);
            });
        }
    }
    return texts;
}

function mutationCallback(mutationsList, observer) {
    const translationStore = window._ravennaTranslate;

    if (!observer.observedElement) {
        console.warn("No observed element found, skipping mutation handling.");
        return;
    }

    if (translationStore?.translating?.[observer.observedElement]) {
        console.warn("Element is already being translated, skipping:", observer.observedElement);
        return;
    }

    translationStore.translating && (translationStore.translating[observer.observedElement] = true);

    console.log("Mutation observed:", mutationsList);
    
    const texts = fetchMutationTexts(mutationsList);

    if (texts.length === 0) {
        console.warn("No valid texts found in mutations.");
        translationStore.translating && delete translationStore.translating[observer.observedElement];
        return;
    }

    handleTexts(texts, getLanguage())
        .catch(error => {
            console.error('Error handling mutations:', error);
        })
        .finally(() => {
            translationStore.translating && delete translationStore.translating[observer.observedElement];
        }
    );
}

async function updateElement(el, isChildren = false) {
    const translationStore = window._ravennaTranslate;

    const lang = getLanguage();

    if (translationStore?.defaultLanguages?.some(dl => {
        return dl === lang || dl === lang.split('-')[0] || dl === lang.split('-')[0].toUpperCase();
    })) {
        return;
    }

    const texts = [];
    walkElement(el, 0, texts);

    if (texts.length === 0) {
        console.warn("No translatable texts found in element:", el);
        return;
    }

    translationStore.translating && (translationStore.translating[el] = true);

    await handleTexts(texts, lang);

    translationStore.translating && delete translationStore.translating[el];

    const observer = new MutationObserver(mutationCallback);
    observer.observedElement = el;
    observer.observe(el, {
        childList: true,
        subtree: true
    });

    storeMutationObserver(observer, el);
}

export default updateElement;

export {
    storeMutationObserver,
    removeMutationObserver
}