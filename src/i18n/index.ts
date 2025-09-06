import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const resources = {
  en: {
    translation: {
      home_title: 'Astro Journal',
      today: "Today's Horoscope",
      select_sign: 'Select Zodiac',
      write_journal: 'Write Journal',
      journal_title: 'Journal',
      save: 'Save',
      no_entries: 'No entries yet',
      language: 'Language',
    },
  },
  hi: {
    translation: {
      home_title: 'एस्ट्रो जर्नल',
      today: 'आज का राशिफल',
      select_sign: 'राशि चुनें',
      write_journal: 'जर्नल लिखें',
      journal_title: 'जर्नल',
      save: 'सेव',
      no_entries: 'अभी कोई प्रविष्टि नहीं',
      language: 'भाषा',
    },
  },
};

const locales = RNLocalize.getLocales();
const deviceLanguage = Array.isArray(locales) && locales.length > 0 ? locales[0].languageCode : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: deviceLanguage === 'hi' ? 'hi' : 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;


