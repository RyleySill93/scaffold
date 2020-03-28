import React from 'react';
import {Route, Redirect} from "react-router-dom";


const ConditionalRoute = ({condition, redirectRoute, ...props}) => {
  return condition ? <Route {...props} /> : <Redirect to={redirectRoute}/>
};

export default ConditionalRoute;
