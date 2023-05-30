import { format } from "date-fns";
import uk from "date-fns/locale/uk";

export const formatDate = (date: Date | string) => {
  return format(new Date(date), "d MMMM yyyy", { locale: uk });
};
