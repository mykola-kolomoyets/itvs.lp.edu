import type { CollectiveItem } from "@/types";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { MOCK_ARTICLE_IMAGE } from "@/constants";

const MOCK_COLLECTIVE: CollectiveItem[] = new Array(12)
  .fill("")
  .map((_, index) => {
    return {
      id: index.toString(),
      fullName: "Кустра Наталія Омелянівна",
      imageUrl: MOCK_ARTICLE_IMAGE,
      degree: "доктор наук",
    };
  });

export const collectiveRouter = createTRPCRouter({
  getList: publicProcedure.query(async () => {
    return await new Promise<CollectiveItem[]>((resolve) => {
      setTimeout(() => {
        resolve(MOCK_COLLECTIVE);
      }, 1000);
    });
  }),
});
