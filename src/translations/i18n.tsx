import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translation.json';
import translationES from './es/translation.json';
import translationNO from './no/translation.json';


i18n
  .use(initReactI18next)
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