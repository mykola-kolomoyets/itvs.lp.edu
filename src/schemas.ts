import { z } from "zod";

export const selectItemSchema = z.object({
  label: z.string(),
  value: z.string(),
});
