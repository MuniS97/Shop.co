import 'server-only';

export type Locale = 'en' | 'ru';

const dictionaries: Record<Locale, () => Promise<any>> = {
    en: () => import('@/langs/en.json').then((module) => module.default),
    ru: () => import('@/langs/ru.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<any> => {
    const dictionaryLoader = dictionaries[locale];

    if (!dictionaryLoader) {
        throw new Error(`No dictionary found for locale: ${locale}`);
    }

    return dictionaryLoader();
};
