import React from 'react';
import {connect} from 'react-redux';
import ConditionalRoute from "./ConditionalRoute";


const UnauthenticatedRoute = ({isAuthenticated, ...props}) => {
  return (
    <ConditionalRoute
      {...props}
      condition={!isAuthenticated}
      redirectRoute="/"
    />
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(UnauthenticatedRoute);
