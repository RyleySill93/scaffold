import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from "../redux/actions";
import styled from "styled-components";


import {
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
} from "@material-ui/core";

import {
  Power
} from "react-feather";

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

class UserMenu extends React.Component {
  state = {
    anchorMenu: null
  };

  toggleMenu = event => {
    this.setState({ anchorMenu: event.currentTarget });
  };

  closeMenu = () => {
    this.setState({ anchorMenu: null });
  };

  render() {
    const { anchorMenu } = this.state;
    const open = Boolean(anchorMenu);

    return (
      <React.Fragment>
        <IconButton
          aria-owns={open ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={this.toggleMenu}
          color="inherit"
        >
          <Power />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorMenu}
          open={open}
          onClose={this.closeMenu}
        >
          <MenuItem
            onClick={() => {
              this.props.history.push('/profile');
              this.closeMenu();
            }}
          >
            Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.props.signOut();
              this.closeMenu();
            }}
          >
            Sign out
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(actions.signOut()),
});

const routed = withRouter(UserMenu);

export default connect(null, mapDispatchToProps)(routed);
