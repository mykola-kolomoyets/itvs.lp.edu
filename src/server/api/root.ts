import { createTRPCRouter } from "@/server/api/trpc";
import { newsRouter } from "./routers/news";
import { collectiveRouter } from "./routers/collective";
import { usersRouter } from "./routers/users";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  users: usersRouter,
  news: newsRouter,
  collective: collectiveRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
