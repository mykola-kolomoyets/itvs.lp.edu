import { createTRPCRouter, adminRequiredProcedure } from "@/server/api/trpc";
import {
  updateUserRoleSchema,
  usersGetListExceptMeSchema,
} from "@/api/schemas";
import { prisma } from "@/server/db";

export const usersRouter = createTRPCRouter({
  getAllExceptMe: adminRequiredProcedure
    .input(usersGetListExceptMeSchema)
    .query(async ({ input }) => {
      const orderField = input.orderField ?? "name";

      const users = await prisma.user.findMany({
        // SORTING BY SELECTED FIELD IN TABLE
        orderBy: {
          [orderField]: input.isDesc ? "desc" : "asc",
        },
        where: {
          AND: [
            // FILTERING USERS BU SEARCH (NAME AND EMAIL)
            {
              OR: [
                {
                  name: {
                    contains: input.search,
                  },
                },
                {
                  email: {
                    contains: input.search,
                  },
                },
              ],
            },
            // FILTERING USERS EXCEPT ME
            {
              id: {
                not: input.id,
              },
            },
          ],
        },
        include: {
          _count: true,
        },
      });

      return users;
    }),
  updateUserRole: adminRequiredProcedure
    .input(updateUserRoleSchema)
    .mutation(async ({ input }) => {
      const user = await prisma.user.update({
        where: {
          id: input.id,
        },
        data: {
          role: input.role,
        },
      });

      return user;
    }),
});
