import Select from "react-select";

export const SelectField = ({
  options,
  field,
  form,
}: {
  options: any;
  field: any;
  form: any;
}) => (
  <Select
    options={options}
    defaultValue={options[0]}
    name={field.name}
    value={
      options ? options.find((option: any) => option.value === field.value) : ""
    }
    onChange={(option) => form.setFieldValue(field.name, option.value)}
    onBlur={field.onBlur}
  />
);
