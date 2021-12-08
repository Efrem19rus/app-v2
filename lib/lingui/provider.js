import { initTranslation } from "./utils";
import { i18n } from "@lingui/core";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { I18nProvider } from "@lingui/react";

//initialization function
initTranslation(i18n);

export const LinguiProvider = ({ children, pageProps }) => {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;
  const firstRender = useRef(true);

  // run only once on the first render (for server side)
  if (pageProps.translation && firstRender.current) {
    //load the translations for the locale
    i18n.load(locale, pageProps.translation);
    i18n.activate(locale);
    // render only once
    firstRender.current = false;
  }

  // listen for the locale changes
  useEffect(() => {
    if (pageProps.translation) {
      i18n.load(locale, pageProps.translation);
      i18n.activate(locale);
    }
  }, [locale, pageProps.translation]);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};
