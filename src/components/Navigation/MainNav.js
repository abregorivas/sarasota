import React, { useState } from "react"
import Brand from "./Brand"
import Menu from "./Menu"
import MenuIcon from "@material-ui/icons/Menu"
import SideBar from "./SideBar"
import Hero from "../Hero/Hero"
import { makeStyles } from "@material-ui/styles"
import { MainNavRoutes } from "../../Api/navigation"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { AppBar, Toolbar, Drawer, IconButton } from "@material-ui/core"

const useStyles = makeStyles({
  toolbar: {
    justifyContent: "Space-between",
    height: "100px",
    backgroundColor: "white",
  },
})

const MainNav = () => {
  const classes = useStyles()
  const matches = useMediaQuery("(max-width:800px)")

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  return (
    <nav className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Brand />

          {matches ? (
            <IconButton
              color="primary"
              aria-label="Menu"
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Menu menuItems={MainNavRoutes} />
          )}
        </Toolbar>
      </AppBar>
      <Hero />
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        <SideBar menuItems={MainNavRoutes} />
      </Drawer>
    </nav>
  )
}

export default MainNav
