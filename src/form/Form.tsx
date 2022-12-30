import {
  Button,
  Container,
  Divider,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { AppCheckbox } from "../input/AppCheckbox";
import AppRadioGroup from "../input/AppRadioGroup";
import { AppRating } from "../input/AppRating";
import { AppSelect } from "../input/AppSelect";
import { AppSlider } from "../input/AppSlider";
import { AppSwitch } from "../input/AppSwitch";
import { AppTextInput } from "../input/AppTextInput";

const { RadioButton } = AppRadioGroup;

type FormType = {
  text: string;
  checkbox: boolean;
  editable: string;
  number: number;
  select: string;
  switch: boolean;
  textarea: string;
  radio: string;
  pinInput: string;
  slider: string;
  rating: number;
};

export const Form = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormType>();

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={2}
          divider={<Divider />}
        >
          <Typography variant="h4">Material UI + React Hook Form</Typography>
          <AppCheckbox<FormType>
            control={control}
            name="checkbox"
            label="Checkbox"
            errors={errors}
            question="Are you sure?"
          />
          <AppSwitch<FormType>
            control={control}
            name="switch"
            label="Switch"
            errors={errors}
            question="Active user?"
          />
          <AppSlider<FormType>
            control={control}
            name="slider"
            label="Slider input"
            errors={errors}
          />
          <AppRating<FormType>
            control={control}
            name="rating"
            label="Rating input"
            errors={errors}
          />
          <AppTextInput<FormType>
            control={control}
            name="text"
            label="Text input"
            errors={errors}
            variant="outlined"
          />
          <AppRadioGroup<FormType>
            control={control}
            name="radio"
            label="Radio Buttons"
            errors={errors}
          >
            <RadioButton
              value="1"
              label="label1"
            />
            <RadioButton
              value="2"
              label="label2"
            />
            <RadioButton
              value="3"
              label="label3"
            />
          </AppRadioGroup>
          <AppSelect<FormType>
            control={control}
            name="select"
            label="Select"
            errors={errors}
          >
            <MenuItem value={1}>value 1</MenuItem>
            <MenuItem value={2}>value 2</MenuItem>
            <MenuItem value={3}>value 3</MenuItem>
          </AppSelect>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Container>
  );
};
