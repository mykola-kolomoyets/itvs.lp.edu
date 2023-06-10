import type { z } from "zod";
import type { usersGetListExceptMeSchema } from "./schemas";
import { Session } from "next-auth";

export type UserItem = Session["user"];

export type GetUsersListExceptMeRequest = z.infer<
  typeof usersGetListExceptMeSchema
>;
