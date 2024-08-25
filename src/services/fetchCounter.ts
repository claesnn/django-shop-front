import { queryOptions } from "@tanstack/react-query";
import { Counter } from "../types";
import { queryClient } from "./queryClient";

async function counterFetch() {
  const response = await fetch(`http://127.0.0.1:8000/api/global-counters/1/`);
  const data: Counter = await response.json();
  return data;
}

export const counterOptions = queryOptions({
  queryKey: ["counter"],
  queryFn: () => counterFetch(),
});

export const counterPostIntent = "increment-counter";

export const counterPost = async () => {
  await fetch("http://127.0.0.1:8000/api/global-counters/1/increment/", {
    method: "POST",
  });
  queryClient.invalidateQueries(counterOptions);
  return null;
};
