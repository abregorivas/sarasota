import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const MenuListItem = ({ icon, label }) => (
  <ListItem button component="li">
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={label} />
  </ListItem>
);

MenuListItem.propTypes = { icon: PropTypes.node, label: PropTypes.string };
MenuListItem.defaultProps = { icon: null, label: 'Menu Item' };

export default MenuListItem;
