import { queryOptions } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { client } from "../lib/open-api/api-client";

async function itemFetch() {
  const { data } = await client.GET("/api/items/", {});
  if (data) {
    return data;
  } else {
    return [];
  }
}

export const itemOptions = queryOptions({
  queryKey: ["items"],
  queryFn: itemFetch,
});

export const itemPost = async (request: Request) => {
  if (request.method === "POST") {
    const formData = await request.formData();
    await client.POST("/api/items/", {
      body: {
        id: 0,
        title: formData.get("title") as string,
        category: +(formData.get("category") as string),
        price: formData.get("price") as string,
        image: formData.get("image") as string,
        created_at: "",
      },
    });
    queryClient.invalidateQueries(itemOptions);
    return null;
  } else if (request.method === "DELETE") {
    const formData = await request.formData();
    const id = formData.get("id");
    await client.DELETE("/api/items/{id}/", {
      params: { path: { id: +(id as string) } },
    });
    queryClient.invalidateQueries(itemOptions);
    return null;
  }
};
