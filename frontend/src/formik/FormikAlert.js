import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Field } from 'formik';

const FormikAlert = props => {
  const AlertComponent = (alertProps) => {
     return !alertProps.form || !alertProps.form.status || !alertProps.form.status[props.name] ? () => <div/> : (
        <Alert severity={props.severity || 'info'}>
          { alertProps.form.status[props.name] }
        </Alert>
      );
  }

  return (
    <Field
      { ...props }
      name={props.name}
      component={AlertComponent}
    />
  )
};

export default FormikAlert;
