import { queryOptions } from "@tanstack/react-query";
import { Item } from "../types";

async function itemFetch(id: string) {
  const response = await fetch(`http://127.0.0.1:8000/api/items/${id}/`);
  const data: Item = await response.json();
  return data;
}

export const itemSingleOptions = (id: string) => {
  return queryOptions({
    queryKey: ["items", id],
    queryFn: () => itemFetch(id),
  });
};
