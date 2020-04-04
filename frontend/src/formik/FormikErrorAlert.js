import React from 'react';
import Alert from '@material-ui/lab/Alert';

const FormikAlert = props => {
  const status = props.form.status;
  if (!status || !status[props.name]) return null;

  return (
    <Alert severity="">
      { status[props.name] }
    </Alert>
  )
};