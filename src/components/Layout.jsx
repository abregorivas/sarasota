import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import MainNav from './MainNav';
import theme from '../theme';
import Footer from './Footer';

const Layout = ({ children }) => (
  <Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <MainNav />
      {children}
      <Footer />
    </MuiThemeProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
