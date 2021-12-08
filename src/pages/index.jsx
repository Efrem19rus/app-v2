import { Switcher } from "@/components/Switcher";
import { loadTranslation } from "@/lib/lingui/utils";
import { t, Trans } from "@lingui/macro";
import Head from "next/head";

export const getStaticProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale,
    process.env.NODE_ENV === "production"
  );

  return {
    props: {
      translation,
    },
  };
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Neptune Mutual</title>
        <meta
          name="description"
          content={t`Neptune Mutual provides you with guaranteed stablecoin liquidity to reduce your risk exposure by hedging against possible capital risks and smart contract vulnerabilities.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Neptune Mutual</h1>
        <p>
          <Trans id="hello.world">Hello world</Trans>
        </p>
        <Switcher />
      </main>
    </div>
  );
}
