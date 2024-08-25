import { Form } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  categoryDeleteIntent,
  categoryOptions,
} from "../services/fetchCategories";
import Button from "./Button";

export default function CategoryList() {
  const { data } = useQuery(categoryOptions);
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Category</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((category) => (
            <tr key={category.id}>
              <td>{category.title}</td>
              <td className="py-1">
                <Form method="delete">
                  <input type="hidden" name="id" value={category.id} />
                  <Button
                    variant="secondary"
                    type="submit"
                    name="intent"
                    value={categoryDeleteIntent}
                  >
                    Delete
                  </Button>
                </Form>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
