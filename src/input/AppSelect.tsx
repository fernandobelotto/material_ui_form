import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { PropsWithChildren } from "react";

import {
  Control,
  Controller,
  FieldErrorsImpl,
  FieldValues,
  Path,
  UnPackAsyncDefaultValues,
} from "react-hook-form";

type Props<T extends Partial<FieldValues>> = PropsWithChildren<{
  control: Control<T>;
  name: Path<UnPackAsyncDefaultValues<T>>;
  label?: string;
  helperText?: string;
  errors: Partial<FieldErrorsImpl<T>>;
}>;

export const AppSelect = <T extends FieldValues>({
  control,
  name,
  label,
  helperText,
  errors,
  children,
}: Props<T>) => {
  return (
    <FormControl>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <Select
              label={name}
              value={field.value || ""}
              onChange={field.onChange}
            >
              {children}
            </Select>
          );
        }}
      />
      <FormHelperText>
        {(errors?.[name]?.message as string) || helperText || ""}
      </FormHelperText>
    </FormControl>
  );
};
