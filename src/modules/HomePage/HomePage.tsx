import { memo } from "react";
import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>ІТВС | Головна</title>
        <meta name="description" content="ІТВС" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </MainLayout>
  );
};

export default memo(HomePage);
