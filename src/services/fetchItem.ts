import { queryOptions } from "@tanstack/react-query";
import { ItemsApi } from "../lib/api";

async function itemFetch(id: string) {
  return await new ItemsApi().itemsRetrieve({
    id: +id,
  });
}

export const itemSingleOptions = (id: string) => {
  return queryOptions({
    queryKey: ["items", id],
    queryFn: () => itemFetch(id),
  });
};
