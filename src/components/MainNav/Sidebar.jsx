import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { makeStyles } from '@material-ui/styles';
import ImportContacts from '@material-ui/icons/ImportContacts';
import { List, Link } from '@material-ui/core';
import MenuListItem from './MenuListItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const SideBar = ({ menuItems }) => {
  const classes = useStyles();

  return (
    <List component="ul" className={classes.root}>
      {menuItems.map(item => (
        <Link
          key={uuid()}
          component="a"
          color="inherit"
          href={item.route}
        >
          <MenuListItem icon={item.icon} label={item.label} />
        </Link>
      ))}
      <Link
        component="a"
        color="inherit"
        href="https://www.ipibooks.com/"
      >
        <MenuListItem icon={<ImportContacts />} label="IPI Books" />
      </Link>
    </List>
  );
};

SideBar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string,
      label: PropTypes.string,
      external: PropTypes.bool,
      icon: PropTypes.node
    })
  ).isRequired
};

export default SideBar;
