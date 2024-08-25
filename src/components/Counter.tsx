import Button from "./Button";
import { useQuery } from "@tanstack/react-query";
import { counterOptions, counterPostIntent } from "../services/fetchCounter";
import { Form } from "react-router-dom";

export default function Counter() {
  const { data } = useQuery(counterOptions);

  return (
    <div>
      <Form method="post">
        <Button type="submit" name="intent" value={counterPostIntent}>
          Press the counter: {data?.count}
        </Button>
      </Form>
    </div>
  );
}
