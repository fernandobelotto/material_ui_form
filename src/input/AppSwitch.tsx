import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Switch,
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

export const AppSwitch = <T extends FieldValues>({
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
              control={<Switch {...field} />}
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
