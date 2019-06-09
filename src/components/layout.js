import React, { Fragment } from "react"
import PropTypes from "prop-types"

import MainNav from "./Navigation/MainNav"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import theme from "../theme"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <MainNav />
        {children}
      </MuiThemeProvider>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
