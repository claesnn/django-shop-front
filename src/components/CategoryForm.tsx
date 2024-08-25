import { useEffect } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useSubmit } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { categoryPostIntent } from "../services/fetchCategories";

export default function CategoryForm() {
  const { handleSubmit, reset, formState, control } = useForm();
  const submit = useSubmit();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ title: "" });
    }
  }, [formState, reset]);

  const onSubmit = (data: FieldValues) => submit(data, { method: "POST" });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full max-w-lg"
    >
      <Controller
        control={control}
        rules={{ required: true, minLength: 3 }}
        render={({ field }) => <Input label="Title" type="text" {...field} />}
        name="title"
      />
      <Controller
        name="intent"
        control={control}
        defaultValue={categoryPostIntent}
        render={({ field }) => (
          <Button variant="secondary" type="submit" {...field}>
            Submit
          </Button>
        )}
      />
    </form>
  );
}
