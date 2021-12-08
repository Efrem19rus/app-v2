import { I18n } from "@lingui/core";
import { en, es, sr } from "make-plural/plurals";

//anounce which locales we are going to use and connect them to approprite plural rules
export function initTranslation(i18n) {
  i18n.loadLocaleData({
    en: { plurals: en },
    sr: { plurals: sr },
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
