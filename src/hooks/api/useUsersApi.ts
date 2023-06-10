import type { GetUsersListExceptMeRequest } from "@/api/types";
import { api } from "@/utils/api";

export const useGetUsersListExceptMe = (
  id: GetUsersListExceptMeRequest["id"],
  search?: GetUsersListExceptMeRequest["search"],
  orderField?: GetUsersListExceptMeRequest["orderField"],
  isDesc?: GetUsersListExceptMeRequest["isDesc"],
  enabled?: boolean
) => {
  console.log("useGetUsersListExceptMe rerender");
  const response = api.users.getAllExceptMe.useQuery(
    {
      id,
      search,
      orderField,
      isDesc,
    },  
    {
      enabled,
      refetchOnWindowFocus: false,
    }
  );

  return response;
};
