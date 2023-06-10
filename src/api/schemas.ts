import { z } from "zod";

export const userRoleSchema = z.union([
  z.literal("ADMIN"),
  z.literal("USER"),
  z.literal("AUTHOR"),
]);

const INVALID_ADMIN_ID_ERROR =
  "Ваше ID адміністратора обов'язкове!. Спробуйте знову або зайдіть з іншого обілкового запису.";

export const usersGetListExceptMeSchema = z.object({
  id: z
    .string({ required_error: INVALID_ADMIN_ID_ERROR })
    .min(1, INVALID_ADMIN_ID_ERROR),
  search: z.string().optional(),
  orderField: z
    .union([z.literal("name"), z.literal("email"), z.literal("role")])
    .optional(),
  isDesc: z.boolean().optional(),
});

export const updateUserRoleSchema = z.object({
  id: z.string(),
  role: userRoleSchema,
});
