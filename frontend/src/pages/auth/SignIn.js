import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import Helmet from 'react-helmet';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

import {
  FormControl,
  Button as MuiButton,
  Paper,
  Typography,
  Link,
} from "@material-ui/core";
import {spacing} from "@material-ui/system";


import FormikInput from '../../formik/FormikInput';
import FormikCheckbox from '../../formik/FormikCheckbox';
import * as actions from "../../redux/actions";
import FormikAlert from "../../formik/FormikAlert";

const Button = styled(MuiButton)(spacing);

const Wrapper = styled(Paper)`
  padding: ${props => props.theme.spacing(6)}px;

  ${props => props.theme.breakpoints.up("md")} {
    padding: ${props => props.theme.spacing(10)}px;
  }
`;

function SignIn({ signIn }) {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Required')
      .email('Invalid email address'),
    password: Yup.string()
      .required('Required')
  });

  return (
    <Wrapper>
      <Helmet title="Sign In"/>
      <Formik
        initialValues={{
          username: '',
          password: '',
          rememberMe: false,
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => signIn(values, actions.setStatus)}
      >
        <Form>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Sign in to your account
          </Typography>
          <Typography component="h2" variant="body1" align="center">
            Don't have an account?&nbsp;
            <Link component={NavLink} to="/auth/sign-up">
              Sign up.
            </Link>
          </Typography>
          <FormikAlert
            severity="error"
            name="formError"
          />
          <FormControl margin="normal" required fullWidth>
            <FormikInput
              id="username"
              name="username"
              label="Email Address"
              autoFocus
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
          <FormikCheckbox
            id="remember-me"
            name="rememberMe"
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            mb={2}
            type="submit"
          >
            Sign in
          </Button>
          <Button
            component={Link}
            to="/auth/reset-password"
            fullWidth
            color="primary"
          >
            Forgot password
          </Button>
        </Form>
      </Formik>
    </Wrapper>
  );
}

const mapDispatchToProps = dispatch => ({
    signIn: (payload, setStatus) => dispatch(actions.signIn(payload, setStatus)),
});

export default connect(null, mapDispatchToProps)(SignIn);
