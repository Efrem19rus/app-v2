import { en, es } from "make-plural/plurals";

export function initTranslation(i18n) {
  i18n.loadLocaleData({
    en: { plurals: en },
    es: { plurals: es },
    pseudo: { plurals: en },
  });
}

export async function loadTranslation(locale, isProduction = true) {
  let data;
  if (isProduction) {
    data = await import(`../../src/translations/locales/${locale}/messages`);
  } else {
    data = await import(
      `@lingui/loader!../../src/translations/locales/${locale}/messages.po`
    );
  }

  return data.messages;
}
