import { type NextPage } from "next";
import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";

const Home: NextPage = () => {
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

export default Home;
