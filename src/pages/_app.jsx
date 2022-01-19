import { Web3ReactProvider } from "@web3-react/core";
import "tailwindcss/tailwind.css";

import "@fontsource/poppins/latin.css";
import "@fontsource/sora/latin.css";
import "../styles/globals.css";
import { getLibrary } from "@/lib/connect-wallet/utils/web3";
import { Header } from "@/components/UI/organisms/header";
import { AppWrapper } from "@/components/UI/organisms/AppWrapper";
import { ToastProvider } from "@/lib/toast/provider";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { initTranslation } from "@/utils/lingui";
import { useRouter } from "next/router";
import { useRef } from "react";

initTranslation(i18n);

const position = {
  variant: "top_right",
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;
  const firstRender = useRef(true);

  if (pageProps.translation && firstRender.current) {
    i18n.load(locale, pageProps.translation);
    i18n.activate(locale);
    firstRender.current = false;
  }

  useEffect(() => {
    if (pageProps.translation) {
      i18n.load(locale, pageProps.translation);
      i18n.activate(locale);
    }
  }, [locale, pageProps.translation]);

  if (pageProps.noWrappers) {
    return (
      <I18nProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nProvider>
    );
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <I18nProvider i18n={i18n}>
        <AppWrapper>
          <ToastProvider variant={position.variant}>
            <Header></Header>
            <Component {...pageProps} />
          </ToastProvider>
        </AppWrapper>
      </I18nProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
