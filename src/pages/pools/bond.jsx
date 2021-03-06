import Head from "next/head";
import { PoolsTabs } from "@/components/pages/pools/PoolsTabs";
import BondPage from "@/components/pages/pools/bond";

export default function Bond() {
  return (
    <main>
      <Head>
        <title>Neptune Mutual</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PoolsTabs active="bond">
        <BondPage />
      </PoolsTabs>
    </main>
  );
}
