import { queryOptions } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { client } from "../lib/open-api/api-client";

async function counterFetch() {
  const { data } = await client.GET("/api/global-counters/{id}/", {
    params: { path: { id: 1 } },
  });
  if (data) {
    return data;
  } else {
    return null;
  }
}

export const counterOptions = queryOptions({
  queryKey: ["counter"],
  queryFn: () => counterFetch(),
});

export const counterPostIntent = "increment-counter";

export const counterPost = async () => {
  await client.POST("/api/global-counters/{id}/increment/", {
    params: { path: { id: 1 } },
  });
  queryClient.invalidateQueries(counterOptions);
  return null;
};
