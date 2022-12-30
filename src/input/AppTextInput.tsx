import {
  FilledInput,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import {
  Control,
  Controller,
  FieldErrorsImpl,
  FieldValues,
  Path,
  UnPackAsyncDefaultValues,
} from "react-hook-form";

type Props<T extends Partial<FieldValues>> = {
  control: Control<T>;
  name: Path<UnPackAsyncDefaultValues<T>>;
  label?: string;
  helperText?: string;
  errors: Partial<FieldErrorsImpl<T>>;
  variant?: "standard" | "filled" | "outlined";
};

export const AppTextInput = <T extends FieldValues>({
  control,
  name,
  label,
  helperText,
  errors,
  variant = "standard",
}: Props<T>) => {
  return (
    <>
      <FormControl variant={variant}>
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <Controller
          control={control}
          name={name}
          render={({ field }) => {
            return {
              outlined: (
                <OutlinedInput
                  label={label}
                  value={field.value || ""}
                  onChange={field.onChange}
                />
              ),
              filled: (
                <FilledInput
                  value={field.value || ""}
                  onChange={field.onChange}
                />
              ),
              standard: (
                <Input
                  value={field.value || ""}
                  onChange={field.onChange}
                />
              ),
            }[variant];
          }}
        />
        <FormHelperText>
          {(errors?.[name]?.message as string) || helperText || ""}
        </FormHelperText>
      </FormControl>
    </>
  );
};
