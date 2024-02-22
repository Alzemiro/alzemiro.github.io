import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../src/assets/locales/en.json";
import ptTranslation from "../src/assets/locales/pt.json"

const resources = {
    en: {
        translation: enTranslation
    },
    pt: {
        translation: ptTranslation
    }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "pt",
        fallbackLng: "pt",
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: true
        }
    });
export default i18n;