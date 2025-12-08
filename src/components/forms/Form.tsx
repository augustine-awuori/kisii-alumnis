import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import type z from "zod";

interface Props<T> {
  children?: React.ReactNode;
  onSubmit: (data: T) => Promise<void>;
  schema: z.ZodType<T>;
}

export default function Form<T>({ children, onSubmit, schema }: Props<T>) {
  const form = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(
          onSubmit as unknown as (data: FormData) => void
        )}
        className="space-y-6"
      >
        {children}
      </form>
    </FormProvider>
  );
}
