import { queryOptions } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { Item } from "../types";

async function itemFetch() {
  const response = await fetch("http://127.0.0.1:8000/api/items/");
  const data: Item[] = await response.json();
  return data;
}

export const itemOptions = queryOptions({
  queryKey: ["items"],
  queryFn: itemFetch,
});

export const itemPost = async (request: Request) => {
  if (request.method === "POST") {
    const formData = await request.formData();
    await fetch("http://127.0.0.1:8000/api/items/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
