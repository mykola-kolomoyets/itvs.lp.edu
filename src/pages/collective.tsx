import type { GetServerSideProps, NextPage } from "next";
import type { CollectiveItem } from "@/types";
import Collective from "@/modules/CollectiveList";
import { appRouter } from "@/server/api/root";

type CollectivePageProps = {
  collective: CollectiveItem[];
};

const CollectivePage: NextPage<CollectivePageProps> = ({ collective }) => {
  return <Collective collective={collective} />;
};

export default CollectivePage;

export const getServerSideProps: GetServerSideProps<
  CollectivePageProps
> = async (context) => {
  const trpc = appRouter.createCaller(context as never);

  const collective = await trpc.collective.getList();

  return {
    props: {
      collective,
    },
  };
};
