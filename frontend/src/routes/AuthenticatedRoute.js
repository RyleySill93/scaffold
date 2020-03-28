import React from 'react';
import {connect} from 'react-redux';
import ConditionalRoute from "./ConditionalRoute";


const AuthenticatedRoute = ({isAuthenticated, ...props}) => {
  return (
    <ConditionalRoute
      {...props}
      condition={isAuthenticated}
      redirectRoute="/auth/sign-in"
    />
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(AuthenticatedRoute);
