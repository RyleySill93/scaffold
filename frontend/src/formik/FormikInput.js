import React from 'react';
import { useField } from 'formik';

import { TextField } from "@material-ui/core";

const FormikInput = ({ ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error;
  return (
     <TextField
      {...field}
      {...props}
      error={error}
      helperText={error}
    />
  );
};

export default FormikInput;
