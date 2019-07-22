import React, { useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  Divider,
  Typography
} from '@material-ui/core';
import Brand from './Brand';
import Menu from './Menu';
import SideBar from './Sidebar';
import MainNavRoutes from '../../api/navigation';

const useStyles = makeStyles(theme => ({
  root: {},
  toolbar: {
    justifyContent: 'Space-between',
    height: '100px',
    backgroundColor: 'white'
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  toolbarDrawer: {
    minHeight: 100,
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    ...theme.mixins.toolbar,
    textTransform: 'uppercase'
  },
  bigAvatar: {
    margin: 10,
    width: 40,
    height: 40
  }
}));

const MainNav = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:1000px)');

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [side]: open });
    };

  return (
    <nav className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Brand />

          {!matches ? (
            <Menu menuItems={MainNavRoutes} />
          ) : (
            <IconButton
              color="primary"
              aria-label="Menu"
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        <div className={classes.toolbarDrawer}>
          <div>
            <Typography variant="h5">Sarasota</Typography>
          </div>
          <IconButton onClick={toggleDrawer('left', false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <SideBar menuItems={MainNavRoutes} />
      </Drawer>
    </nav>
  );
};

export default MainNav;
