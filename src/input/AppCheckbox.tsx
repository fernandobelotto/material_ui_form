import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
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
  question: string;
};

export const AppCheckbox = <T extends FieldValues>({
  control,
  name,
  label,
  helperText,
  errors,
  question,
}: Props<T>) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <FormControlLabel
              control={<Checkbox {...field} />}
              label={question}
            />
          );
        }}
      />
      <FormHelperText>
        {(errors?.[name]?.message as string) || helperText || ""}
      </FormHelperText>
    </FormControl>
  );
};
