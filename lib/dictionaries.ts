import 'server-only';


interface Dictionary {
    header: {
        navbar: {
            menu: string
            gettingStarted: {
                title: string;
                types: {
                    casual: string;
                    classic: string;
                };
            };
            onSale: string;
            newArrivals: string;
            brands: string;
        };
        search: {
            title: string;
            placeholder: string;
        };
    };
    footer: {
        company: {
            title: string;
            links: {
                about: string;
                features: string;
                works: string;
                career: string;
            };
        };
        help: {
            title: string;
            links: {
                customerSupport: string;
                deliveryDetails: string;
                termsConditions: string;
                privacyPolicy: string;
            };
        };
        faq: {
            title: string;
            links: {
                account: string;
                manageDeliveries: string;
                orders: string;
                payments: string;
            };
        };
        resources: {
            title: string;
            links: {
                freeEbooks: string;
                developmentTutorial: string;
                howToBlog: string;
                youtubePlaylist: string;
            };
        };
        description: string;
    };
    homePage: {
        title: string;
        description: string;
    };
}


export type Locale = 'en' | 'ru';

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
    en: () => import('@/langs/en.json').then((module) => module.default),
    ru: () => import('@/langs/ru.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
    return dictionaries[locale]();
};
