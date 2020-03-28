import React, { useEffect } from "react";
import { connect } from "react-redux";

import Helmet from 'react-helmet';

import DateFnsUtils from "@date-io/date-fns";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";

import maTheme from "./theme";
import Routes from "./routes/Routes";
import * as actions from './redux/actions';


function App({ theme, refreshToken }) {
  useEffect(refreshToken, []);

  return (
    <React.Fragment>
      <Helmet
        titleTemplate="%s | Material App"
        defaultTitle="Material App - React Admin & Dashboard Template"
      />
      <StylesProvider injectFirst>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <MuiThemeProvider theme={maTheme[0]}>
            <ThemeProvider theme={maTheme[0]}>
              <Routes />
            </ThemeProvider>
          </MuiThemeProvider>
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </React.Fragment>
  );
}


const mapDispatchToProps = dispatch => ({
    refreshToken: () => dispatch(actions.refreshToken()),
});

export default connect(null, mapDispatchToProps)(App);
