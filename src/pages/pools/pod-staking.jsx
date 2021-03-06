import Head from "next/head";

import { PoolsTabs } from "@/components/pages/pools/PoolsTabs";
import { PodStakingPage } from "@/components/pages/pools/pod-staking";

export default function PodStaking() {
  return (
    <main>
      <Head>
        <title>Neptune Mutual</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PoolsTabs active="pod-staking">
        <PodStakingPage />
      </PoolsTabs>
    </main>
  );
}
