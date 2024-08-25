import { queryOptions } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import { GlobalCountersApi } from "../lib/api";

async function counterFetch() {
  return await new GlobalCountersApi().globalCountersRetrieve({
    id: 1,
  });
}

export const counterOptions = queryOptions({
  queryKey: ["counter"],
  queryFn: () => counterFetch(),
});

export const counterPostIntent = "increment-counter";

export const counterPost = async () => {
  await new GlobalCountersApi().globalCountersIncrementCreate({
    id: 1,
  });
  queryClient.invalidateQueries(counterOptions);
  return null;
};
