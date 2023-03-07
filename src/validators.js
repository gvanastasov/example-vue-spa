import * as validators from "@vuelidate/validators";
import { i18n } from "@/locale.js";

const { createI18nMessage } = validators;

const localized = createI18nMessage({ t: i18n.global.t.bind(i18n) });

export const required = localized(validators.required);
export const email = localized(validators.email);
export const minLength = localized(validators.minLength, {
  withArguments: true,
});
