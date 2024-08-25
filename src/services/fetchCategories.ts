import { queryOptions } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { CategoriesApi } from "../lib/api";

async function categoryFetch() {
  return await new CategoriesApi().categoriesList();
}

export const categoryOptions = queryOptions({
  queryKey: ["categories"],
  queryFn: categoryFetch,
});

export const categoryPostIntent = "create-category";
export const categoryDeleteIntent = "delete-category";

export const categoryPost = async (formData: FormData) => {
  const title = formData.get("title");

  await new CategoriesApi().categoriesCreate({
    category: {
      title: title as string,
    },
  });
  queryClient.invalidateQueries(categoryOptions);
  return null;
};

export const categoryDelete = async (formData: FormData) => {
  const id = formData.get("id");

  await new CategoriesApi().categoriesDestroy({
    id: +(id as string),
  });
  queryClient.invalidateQueries(categoryOptions);
  return null;
};
