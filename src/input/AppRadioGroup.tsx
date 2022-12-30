import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
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

const AppRadioGroup = <T extends FieldValues>({
  control,
  name,
  label,
  helperText,
  errors,
  children,
}: Props<T>) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <RadioGroup
              value={field.value || ""}
              onChange={field.onChange}
            >
              {children}
            </RadioGroup>
          );
        }}
      />
      <FormHelperText>
        {(errors?.[name]?.message as string) || helperText || ""}
      </FormHelperText>
    </FormControl>
  );
};

AppRadioGroup.RadioButton = ({
  value,
  label,
}: {
  value: any;
  label: string;
}) => {
  return (
    <FormControlLabel
      value={value}
      control={<Radio />}
      label={label}
    />
  );
};

export default AppRadioGroup;

/* <FormControlLabel value="female" control={<Radio />} label="Female" />
<FormControlLabel value="male" control={<Radio />} label="Male" /> */
