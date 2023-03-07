import { createI18n } from "vue-i18n";

const LANGUAGES = {
  ENGLISH: "en",
  DANISH: "dk",
};

const i18n = createI18n({
  locale: LANGUAGES.ENGLISH,
  fallbackLocale: LANGUAGES.ENGLISH,
  messages: {
    ...Object.keys(LANGUAGES).reduce((obj, x) => {
      const val = LANGUAGES[x];
      obj[val] = require(`@/locales/${val}.json`);
      return obj;
    }, {}),
  },
});

export { i18n, LANGUAGES };
