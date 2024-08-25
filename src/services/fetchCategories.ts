import { queryOptions } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { Category } from "../types";

async function categoryFetch() {
  const response = await fetch("http://127.0.0.1:8000/api/categories/");
  const data: Category[] = await response.json();
  return data;
}

export const categoryOptions = queryOptions({
  queryKey: ["categories"],
  queryFn: categoryFetch,
});

export const categoryPostIntent = "create-category";
export const categoryDeleteIntent = "delete-category";

export const categoryPost = async (formData: FormData) => {
  const title = formData.get("title");

  await fetch("http://127.0.0.1:8000/api/categories/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  queryClient.invalidateQueries(categoryOptions);
  return null;
};

export const categoryDelete = async (formData: FormData) => {
  const id = formData.get("id");
  await fetch(`http://127.0.0.1:8000/api/categories/${id}/`, {
    method: "DELETE",
  });
  queryClient.invalidateQueries(categoryOptions);
  return null;
};
