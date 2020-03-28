import React from 'react';
import { useField } from 'formik';

import { Checkbox, FormControlLabel } from "@material-ui/core";

const FormikCheckbox = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <FormControlLabel
      control={
        <Checkbox
          {...field}
          {...props}
        />
      }
      label={label}
    />
  );
};

export default FormikCheckbox;
