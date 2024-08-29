import { queryOptions } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { client } from "../lib/open-api/api-client";

async function categoryFetch() {
  const { data } = await client.GET("/api/categories/", {});
  if (data) {
    return data;
  } else {
    return [];
  }
}

export const categoryOptions = queryOptions({
  queryKey: ["categories"],
  queryFn: categoryFetch,
});

export const categoryPostIntent = "create-category";
export const categoryDeleteIntent = "delete-category";

export const categoryPost = async (formData: FormData) => {
  const title = formData.get("title");

  await client.POST("/api/categories/", {
    body: {
      id: 0,
      title: title as string,
    },
  });

  queryClient.invalidateQueries(categoryOptions);
  return null;
};

export const categoryDelete = async (formData: FormData) => {
  const id = formData.get("id");

  await client.DELETE(`/api/categories/{id}/`, {
    params: { path: { id: +(id as string) } },
  });
  queryClient.invalidateQueries(categoryOptions);
  return null;
};
