import { en, es } from "make-plural/plurals";

export function initTranslation(i18n) {
  i18n.loadLocaleData({
    en: { plurals: en },
    es: { plurals: es },
    pseudo: { plurals: en },
  });
}
