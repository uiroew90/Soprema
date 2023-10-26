// i18nSetup.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import de from "../locales/de";
import fr from "../locales/fr";
import it from "../locales/it";

const defaultLanguage = "de";

i18n
  .use(
    new LanguageDetector(null, {
      order: ["querystring", "navigator"],
      lookupQuerystring: "lng",
      checkWhitelist: true,
    })
  )
  .use(initReactI18next)
  .init({
    resources: {
      de,
      fr,
      it,
    },
    load: "languageOnly",
    lng: defaultLanguage,
    whitelist: ["de", "fr", "it"],
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
