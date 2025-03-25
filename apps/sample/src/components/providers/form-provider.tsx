"use client";

import type { PropsWithChildren } from "react";
import type { FieldValues, SubmitHandler, UseFormProps } from "react-hook-form";

import { DevTool } from "@hookform/devtools";
import { FormProvider as RHFProvider, useForm } from "react-hook-form";

export interface FormProviderProps extends UseFormProps, PropsWithChildren {
  onSubmit: SubmitHandler<FieldValues>;
}

export default function FormProvider({
  children,
  onSubmit,
  ...formOptions
}: FormProviderProps) {
  const methods = useForm(formOptions);

  return (
    <RHFProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      <DevTool control={methods.control} />
    </RHFProvider>
  );
}
