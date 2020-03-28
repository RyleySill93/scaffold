import React from "react";
import styled from "styled-components";
import Helmet from 'react-helmet';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';

import {
  FormControl,
  Button as MuiButton,
  Paper,
  Typography,
  Grid,
  Link,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import FormikInput from "../../formik/FormikInput";

const Button = styled(MuiButton)(spacing);

const Wrapper = styled(Paper)`
  padding: ${props => props.theme.spacing(6)}px;

  ${props => props.theme.breakpoints.up("md")} {
    padding: ${props => props.theme.spacing(10)}px;
  }
`;

function SignUp({ signUp }) {
  return (
    <Wrapper>
      <Helmet title="Register" />
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Create your account
      </Typography>
      <Typography component="h2" variant="body1" align="center">
        Already have an account?&nbsp;
        <Link component={NavLink} to="/auth/sign-in">
          Sign in.
        </Link>
      </Typography>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
          password: '',
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required('Required'),
          lastName: Yup.string()
            .required('Required'),
          username: Yup.string()
            .required('Required')
            .email('Invalid email address'),
          password: Yup.string()
            .required('Required')
        })
        }
        onSubmit={values => signUp(values)}
      >
        <Form>
          <Grid container spacing={6}>
            <Grid item md={6}>
              <FormControl fullWidth mb={3}>
                <FormikInput
                  id="firstName"
                  name="firstName"
                  label="First name"
                  required
                />
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <FormControl fullWidth mb={3}>
                <FormikInput
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  required
                />
              </FormControl>
            </Grid>
          </Grid>
          <FormControl margin="normal" required fullWidth>
            <FormikInput
              id="username"
              name="username"
              label="Email Address"
              autoComplete="email"
              required
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <FormikInput
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              required
            />
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            mt={2}
            type="submit"
          >
            Create your account
          </Button>
        </Form>
      </Formik>
    </Wrapper>
  );
}

const mapDispatchToProps = dispatch => ({
    signUp: payload => dispatch(actions.signUp(payload)),
});

export default connect(null, mapDispatchToProps)(SignUp);
