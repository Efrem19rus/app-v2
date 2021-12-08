import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { t } from "@lingui/macro";

export function Switcher() {
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale.split("-")[0]);

  const languages = {
    en: t`English`,
    sr: t`Serbian`,
    es: t`Spanish`,
  };

  // enable 'pseudo' locale only for development environment
  if (process.env.NEXT_PUBLIC_NODE_ENV !== "production") {
    languages["pseudo"] = t`Pseudo`;
  }

  useEffect(() => {
    router.push(router.pathname, router.pathname, { locale });
  }, [locale, router]);

  return (
    <select value={locale} onChange={(evt) => setLocale(evt.target.value)}>
      {Object.keys(languages).map((locale) => {
        return (
          <option value={locale} key={locale}>
            {languages[locale]}
          </option>
        );
      })}
    </select>
  );
}
