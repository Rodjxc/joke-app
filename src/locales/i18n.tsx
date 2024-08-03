import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translation.json';
import translationES from './es/translation.json';
import translationNO from './no/translation.json';
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
.use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
      no: {
        translation: translationNO,
      }
    },
    fallbackLng: 'en',
  });

export default i18n;