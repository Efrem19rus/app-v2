import Head from "next/head";

import { PoolsTabs } from "@/components/pages/pools/PoolsTabs";
import { StakingPage } from "@/components/pages/pools/staking";

export default function Staking() {
  return (
    <main>
      <Head>
        <title>Neptune Mutual</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PoolsTabs active="staking">
        <StakingPage />
      </PoolsTabs>
    </main>
  );
}
