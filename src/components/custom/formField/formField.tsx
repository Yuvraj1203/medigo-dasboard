"use client";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type FormFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  error?: string;
  placeholder?: string;
  formName: string; //example => category-rhf-name
};

export const FormField = <T extends FieldValues>({
  ...props
}: FormFieldProps<T>) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={`${props.formName}-${props.name}`}>
            {props.label ? props.label : props.name}
          </FieldLabel>
          <Input
            {...field}
            id={`${props.formName}-${props.name}`}
            aria-invalid={fieldState.invalid}
            placeholder={props.placeholder}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
