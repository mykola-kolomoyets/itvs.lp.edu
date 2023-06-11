import {
  newsCreateSchema,
  newsDeleteSchema,
  newsGetItemSchema,
} from "@/api/schemas";
import {
  authorRequiredProcedure,
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";
import { prisma } from "@/server/db";
import { slugify } from "@/utils/slugifyString";

export const newsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    return await prisma.article.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        posterUrl: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  getList: publicProcedure.query(async () => {
    return await prisma.article.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        posterUrl: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  getMy: authorRequiredProcedure.query(async ({ ctx }) => {
    return await prisma.article.findMany({
      where: {
        authorId: ctx.session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  getItem: publicProcedure.input(newsGetItemSchema).query(async ({ input }) => {
    return await prisma.article.findUnique({
      where: {
        id: input.id,
      },
    });
  }),
  create: authorRequiredProcedure
    .input(newsCreateSchema)
    .mutation(({ input, ctx }) => {
      const { title, content, posterUrl } = input;

      const slug = slugify(title);

      const newArticle = prisma.article.create({
        data: {
          title,
          content,
          posterUrl,
          slug,
          authorId: ctx.session.user.id,
        },
      });

      return newArticle;
    }),
  delete: authorRequiredProcedure
    .input(newsDeleteSchema)
    .mutation(async ({ input }) => {
      return await prisma.article.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
