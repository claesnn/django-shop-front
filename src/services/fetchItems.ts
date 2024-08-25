import { queryOptions } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { ItemsApi } from "../lib/api";

async function itemFetch() {
  return await new ItemsApi().itemsList();
}

export const itemOptions = queryOptions({
  queryKey: ["items"],
  queryFn: itemFetch,
});

export const itemPost = async (request: Request) => {
  if (request.method === "POST") {
    const formData = await request.formData();
    await new ItemsApi().itemsCreate({
      item: {
        title: formData.get("title") as string,
        category: formData.get("category") as string,
      },
    });
    queryClient.invalidateQueries(itemOptions);
    return null;
  } else if (request.method === "DELETE") {
    const formData = await request.formData();
    const id = formData.get("id");
    await fetch(`http://127.0.0.1:8000/api/items/${id}/`, {
      method: "DELETE",
    });
    queryClient.invalidateQueries(itemOptions);
    return null;
  }
};
