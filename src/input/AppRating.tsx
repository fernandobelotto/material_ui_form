import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Rating,
  Slider,
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
};

export const AppRating = <T extends FieldValues>({
  control,
  name,
  label,
  helperText,
  errors,
}: Props<T>) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <Rating
              value={field.value || 0}
              onChange={(_e: any, value: any) => field.onChange(value)}
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
