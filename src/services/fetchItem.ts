import { queryOptions } from "@tanstack/react-query";
import { client } from "../lib/open-api/api-client";

async function itemFetch(id: string) {
  const { data } = await client.GET("/api/items/{id}/", {
    params: { path: { id: +id } },
  });
  return data ?? null;
}

export const itemSingleOptions = (id: string) => {
  return queryOptions({
    queryKey: ["items", id],
    queryFn: () => itemFetch(id),
  });
};
